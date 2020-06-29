const prompt = require('prompt');

const sckema = {
  properties: {
    input: {
      description: "Card ? (type 'y' or 'yes' for a new card)",
      type: 'string',
      required: true,
    },
  },
};

prompt.start();

// init score and banque
let score = 0;
const banque = getRndInteger(16, 21);

// start the game:
displayPrompt(score);

function displayPrompt(score) {
  prompt.get(sckema, function (err, result) {
    if (err) {
      return onErr;
    }
    if (result.input === 'y' || result.input === 'yes') {
      if (banque === 21) {
        console.log('banque is ' + banque, ', banque win');
        return false;
      }
      //take a New Card
      takeNewCard(score, banque, displayPrompt);
    }
    if (result.input === 'n' || result.input === 'no') {
      // pass the game
      passGame(score, banque);
    }
  });
}

function onErr(err) {
  console.log(err);
}

function takeNewCard(score, banque, callback) {
  var newCard = getRndInteger(1, 11);
  console.log('newCard', newCard);
  score += newCard;
  if (score > 21) {
    console.log('your score is ' + score, ', you lost the game');
    return false;
  }
  if (score === 21) {
    console.log('your score is ' + score, ', banque is ' + banque, ' you WIN');
    return false;
  } else {
    console.log('your score is ' + score, ', banque is ' + banque);
    callback(score);
  }
}

function passGame(score, banque) {
  if (score <= banque) {
    console.log(
      'your score is ' + score,
      ', banque is ' + banque,
      ', you lost the game'
    );
    return false;
  }
  if (score > banque && score <= 21) {
    console.log(
      'your score is ' + score,
      ', banque is ' + banque,
      ', you Winnnnn'
    );
    return false;
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
