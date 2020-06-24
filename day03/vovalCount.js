function vowelCount(str) {
  const voval = ['a', 'o', 'u', 'e', 'i'];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (voval.includes(str[i])) {
      count += 1;
    }
  }
  return count;
}

var test = vowelCount('All cows eat grass should return');
console.log(test);
