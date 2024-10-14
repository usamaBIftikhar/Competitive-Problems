const chunkArray = (arr, size) => {
  let chunkedArray = [];
  let index = 0;
  while (index < arr.length) {
    let chunk = arr.slice(index, index + size);
    chunkedArray.push(chunk);
    index += size;
  }
  return chunkedArray;
};
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
