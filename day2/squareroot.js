function squareRoot(num) {
  var i = num;
  while (true) {
    console.log(i);
    if (i * i === num) {
      return i;
    } else if (i === 0) {
      return 0;
    }
    i--;
  }
}

console.log(`squareRoot est: ${squareRoot(64)}`);
