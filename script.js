let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent =
      'Masukin Angkanya dulu, Coba ulang!';
    document.querySelector('body').style.backgroundColor = '#900';
    document.querySelector('.guess').disabled = true;
  } else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.message').textContent = 'Wihhh....Hebat!!!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.guess').disabled = true;
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '📈 Ketinggian, Turunin lagi!!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Payah!!!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#900';
      document.querySelector('.guess').disabled = true;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '📉 Kerendahan, naikin lagi!!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Payah!!!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#900';
      document.querySelector('.guess').disabled = true;
    }
  }
});

// button coba ulnag
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Ayo Tebak...';
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.number').style.width = '15rem';
});
