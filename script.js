// YEAR
document.getElementById('year').textContent = new Date().getFullYear();

// CONNECT BUTTON → CALL
document.getElementById('connectBtn').onclick = () => {
  window.location.href = "tel:+918637294641";
};

// SCROLL HEADER EFFECT
window.addEventListener("scroll", () => {
  const header = document.querySelector(".custom-header");
  if (window.scrollY > 20) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});

// REVEAL ANIMATION
const reveals = document.querySelectorAll(".reveal");
function revealElements() {
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < window.innerHeight - 80) el.classList.add("active");
  });
}
window.addEventListener("scroll", revealElements);
revealElements();

// TYPING EFFECT
const roles = [
  "UI/UX Designer",
  "Web Developer",
  "Software Tester",
  "Creative Thinker",
  "Tech Enthusiast"
];

let i = 0, j = 0, deleting = false;

function type() {
  const textElement = document.getElementById("typingText");
  const word = roles[i];

  if (!deleting) {
    textElement.textContent = word.substring(0, j++);
    if (j > word.length + 5) deleting = true;
  } else {
    textElement.textContent = word.substring(0, j--);
    if (j < 0) {
      deleting = false;
      i = (i + 1) % roles.length;
    }
  }

  setTimeout(type, deleting ? 30 : 20);
}
type();
