package extension

import "strings"

func orderItems(term string, items *Items) {
	if len(*items) <= 1 {
		return
	}

	for i, item := range *items {
		lc_gene := strings.ToLower(item.Gene)
		if lc_gene == term {
			(*items)[0], (*items)[i] = (*items)[i], (*items)[0]
			return
		}
	}
}
