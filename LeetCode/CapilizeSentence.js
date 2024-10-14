let text = "This is a pargraph which i am going to capitilize";
let capilizedText = text
  .toLowerCase()
  .split(" ")
  .map((word) => word[0].toUpperCase() + word.slice(1))
  .join(" ");
console.log(capilizedText);
