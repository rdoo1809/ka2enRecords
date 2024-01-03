const hamburgBtn = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

function toggleButton() {
  navList.classList.toggle("show");
}

hamburgBtn.addEventListener("click", toggleButton);

//Slide animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove(".show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
