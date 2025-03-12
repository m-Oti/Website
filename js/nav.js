var prevScrollpos = window.scrollY;

window.addEventListener("scroll", function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos < currentScrollPos) {
    document.querySelector("header").classList.add("hidden");
  } else if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").classList.remove("hidden");
  }
  prevScrollpos = currentScrollPos;
});
