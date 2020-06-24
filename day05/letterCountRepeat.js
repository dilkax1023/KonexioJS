function letterCountRepeat(str) {
  // split the string words by space
  var splittedStr = str.split(' ');

  // my console
  console.log('1# split the string:');
  console.log(splittedStr);

  // words frequency array []:
  var wordsFreqArr = [];
  splittedStr.forEach(function (word) {
    wordsFreqArr.push(getWordFreq(word));
  });
  // my console
  console.log('2# array of obj where stocked the freq of every letter');
  console.log(wordsFreqArr);
  // print the most repeated word of the given string
  printWordOfHighestFreq(splittedStr, getMaxFreq(wordsFreqArr));
}

// generate an letter-frequency object
function getWordFreq(word) {
  var letterArr = word.split('');
  var wordFreqObj = letterArr.reduce(function (counter, currLetter) {
    if (counter[currLetter]) {
      counter[currLetter]++;
    } else {
      counter[currLetter] = 1;
    }
    return counter;
  }, {});
  return wordFreqObj;
}

// generate an obj in which the heighest frequent letter saved
function getMaxFreq(arr) {
  var maxFreqLetterObj = {};
  arr.forEach(function (wordObj, index) {
    var wordArr = Object.values(wordObj);
    maxFreqLetterObj[index] = Math.max(...wordArr);
  });
  console.log(
    '3# obj in which the most freq letter of every word and its index saved'
  );
  console.log(maxFreqLetterObj);
  return maxFreqLetterObj;
}

// print out the word that repeated the most
function printWordOfHighestFreq(arr, obj) {
  var arrOfKeys = Object.keys(obj);
  var mostRepeatedWord = arrOfKeys.reduce(function (a, b) {
    if (obj[a] >= obj[b]) {
      return a;
    } else {
      return b;
    }
  });
  console.log(
    'The mysterious word whose letters repeated the most at first is:'
  );
  console.log(arr[mostRepeatedWord]);
  console.log('******* bien joué *******');
}

//testing
letterCountRepeat('Hello apple pie');
