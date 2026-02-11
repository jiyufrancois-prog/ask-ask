const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const letterWindow = document.querySelector(".letter-window");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Open letter
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    letterWindow.classList.add("open");
  }, 50);
});

// Move NO button (PC + Mobile safe)
function moveNoButton(e) {
  e.preventDefault();

  const container = letterWindow.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = container.width / 2 - btnRect.width;
  const maxY = container.height / 2 - btnRect.height;

  const moveX = (Math.random() - 0.5) * maxX;
  const moveY = (Math.random() - 0.5) * maxY;

  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// YES clicked
yesBtn.addEventListener("click", () => {
  title.textContent = "YIPEE BLEE SAID YES!! ૮ ˶ᵔ ᵕ ᵔ˶ ა ";

  catImg.src = "dancing-dog.gif";

  letterWindow.classList.add("final");
  buttons.style.display = "none";
  finalText.style.display = "block";
});
