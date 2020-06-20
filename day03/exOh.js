function exOh(str) {
  let countX = 0;
  let countO = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'x') {
      countX += 1;
    } else {
      countO += 1;
    }
    console.log(countX, countO);
  }
  return countX === countO;
}

console.log(exOh('oxoxoxoxoxox'));
