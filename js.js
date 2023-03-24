// When the user scrolls the page, execute myFunction
window.onscroll = function() {headerStay()};

// Get the header
var header = document.getElementById("buttons");
var container = document.getElementById("content");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function headerStay() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    container.classList.add("flexContainerChanged")
  } else {
    header.classList.remove("sticky");
  }
}