function dashInsert(str) {
  var split = str.split('');
  for (let i = 0; i < split.length; i++) {
    if (Number(split[i]) % 2 === 1 && Number(split[i + 1]) % 2 === 1) {
      split.splice(i + 1, 0, '-');
    }
  }
  // return checkImpair(split);
  // var isNotImpair = split.every((el) => {
  //   return el % 2 !== 1;
  // });
  // if (isNotImpair) {
  //   return '0';
  // }
  return split.join('');
}

// function checkImpair(arr) {
//   var isNotImpair = arr.every((el) => {
//     return el % 2 !== 1;
//   });
//   if (isNotImpair) {
//     console.log('0');
//     return '0';
//   }
//   return arr.join('');
// }

console.log(dashInsert('2462665555688'));
