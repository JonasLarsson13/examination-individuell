const navbar = document.getElementById("navigation");
const menu = document.getElementById("menu");
const menuButton = document.getElementById("toggle-menu");
const menuLineOne = document.getElementById("lineOne");
const menuLineTwo = document.getElementById("lineTwo");
const menuLineThree = document.getElementById("lineThree");

const onScroll = () => {

    const scroll = document.documentElement.scrollTop

    if (scroll > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
window.addEventListener('scroll', onScroll);

const mobileMenu = () => {
  menu.classList.toggle('active-menu');
  menuButton.classList.toggle('active-button');
  menuLineOne.classList.toggle('lineOneActive');
  menuLineTwo.classList.toggle('remove');
  menuLineThree.classList.toggle('lineThreeActive');
};

menu.addEventListener('click', mobileMenu);