var arr = [
  {
    firstName: 'Daniel',
    surname: 'Beckham',
  },
  {
    firstName: 'David',
    surname: 'Craig',
  },
];

var arr1 = arr.map(function (person) {
  //return {...arr,}
});

function checkImpair(arr) {
  var isImpair = arr.every((el) => {
    return Number(el) % 2 !== 1;
  });
  if (!isImpair) {
    console.log('0');
    return 0;
  } else {
    return arr;
  }
}
