const reverseString = (str) => {
  let stack = [];
  let reverse = "";
  for (let char of str) {
    stack.push(char);
  }
  while (stack.length > 0) {
    reverse += stack.pop();
  }
  return reverse;
};

console.log(reverseString("Hello World"));
