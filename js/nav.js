document.addEventListener("DOMContentLoaded", function () {
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

  document
    .querySelector("#hamburger-trigger")
    .addEventListener("click", function () {
      document.querySelector("header").classList.add("menu-expanded");
    });

  document
    .querySelector("#close-trigger")
    .addEventListener("click", function () {
      document.querySelector("header").classList.remove("menu-expanded");
    });
});
