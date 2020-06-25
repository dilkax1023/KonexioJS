function formatDate(date) {
  var splited = date.split('-');
  var res = [];
  for (let i = splited.length - 1; i >= 0; i--) {
    res.push(splited[i]);
  }
  var formatedDate = res.join('/');
  return formatedDate;
}

var test = formatDate('2018-11-17');
console.log(test);
