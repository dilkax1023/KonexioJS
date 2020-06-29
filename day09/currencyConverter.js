const request = require('request');

const argv = process.argv.slice(2);
console.log(argv);

const base = argv[0].toUpperCase();
console.log(base);
const targetMon = argv[1].toUpperCase();
console.log(targetMon);
const somme = argv[2];

request(
  'http://data.fixer.io/api/latest?access_key=c5138bbd6058e6eebfea769699b6b1b9',
  function (error, response, body) {
    console.error('error:', error);
    console.log('statusCode:', response && response.statusCode);
    const bodyData = JSON.parse(body);
    bodyData.base = base;
    console.log(bodyData.rates[targetMon]);
  }
);
