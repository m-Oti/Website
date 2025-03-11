var prevScrollpos = window.scrollY;
window.onscroll = function() {
var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".topnav").style.top = "0";
  } else {
    document.querySelector(".topnav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}