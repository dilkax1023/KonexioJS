// #Letter Capitalize

function letterCapitalize(str) {
  var strArray = str.split(' ');
  var total = '';
  for (var i = 0; i < strArray.length; i++) {
    total += strArray[i].slice(0, 1).toUpperCase() + strArray[i].slice(1) + ' ';
  }
  return total;
}

console.log(
  `what a good day today turns into this: ${letterCapitalize(
    'what a good day today'
  )}`
);
