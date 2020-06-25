function ageCalculator(date) {
  if (typeof date === 'object') {
    console.log('Date is not a string');
    return 'Date is not a string';
  }
  var suppsedDate = Date.parse(2019, 0, 14);
  var onceUponAtime = Date.parse(date);
  printAge(suppsedDate - onceUponAtime);
}

function printAge(mlsc) {
  var age = Math.floor(mlsc / (3600000 * 24 * 365));
  console.log(age);
  return age;
}

//test
ageCalculator(new Date());
//31 536 000
