// First Reverse
function firstReverse(str) {
  strRev = '';
  for (var i = str.length - 1; i >= 0; i--) {
    strRev += str[i];
  }
  return strRev;
}
console.log(
  `reversted result of 'I Love Code' est : ${firstReverse('I Love Code')}`
);
