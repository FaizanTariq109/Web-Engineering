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
    if (body.classList.contains("dark-mode")) {
      darkModeToggle.textContent = "🌙"; // Moon Icon
    } else {
      darkModeToggle.textContent = "🌞"; // Sun Icon
    }
  });
});
