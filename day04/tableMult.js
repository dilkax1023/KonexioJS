init();

function init() {
  const num = parseInt(process.argv[2]);
  if (isNaN(num)) {
    throw Error('NO PARAMETER PROVIDED');
  }
  tableMult(num);
}

function tableMult(num) {
  for (var i = 1; i <= 10; i++) {
    console.log(`${i} * ${num} = ${i * num}`);
  }
}
