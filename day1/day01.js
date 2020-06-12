console.log('hello world');

console.log('#2 **** string ****');
var test = 'a string';
console.log(test);

console.log('#3 ****new string ****');
var testNew = 'a new string';
console.log(testNew);

console.log('#4 ****modifier a string ****');
var food = 'croissant is ok';
console.log(food.replace('ok', 'amazing'));

//5. Nombres entiers
console.log('#5 ****Nombres entiers ****');
var example = 987654321;
console.log(example);

//6. Nombres décimaux
console.log('#6 **** Nombres décimaux ****');
var numFloat = 3.14;
console.log(numFloat);

//7. les arrondis
console.log('#7 **** Les arrondis ****');
var roundUp = 1.5;
var rounded = Math.round(roundUp);
console.log(rounded);

//8. Nombres et chaines de caractėres
console.log('#8 **** Nombres et chaines de caractėres ****');
var n = 256;
console.log(n.toString());

//9. LES conditions
console.log('#9 **** LES conditions ****');
var password = 'azerty';
if (password.length > 5) {
  console.log('the password has more than five characters');
} else {
  console.log('the password has five characters or less');
}

//10. Boucle for
console.log('#10 **** Boucle for ****');
var limit = 10;
var total = 0;
for (var i = 0; i < limit; i++) {
  total = total + i;
}
console.log(total);

//11.Tableaux
console.log('#11 **** Tableaux ****');
var croissantIngredients = ['flour', 'eggs', 'milk'];
console.log(croissantIngredients);

// 12.Accéder aux valeurs d'un tableau
console.log("#12 **** Accéder aux valeurs d'un tableau ****");
var food = ['apple', 'croissant', 'pear'];
console.log(food[1]);

//13. function
console.log('#13 **** function ****');
function checkNums(num1, num2) {
  if (num1 > num2) {
    return 'num1 is greater than num2';
  } else if (num1 === num2) {
    return 'num1 is equal to num2';
  } else {
    return 'num1 is lower than num2';
  }
}

var input1 = checkNums(3, 122);
console.log(input1);
var input2 = checkNums(67, 67);
console.log(input2);

// 14.(1) power function
console.log('#14(1) *** power function en iterative ****');
function powerFuncIter(num, power) {
  var total = 1;
  if (power < 0) {
    for (var i = power; i < 0; i++) {
      total *= 1 / num;
    }
    return total;
  } else {
    for (var i = 0; i < power; i++) {
      total *= num;
    }
    return total;
  }
}
var puissance = powerFuncIter(3, 0);
console.log(puissance);

// 14.(2) power function
console.log('#14(2) *** power function en récursive ****');
var total = 1;
function powerFuncRec(num, power) {
  if (power === 0) {
    console.log(total);
    return;
  } else if (power < 0) {
    total *= 1 / num;
    return powerFuncRec(num, power + 1);
  }
  total *= num;
  return powerFuncRec(num, power - 1);
}
powerFuncRec(-10, 3);
