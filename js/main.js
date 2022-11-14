const headerBurger = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");
const headerBurgerLine = headerBurger.querySelector(".header__burger-line");

headerBurger.addEventListener("click", function () {
    headerBurgerLine.classList.toggle("active");
    headerMenu.classList.toggle("active");
})