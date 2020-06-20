function letterCount(str, search) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === search.toLowerCase()) {
      count += 1;
    }
  }
  return count;
}

var test = letterCount('Hello apple pie', 'o');
console.log(test);
