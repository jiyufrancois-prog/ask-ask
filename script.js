// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const letterWindow = document.querySelector(".letter-window");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// =========================
// OPEN LETTER
// =========================
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    letterWindow.classList.add("open");
  }, 50);
});

// =========================
// MOVE NO BUTTON (PC + MOBILE SAFE)
// =========================
function moveNoButton(event) {
  event.preventDefault(); // prevents accidental clicks on mobile

  const container = letterWindow.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  // Safe movement boundaries
  const maxX = container.width / 2 - btnRect.width;
  const maxY = container.height / 2 - btnRect.height;

  const moveX = (Math.random() - 0.5) * maxX;
  const moveY = (Math.random() - 0.5) * maxY;

  noBtn.style.transition = "transform 0.25s ease";
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

// Desktop hover
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile tap
noBtn.addEventListener("touchstart", moveNoButton);

// =========================
// YES BUTTON CLICK
// =========================
yesBtn.addEventListener("click", () => {
  title.textContent = "YIPEEE NES SAID YES!!";

  // Make sure this matches your real file name
  catImg.src = "dancing dog.gif"; 

  letterWindow.classList.add("final");
  buttons.style.display = "none";
  finalText.style.display = "block";
});
