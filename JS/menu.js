
const menu = document.querySelector(".menu2");
const iconButton = document.querySelector(".menu-icon");


const toggleMenu = () => {
  menu.classList.toggle('menu-open')
}

iconButton.addEventListener('click', () => {
  toggleMenu();
})










// // Start Here: Create a reference to the ".menu" class
// const menu = document.querySelector('.menu')
// // create a reference to the ".menu-button" class
// const menuButton = document.querySelector('.menu-button')
// // Using your menuButton reference, add a click handler that calls toggleMenu


// const toggleMenu = () => {
//   menu.classList.toggle('menu--open')
//   // Toggle the "menu--open" class on your menu reference. 
// }

// menuButton.addEventListener('click', () => {
//   toggleMenu();
// })