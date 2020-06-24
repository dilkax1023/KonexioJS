// 14.(1) power function
console.log('#14(1) *** power function en iterative ****');
function powerFuncIter(num, power) {
  var total = 1;
  if (power < 0) {
    for (var i = power; i < 0; i++) {
      total *= 1 / num;
    }
    return total;
  } else {
    for (var i = 0; i < power; i++) {
      total *= num;
    }
    return total;
  }
}
var puissance = powerFuncIter(3, 0);
console.log(puissance);
