let num = -523;
let text = num.toString();
let reversed = text.split("").reverse().join("");
let reversedNum = parseInt(reversed) * Math.sign(num);
console.log(reversedNum);
