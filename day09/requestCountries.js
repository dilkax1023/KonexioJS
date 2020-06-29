const request = require('request');
request('https://restcountries.eu/rest/v1/all', function (
  error,
  response,
  body
) {
  console.error('error:', error);
  console.log('statusCode:', response && response.statusCode);
  var body = JSON.parse(body);
  var names = [];
  body.forEach((el) => {
    names.push(el.name);
  });

  var countNames = names.join('-');
  console.log(countNames);
});
