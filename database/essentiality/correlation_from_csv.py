# from https://gist.github.com/pgm/ac2ac4c664ef81200ce49133cc4cee02
import argparse
import sqlite3
import sys
import numpy as np
import pandas as pd

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("in_csv_0")
    parser.add_argument("in_csv_1")
    parser.add_argument("--batchsize", type=int, default=500)
    parser.add_argument("--limit", help="Top n correlates to keep", type=int, default=100)
    parser.add_argument("output_file")

    args = parser.parse_args()
    in_0_df = pd.read_csv(args.in_csv_0, index_col="DepMap_ID")
    in_1_df = pd.read_csv(args.in_csv_1, index_col="DepMap_ID")
    in_0_df, in_1_df = with_shared_cell_lines(in_0_df, in_1_df)
    in_0_cols = in_0_df.columns
    in_1_cols = in_1_df.columns    
        
    correlations_df = create_correlations_df(in_0_df, in_1_df, args.batchsize, args.limit)
    correlations_df["dim_0"] = [in_0_cols[i] for i in correlations_df["dim_0"]]
    correlations_df["dim_1"] = [in_1_cols[i] for i in correlations_df["dim_1"]]
    correlations_df.to_csv(args.output_file, index=False)


def with_shared_cell_lines(dep_df, biomarker_df):
    shared_cell_lines = np.intersect1d(dep_df.index, biomarker_df.index)
    dep_df = dep_df.loc[shared_cell_lines]
    biomarker_df = biomarker_df.loc[shared_cell_lines]
    return dep_df, biomarker_df


def create_correlations_df(dep_df, biomarker_df, batchsize, limit):
    # assumes rows have already been aligned
    biomarker_df.columns = list(range(len(biomarker_df.columns)))
    partial_dfs = [
        create_correlations_df_partial(dep_df, biomarker_df_partial, limit)
        # for slices of 500 columns at a time from biomarker_df
        for _, biomarker_df_partial in biomarker_df.groupby(
            np.arange(len(biomarker_df.columns)) // batchsize, axis=1
        )
    ]

    return concat_dfs_and_filter(partial_dfs, limit)


def create_correlations_df_partial(dep_df, biomarker_df_partial, limit):
    correlations = fast_cor_with_missing(dep_df.values, biomarker_df_partial.values)
    (
        top_ranked_cols_per_row,
        top_ranked_rows_per_col,
        row_indexes,
        col_indexes,
    ) = top_ranked_indexes_per_row_and_col(-np.abs(correlations), limit)

    df = pd.DataFrame(
        {
            "cor": np.hstack(
                (
                    correlations[row_indexes, top_ranked_cols_per_row],
                    correlations[top_ranked_rows_per_col, col_indexes],
                )
            ),
            "dim_0": list(row_indexes) + list(top_ranked_rows_per_col),
            "dim_1": biomarker_df_partial.columns[
                list(top_ranked_cols_per_row) + list(col_indexes)
            ],
        },
        columns=["dim_0", "dim_1", "cor"],
    )
    return df.drop_duplicates(["dim_0", "dim_1"])


def top_ranked_indexes_per_row_and_col(matrix, limit):
    """Gets the coordinates for the largest `LIMIT` values, by row and by column."""
    num_rows, num_cols = matrix.shape
    limit_per_col = min(num_rows, limit)
    limit_per_row = min(num_cols, limit)

    top_ranked_cols_per_row = np.argpartition(matrix, limit_per_row - 1, axis=1)[
        :, :limit_per_row
    ].flatten()
    top_ranked_rows_per_col = np.argpartition(matrix, limit_per_col - 1, axis=0)[
        :limit_per_col
    ].flatten()

    row_indexes = np.repeat(range(num_rows), limit_per_row)
    col_indexes = np.tile(range(num_cols), limit_per_col)

    return top_ranked_cols_per_row, top_ranked_rows_per_col, row_indexes, col_indexes


def fast_cor_with_missing(x, y):
    # preallocate storage for the result
    result = np.zeros(shape=(x.shape[1], y.shape[1]))

    x_groups = group_cols_with_same_mask(x)
    y_groups = group_cols_with_same_mask(y)
    for x_mask, x_columns in x_groups:
        for y_mask, y_columns in y_groups:
            # print(x_mask, x_columns, y_mask, y_columns)
            combined_mask = x_mask & y_mask

            # not sure if this is the fastest way to slice out the relevant subset
            x_without_holes = x[:, x_columns][combined_mask, :]
            y_without_holes = y[:, y_columns][combined_mask, :]

            c = np_pearson_cor(x_without_holes, y_without_holes)
            # update result with these correlations
            result[np.ix_(x_columns, y_columns)] = c
    return result


def group_cols_with_same_mask(x):
    """
    Group columns with the same indexes of NAN values.
    
    Return a sequence of tuples (mask, columns) where columns are the column indices
    in x which all have the mask.
    """
    per_mask = {}
    for i in range(x.shape[1]):
        o_mask = np.isfinite(x[:, i])
        o_mask_b = np.packbits(o_mask).tobytes()
        if o_mask_b not in per_mask:
            per_mask[o_mask_b] = [o_mask, []]
        per_mask[o_mask_b][1].append(i)
    return per_mask.values()


def np_pearson_cor(x, y):
    """Full column-wise Pearson correlations of two matrices."""
    xv = x - x.mean(axis=0)
    yv = y - y.mean(axis=0)
    xvss = (xv * xv).sum(axis=0)
    yvss = (yv * yv).sum(axis=0)
    # print(xvss, yvss)
    # print(np.matmul(xv.transpose(), yv) , np.sqrt(np.outer(xvss, yvss)))
    result = np.matmul(xv.transpose(), yv) / np.sqrt(np.outer(xvss, yvss))
    return np.maximum(np.minimum(result, 1.0), -1.0)


def concat_dfs_and_filter(dfs, limit):
    df = pd.concat(dfs, ignore_index=True, sort=False)
    df["cor_abs"] = df["cor"].abs()
    df["dim_0_rank"] = df.groupby("dim_1")["cor_abs"].rank(ascending=False)
    df["dim_1_rank"] = df.groupby("dim_0")["cor_abs"].rank(ascending=False)
    df = df[(df["dim_0_rank"] <= limit) | (df["dim_1_rank"] <= limit)]
    del df["cor_abs"]
    del df["dim_0_rank"]
    del df["dim_1_rank"]
    return df


if __name__ == "__main__":
    main()
