const hasData = expression => (
  Boolean(expression
  && (
    expression.cells
    || expression.tissues
  ))
);

export default hasData;
