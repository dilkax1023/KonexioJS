const request = require('request');

function getChuckNorrisFact() {
  request('https://api.chucknorris.io/jokes/random?category=dev', function (
    error,
    response,
    body
  ) {
    console.error('error:', error);
    console.log('statusCode:', response && response.statusCode);
    var body = JSON.parse(body);
    console.log(body.value);
  });
}

getChuckNorrisFact();
