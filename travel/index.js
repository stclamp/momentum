console.log('1. Вёрстка валидная +10. \n2. Вёрстка семантическая +20 \n3. Вёрстка соответствует макету +39(секция stories минимальные расхождения) \n4. Требования к css + 12 \n5. Интерактивность, реализуемая через css +15(Плавная прокрутка по якорям работает не во всех браузерах) \nОбщая оценка: 96.')

let burgerOpen = document.querySelector('.burger_icon');
let burgerClose = document.querySelector('.burger_close_icon');
let burgerMenu = document.querySelector('.header_menu_list');
let header = document.querySelector('header')
let menuList = document.querySelector('.header_menu_list');
let menuLinks = document.querySelectorAll('.header_menu_list');
let overlay = document.querySelector('.overlay');


burgerClose.addEventListener('click', () => {
    burgerMenu.classList.remove('show');
    overlay.classList.remove('show')
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
        overlay.classList.add('show')
    } else if (!e.target.classList.contains('header_menu_list')) {
        burgerMenu.classList.remove('show');
        overlay.classList.remove('show')
    }
})


