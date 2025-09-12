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

// ✅ Detect mobile devices
const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
// ✅ Detect small screen (tablet/phone)
const isSmallScreen = window.innerWidth < 1024;
// ✅ Detect language (default: English)
const lang = navigator.language.startsWith('id') ? 'id' : 'en';

if (isMobile || isSmallScreen) {
  let messageTitle, messageText;

  if (lang === 'id') {
    messageTitle = '⚠️ Hanya Tersedia di Desktop';
    messageText =
      'Website ini tidak bisa dibuka di perangkat mobile atau tablet. Silakan gunakan komputer (desktop/laptop) untuk pengalaman terbaik.';
  } else {
    messageTitle = '⚠️ Desktop Only';
    messageText =
      'This website cannot be accessed on mobile or tablet devices. Please use a computer (desktop/laptop) for the best experience.';
  }

  document.body.innerHTML = `
    <div style="
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      height:100vh;
      text-align:center;
      font-family:sans-serif;
      background:#f9f9f9;
      color:#333;
      padding:20px;
    ">
      <h1 style="margin-bottom:16px;">${messageTitle}</h1>
      <p style="max-width:500px;">${messageText}</p>
    </div>
  `;
}
