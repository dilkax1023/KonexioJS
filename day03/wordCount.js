function wordCount(str) {
  let count = 0;
  let words = str.split(' ');
  for (let word of words) {
    count += 1;
  }
  return count;
}

var test = wordCount('hello world');
console.log(test);
