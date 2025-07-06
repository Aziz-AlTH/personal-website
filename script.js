// Show "scroll to top" button
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  
  document.querySelectorAll("section").forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
};

// Scroll to top
scrollBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
