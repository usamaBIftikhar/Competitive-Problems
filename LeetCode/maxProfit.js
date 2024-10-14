const maxProfit = (arr) => {
  let max = 0;
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let currentStock = arr[i];
    min = Math.min(currentStock, min);

    let potentialProfit = currentStock - min;

    max = Math.max(potentialProfit, max);
  }
  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
