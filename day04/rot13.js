init();

function init() {
  const str = process.argv[2];
  console.log(rot13(str));
}

function rot13(str) {
  const myStrLower = 'abcdefghijklmnopkrstuvwxyz';
  const myStrUpper = 'abcdefghijklmnopkrstuvwxyz'.toUpperCase();
  let res = '';
  let index;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      index = myStrUpper.indexOf(str[i]);
      if (index <= 12 && index !== -1) {
        res += myStrUpper[index + 13];
      }
      if (index + 13 > 25) {
        res += myStrUpper[index + 13 - 26];
      }
    }
    if (str[i] === str[i].toLowerCase()) {
      index = myStrLower.indexOf(str[i]);
      if (index <= 12 && index !== -1) {
        res += myStrLower[index + 13];
      }
      if (index + 13 > 25) {
        res += myStrLower[index + 13 - 26];
      }
    }
    if (index === -1) {
      res += str[i];
    }
  }
  return res;
}
