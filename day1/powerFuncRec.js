console.log('#14(2) *** power function en récursive ****');
var total = 1;
function powerFuncRec(num, power) {
  if (power === 0) {
    return 1;
  } else if (power < 0) {
    return (1 / num) * powerFuncRec(num, power + 1);
  }
  return num * powerFuncRec(num, power - 1);
}
console.log(powerFuncRec(-10, 3));
