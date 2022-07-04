console.log('1. Вёрстка соответствует макету. Ширина экрана 390px +48 \n2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15 \n3. На ширине экрана 390рх и меньше реализовано адаптивное меню +22 \nОбщая оценка: 85.')
//Burger Variables

const burgerOpen = document.querySelector('.burger_icon');
const burgerClose = document.querySelector('.burger_close_icon');
const burgerMenu = document.querySelector('.header_menu_list');
const header = document.querySelector('header')
const menuList = document.querySelector('.header_menu_list');
const menuLinks = document.querySelectorAll('.header_menu_list');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

//Popup variables 

const popup = document.querySelector('.popup.login');
const popupRegister = document.querySelector('.popup.register');
const logInBtn = document.querySelector('.header_login_btn')
const popupForms = document.querySelectorAll('.popup_form');
const popupFormEmail = document.querySelectorAll('.popup_input_email');
const popupFormPassword = document.querySelectorAll('.popup_input_password');
const registerBtn = document.querySelector('.register_btn')
const logInLink = document.querySelector('.login_link')


// BURGER MENU

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

burgerOpen.addEventListener('click', () => {
    burgerMenu.classList.add('show');
    overlay.classList.add('show');
})

overlay.addEventListener('click', () => {
    burgerMenu.classList.remove('show');
    overlay.classList.remove('show');
    popup.classList.remove('active');
    popupRegister.classList.remove('active');
    body.style.overflow = 'auto'
})


// //SLIDER

// const dots = document.querySelectorAll('.dot');
// const images = document.querySelectorAll('.destination_single_image');

// let indexSlide = 0;

// dots.forEach((item, i) => {
//     item.addEventListener('click', () => {
//         changeSlides(indexSlide)
//         indexSlide = i;
//     })
// })

// function changeSlides(index) {

//     images.forEach(item => {
//         item.style.order = 0
//         if (index === 0) {
//             images[index].style.order = index
//         } else if (index === 1) {
//             images[index].style.order = index
//         } else if (index === 2) {
//             images[index].style.order = index
//         }
//     })

// }

//POPUP



logInBtn.addEventListener('click', (e) => {

    popup.classList.add('active');
    overlay.classList.add('show');
    body.style.overflow = 'hidden'
})

popupForms.forEach((form, i) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert(`Your e-mail: ${popupFormEmail[i].value} \nYour password: ${popupFormPassword[i].value}`)
        popupFormEmail[i].value = ''
        popupFormPassword[i].value = ''
        popup.classList.remove('active');
        popupRegister.classList.remove('active');
        overlay.classList.remove('show')
        body.style.overflow = 'auto'
    })
})



registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.remove('active');
    popupRegister.classList.add('active')
    body.style.overflow = 'hidden'

})

logInLink.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.add('active');
    popupRegister.classList.remove('active')
    body.style.overflow = 'hidden'
})



