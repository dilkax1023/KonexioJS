//13. function
console.log('#13 **** function ****');
function checkNums(num1, num2) {
  if (num1 > num2) {
    return 'num1 is greater than num2';
  } else if (num1 === num2) {
    return 'num1 is equal to num2';
  } else {
    return 'num1 is lower than num2';
  }
}

var input1 = checkNums(3, 122);
console.log(input1);
var input2 = checkNums(67, 67);
console.log(input2);
