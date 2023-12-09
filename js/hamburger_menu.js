const navbarList = document.querySelector('.navbar-list');
const hamburgerMenu = document.querySelector('#hamburger-menu');

hamburgerMenu.onclick = () => {
  navbarList.classList.toggle('active');
};

// Hides navbar-list when not clicked on hamburger or navbar-list
document.addEventListener('click', function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarList.contains(e.target)) {
    navbarList.classList.remove('active');
  }
});

// Hides the navbar-list when the document is loaded
document.addEventListener('DOMContentLoaded', function () {
  navbarList.classList.remove('active');
});