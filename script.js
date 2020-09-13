function toggleMobNav() {
  let nav = document.querySelector(".nav-items");
  nav.classList.toggle("show");
}

function scrolledNav() {
  let navBar = document.querySelector(".main-nav");
  let wHeight = window.screen.height;
  if (
    document.body.scrollTop > wHeight / 2 ||
    document.documentElement.scrollTop > wHeight / 2
  ) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
}

window.onscroll = () => scrolledNav();
