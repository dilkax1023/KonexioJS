function passwordGen(num) {
  var mystr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (num >= 6 && num <= 15) {
    var myPassword = '';
    for (var i = 0; i < num; i++) {
      var index = Math.floor(Math.random() * 26);
      console.log(index);
      myPassword += mystr[index];
    }
    return 'the generated password is ' + myPassword;
  }
  return 'your password have to be 6 to 15 caracter majuscule';
}

var generatedPassword1 = passwordGen(8);
var generatedPassword2 = passwordGen(5);
console.log(generatedPassword1);
console.log(generatedPassword2);
