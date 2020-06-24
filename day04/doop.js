init();

function init() {
  const num1 = parseInt(process.argv[2]);
  const num2 = parseInt(process.argv[4]);
  const operator = process.argv[3];
  console.log(doop(num1, num2, operator));
}

function doop(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    case '%':
      return num1 % num2;
  }
  if (!num2) {
    throw Error('arithmetic operator not provided');
  }
}
