const gameContainer = document.getElementById("game-container");
const envelopeContainer = document.getElementById("envelope-container");
const letterContainer = document.getElementById("letter-container");
const letterWindow = document.querySelector(".letter-window");

const heart = document.getElementById("heart");
const scoreDisplay = document.getElementById("game-score");

const envelope = document.getElementById("envelope");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

const music = document.getElementById("bg-music");

let score = 0;
const targetScore = 5;


function moveHeart() {
  const area = document.getElementById("game-area");
  const maxX = area.clientWidth - 40;
  const maxY = area.clientHeight - 40;

  heart.style.left = Math.random() * maxX + "px";
  heart.style.top = Math.random() * maxY + "px";
}

heart.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = `Score: ${score} / ${targetScore}`;
  moveHeart();

  if (score >= targetScore) {
    gameContainer.style.display = "none";
    envelopeContainer.style.display = "block";
  }
});

moveHeart();


envelope.addEventListener("click", () => {
  envelopeContainer.style.display = "none";
  letterContainer.style.display = "flex";

  document.body.classList.remove("game-mode");
  document.body.classList.add("letter-mode");

  setTimeout(() => {
    letterWindow.classList.add("open");
  }, 50);

  music.volume = 0.5;
  music.play();
});


function moveNo(e) {
  e.preventDefault();
  const max = 150;
  const x = (Math.random() - 0.5) * max;
  const y = (Math.random() - 0.5) * max;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);


yesBtn.addEventListener("click", () => {
  title.textContent = "YIPEE BLEE SAID YES!!";
  catImg.src = "dancing-dog.gif";
  buttons.style.display = "none";
  finalText.style.display = "block";
});
