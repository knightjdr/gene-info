const mean = (arr) => {
  const n = arr.length;

  if (n === 0) {
    return 0;
  }

  return arr.reduce((a, b) => a + b) / n;
};

const median = (arr) => {
  const n = arr.length;

  if (n === 0) {
    return 0;
  }

  arr.sort((a, b) => a - b);

  const half = Math.floor(n / 2);

  if (n % 2) {
    return arr[half];
  }

  return (arr[half - 1] + arr[half]) / 2.0;
};

const std = (arr) => {
  const n = arr.length;

  if (n === 0) {
    return 0;
  }

  const arrMean = mean(arr);
  return Math.sqrt(arr.map(x => ((x - arrMean) ** 2)).reduce((a, b) => a + b) / n);
};

module.exports = {
  mean,
  median,
  std,
};
