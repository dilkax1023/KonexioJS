// # arrayAddition
function arrayAddition(arr) {
  var sortedArray = arr.sort(function (a, b) {
    return a - b;
  });
  var sum = 0;
  for (var i = 0; i < arr.length - 1; i++) {
    sum += sortedArray[i];
  }
  console.log(sum);
  if (sum === sortedArray[arr.length - 1]) {
    return true;
  } else {
    return false;
  }
}
var comparison = arrayAddition([1, 3, 6, 18, 6]);
console.log(comparison);
