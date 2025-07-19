// Load header
fetch("Breeds-Header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

    // Add scroll event listener AFTER header is loaded (optional)
    window.addEventListener("scroll", function () {
      const header = document.querySelector("header");
      if (window.scrollY > 500) {
        header.classList.add("shrink");
      } else {
        header.classList.remove("shrink");
      }
    });
  });

fetch("../Footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });
