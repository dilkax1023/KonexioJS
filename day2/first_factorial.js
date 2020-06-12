//First Factorial
function firstFactorial(num) {
  var total = 1;
  for (var i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}
console.log(`Factorial de 8: ${firstFactorial(8)}`);
console.log(`Factorial de 4: ${firstFactorial(4)}`);
