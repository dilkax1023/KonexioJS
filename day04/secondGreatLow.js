init();
function init() {
  const myArr = process.argv.slice(2);
  let parsedArr = [];
  for (let i = 0; i < myArr.length; i++) {
    parsedArr.push(parseInt(myArr[i]));
  }
  console.log(secondGreatLow(parsedArr));
}

function secondGreatLow(arr) {
  if (arr.length < 2) {
    return 'Array length must be greater ou equal to 2';
  }
  const sortedArr = arr.sort((a, b) => a - b);
  return `${sortedArr[1]}, ${sortedArr[sortedArr.length - 2]}`;
}
