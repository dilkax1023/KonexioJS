// #Letter Capitalize

function letterCapitalize(sentence) {
  var strArray = sentence.split(' ');
  var total = '';
  for (var i = 0; i < strArray.length; i++) {
    total += strArray[i].slice(0, 1).toUpperCase() + strArray[i].slice(1) + ' ';
  }
  return total;
}

console.log(letterCapitalize('konexio'));
console.log(letterCapitalize('bring your umbrella'));
