const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elTop = el.getBoundingClientRect().top;

    if (elTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});
