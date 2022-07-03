console.log('1. Вёрстка соответствует макету. Ширина экрана 390px +48 \n2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15 \n3. На ширине экрана 390рх и меньше реализовано адаптивное меню +22 \nОбщая оценка: 85.')

let burgerOpen = document.querySelector('.burger_icon');
let burgerClose = document.querySelector('.burger_close_icon');
let burgerMenu = document.querySelector('.header_menu_list');
let header = document.querySelector('header')
let menuList = document.querySelector('.header_menu_list');
let menuLinks = document.querySelectorAll('.header_menu_list');
let overlay = document.querySelector('.overlay');


burgerClose.addEventListener('click', () => {
    burgerMenu.classList.remove('show');
    overlay.classList.remove('show');
})

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('show');
        overlay.classList.remove('show')
    })
})

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('burger_icon')) {
        burgerMenu.classList.add('show');
        overlay.classList.add('show');
    } else if (!e.target.classList.contains('header_menu_list')) {
        burgerMenu.classList.remove('show');
        overlay.classList.remove('show');
    }
})


