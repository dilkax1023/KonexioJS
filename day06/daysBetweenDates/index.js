var getTimePassed = require('./getTimePassed.js');

var date1 = process.argv[2];
var date2 = process.argv[3];
// console.log(date1);
// console.log(date2);
console.log(getTimePassed.getTimePassed(date1, date2));
