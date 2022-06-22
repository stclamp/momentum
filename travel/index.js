console.log('1. Вёрстка валидная +10. \n2. Вёрстка семантическая +20 \n3. Вёрстка соответствует макету +39(секция stories минимальные расхождения) \n4. Требования к css + 12 \n5. Интерактивность, реализуемая через css +15(Плавная прокрутка по якорям работает не во всех браузерах) \nОбщая оценка: 96.')

let burgerOpen = document.querySelector('.burger_icon');
let burgerClose = document.querySelector('.burger_close_icon');
let burgerMenu = document.querySelector('.header_menu_list');
let menuLinks = document.querySelectorAll('.header_menu_list')

burgerOpen.addEventListener('click', () => {
    burgerMenu.classList.add('show');
})

burgerClose.addEventListener('click', () => {
    burgerMenu.classList.remove('show');
})

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('show');
    })
})
