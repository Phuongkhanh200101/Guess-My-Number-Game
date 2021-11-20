'use strict';

//Because without adding 1, the total can never be 20
let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;

function setTextContent(element, value) {
  document.querySelector(element).textContent = value;
}

// function setProperites(element, property, value) {
//   document.querySelector(element).style.property = value;
// }

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    setTextContent('.message', 'No Number!');

    //When there is no input
  } else if (score > 0) {
    if (guess === secret) {
      setTextContent('.message', '🎉 Congratulations!');
      let highScore = document.querySelector('.highscore').textContent;
      if (score > highScore) {
        setTextContent('.highscore', score);
      }
      setTextContent('.number', secret);

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      //When players win
    } else {
      setTextContent(
        '.message',
        guess < secret ? '📉 Too Low!' : '📈 Too High!'
      );
      score--;
      setTextContent('.score', score);

      //When the score is too high or too low
    }
  } else {
    setTextContent('.message', '😥 You lost!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secret = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  setTextContent('.number', '?');
  setTextContent('.message', 'Start guessing...');
  setTextContent('.score', score);
  document.querySelector('.guess').value = ' ';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
