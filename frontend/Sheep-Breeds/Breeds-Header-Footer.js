// Load Header
fetch("Breeds-Header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

    const header = document.querySelector("header");
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    // Toggle mobile menu
    if (menuToggle) {
      menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
      });
    }

    // Shrink header on scroll
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        header.classList.add("shrink");
      } else {
        header.classList.remove("shrink");
      }
    });
  });

// Load Footer
fetch("../Footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

// Scroll-to-top Button
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.id = "scrollToTopBtn";
document.body.appendChild(scrollBtn);

scrollBtn.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #28a745;
  color: #fff;
  border: none;
  padding: 10px 15px;
  font-size: 20px;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  z-index: 1000;
`;

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
