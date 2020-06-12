// #Simple Adding
function simpleAdding(num) {
  var total = 0;
  for (i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}

console.log(`adding result of the numbers from 1 to 4 est ${simpleAdding(4)}`);
