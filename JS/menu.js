
const menu = document.querySelector(".nav-links2");
const iconButton = document.querySelector(".menu-icon");


const toggleMenu = () => {
  menu.classList.toggle('menu-open')
  console.log("hello")
}

iconButton.addEventListener('click', () => {
  toggleMenu();
})








