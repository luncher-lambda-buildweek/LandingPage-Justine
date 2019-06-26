
const menu = document.querySelector(".nav-links");
const iconButton = document.querySelector(".menu-icon");


const toggleMenu = () => {
  menu.classList.toggle('menu-open')
  console.log("hello")
}

iconButton.addEventListener('click', () => {
  toggleMenu();
})







