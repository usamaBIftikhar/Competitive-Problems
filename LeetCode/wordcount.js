const wordCounter = (str) => {
  let lower = str.toLowerCase();
  let words = {};
  let arr = lower.split(/\s+/);
  for (let word of arr) {
    if (word in words) {
      words[word]++;
    } else {
      words[word] = 1;
    }
  }
  return words;
};

console.log(wordCounter("Hello this is my name name usama hello"));
