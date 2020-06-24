function swapCase(str) {
  let myStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      myStr += str[i].toLowerCase();
    } else {
      myStr += str[i].toUpperCase();
    }
  }
  return myStr;
}

var test = swapCase('Hello,LOL');
console.log(test);
