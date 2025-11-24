// Set year
document.getElementById('year').textContent = new Date().getFullYear();

// Connect button → Call
document.getElementById('connectBtn').onclick = () => {
  window.location.href = "tel:+918637294641";
};

// MOBILE MENU TOGGLE
document.getElementById("menuBtn").onclick = () => {
  document.getElementById("navMenu").classList.toggle("show");
};

/* Header scroll effect */
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 20) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});

/* Scroll reveal */
const reveals = document.querySelectorAll(".reveal");
function revealElements() {
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < window.innerHeight - 80) el.classList.add("active");
  });
}
window.addEventListener("scroll", revealElements);
revealElements();

/* Typing effect */
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
