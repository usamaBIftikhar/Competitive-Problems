const twoSum = (arr, target) => {
  const numMap = {};
  for (let i = 0; i < arr.length; i++) {
    compliment = target - arr[i];
    if (compliment in numMap && numMap[compliment] !== i) {
      return [numMap[compliment], i];
    }
    numMap[arr[i]] = i;
  }
  return [];
};
console.log(twoSum([2, 7, 11, 15], 9));
