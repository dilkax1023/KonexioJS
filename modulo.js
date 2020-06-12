// #modulo

function isEven(num) {
  if (num % 2 != 0) {
    return false;
  }
  return true;
}
console.log(`3 is a even number? you guess it: ${isEven(3)} `);
