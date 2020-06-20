//  first way:
//  this way is better than  the second one thank to its performance
function palindrome(str) {
  for (var i = 0; i <= (str.length - 1) / 2; i++) {
    if (str[i] === str[str.length - 1 - i]) {
    } else {
      break;
    }
  }
  console.log(i);
  if (i >= str.length / 2) {
    return true;
  }
  return false;
}
console.log(palindrome('radar'));

// second way :
// console.log(palindrome('racessar'));
// function palindrome(str) {
//   var i = str.length - 1;
//   var reversedStr = '';
//   while (i >= 0) {
//     reversedStr += str[i];
//     i--;
//   }
//   console.log(reversedStr);
//   if (str === reversedStr) {
//     return true;
//   }
//   return false;
// }
