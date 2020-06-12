//#swap variable

function swap(var1, var2) {
  var myArray = [var1, var2];
  myArray[0] = var2;
  myArray[1] = var1;
  return myArray;
}

console.log(`swap(25, 30) swap it for me: ${swap(25, 30)}`);
