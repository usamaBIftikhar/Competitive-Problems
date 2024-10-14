let text = "dad";
let arr = text.split("").reverse().join("");
if (arr === text) {
  console.log("Palindrome");
} else {
  console.log("not a palindrome");
}
