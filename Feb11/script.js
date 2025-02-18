document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const dropdownMenu = document.getElementById("dropdownMenu");
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  // Toggle dropdown menu
  menuToggle.addEventListener("click", () => {
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });

  // Typewriter Effect for Skills
  const skillsElement = document.getElementById("skill-text"); // Only skill part
  const skills = ["Developer", "Designer", "Solver"];
  let skillIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    let currentSkill = skills[skillIndex];

    // Update skill text without affecting "I am"
    skillsElement.textContent = currentSkill.slice(0, charIndex);

    // Cycle through colors dynamically
    const colors = ["#ff4757", "#1a2a6c", "#0056b3"];
    skillsElement.style.color = colors[skillIndex];

    if (!isDeleting) {
      charIndex++;
      if (charIndex > currentSkill.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
      }
    } else {
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        skillIndex = (skillIndex + 1) % skills.length;
      }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }

  typeEffect(); // Start typing effect

  // Dark Mode Button Scroll Effect
  const darkModeButton = document.getElementById("darkModeToggle");

  window.addEventListener("scroll", () => {
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      darkModeButton.style.top = `${50 + scrollY * 0.2}px`; // Adjust multiplier for smoother effect
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (
      !menuToggle.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.style.display = "none";
    }
  });

  // Dark Mode Toggle
  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Change button icon
    darkModeToggle.textContent = body.classList.contains("dark-mode")
      ? "🌙"
      : "🌞";
  });
});
