// ========== STAR FIELD GENERATOR ==========
function createStars(count) {
  const container = document.querySelector("body");

  // Remove old stars if regenerating
  document.querySelectorAll(".star, .shooting-star").forEach(el => el.remove());

  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // Random size (1–3px)
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Random position
    star.style.top = `${Math.random() * window.innerHeight}px`;
    star.style.left = `${Math.random() * window.innerWidth}px`;

    // Twinkling animation speed
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;

    container.appendChild(star);
  }
}

// ========== SHOOTING STARS ==========
function createShootingStar() {
  const container = document.querySelector("body");
  const star = document.createElement("div");
  star.classList.add("shooting-star");

  // Random start position at top
  star.style.top = `${Math.random() * (window.innerHeight / 2)}px`;
  star.style.left = `-${Math.random() * 200}px`; // start off screen

  container.appendChild(star);

  // Remove after animation
  setTimeout(() => star.remove(), 3000);
}

// ========== INITIALIZE ==========
createStars(200);

// Shooting stars appear randomly every 3–8 seconds
setInterval(() => {
  if (Math.random() > 0.5) createShootingStar();
}, Math.random() * 5000 + 3000);

// Regenerate stars on window resize
window.addEventListener("resize", () => createStars(200));
