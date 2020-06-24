function passwordGen(num) {
  var mystr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (num >= 6 && num <= 15) {
    var myPassword = '';
    for (var i = 0; i < num; i++) {
      var index = Math.floor(Math.random() * 26);
      myPassword += mystr[index];
    }
    return myPassword;
  }
  return 'your password have to be 6 to 15 caracter majuscule';
}

var generatedPassword1 = passwordGen(8);
console.log(generatedPassword1);
