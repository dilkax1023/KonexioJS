function formatDate(date) {
  var splited = date.split('-');
  var res = [];
  for(let i=splited.length-1;)
  for (let i = date.length - 1; i >= 0; i--) {
    res += date[i];
  }
  console.log(res);
  var formatedDate = res.replace('-', '/');
  console.log(formatedDate);
  return formatedDate;
}

var test = formatDate('2018-11-17');
console.log(test);
/*  '2018-11-17'  [2018, 11 ,17] => 
             
     