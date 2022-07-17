console.log('1. Слайдер изображений в секции destinations +50 \n2. Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50 \nНажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение). +25 \nОбщая оценка: 125.')
//Burger Variables

const burgerOpen = document.querySelector('.burger_icon');
const burgerClose = document.querySelector('.burger_close_icon');
const burgerMenu = document.querySelector('.header_menu_list');
const header = document.querySelector('header')
const menuList = document.querySelector('.header_menu_list');
const menuLinks = document.querySelectorAll('.header_menu_list-item');
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
const accountLink = document.querySelector('.account')

// Slider variables

const sliderWrapper = document.querySelector('.destination_images')
const sliderItems = document.querySelectorAll('.destination_single_image')
const sliderDots = document.querySelectorAll('.dot');
const sliderArrowLeft = document.querySelector('.arrow_left');
const sliderArrowRight = document.querySelector('.arrow_right');


// BURGER MENU

const closeBurger = () => {
    burgerMenu.classList.remove('show');
    overlay.classList.remove('show');
}

const openBurger = () => {
    burgerMenu.classList.add('show');
    overlay.classList.add('show');
}

burgerClose.addEventListener('click', () => {
    closeBurger();
})

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeBurger();

        console.log(link)
    })
})


burgerOpen.addEventListener('click', () => {
    openBurger()
})

overlay.addEventListener('click', () => {
    closeBurger();
    popup.classList.remove('active');
    popupRegister.classList.remove('active');
    body.style.overflow = 'auto'
})


//SLIDER

let i = 0;

const resetActiveDot = () => {
    sliderDots.forEach(dot => {
        dot.classList.remove('active')
    })
}

resetActiveDot();

const resetShowImages = () => {
    sliderItems.forEach(item => {
        item.classList.add('hide')
        item.classList.remove('show')
    })
}

if (window.screen.width < 541) {
    sliderDots[0].classList.add('active')
} else {
    sliderDots[1].classList.add('active')
}

const changeSlides = (dot, i) => {

    if (window.screen.width < 541) {
        resetShowImages();
        sliderItems[i].classList.remove('hide')
        sliderItems[i].classList.add('show')
    } else {
        if (i === 0) {
            sliderWrapper.style.transform = 'translateX(50%)'
        } else if (i === 1) {
            sliderWrapper.style.transform = 'translateX(0)'
        } else if (i === 2) {
            sliderWrapper.style.transform = 'translateX(-50%)'
        }
    }

    dot.classList.add('active')
}

const checkActiveArrow = (i) => {
    if (i === 0) {
        sliderArrowLeft.classList.remove('active');
        sliderArrowRight.classList.add('active');
    } else if (i === 1) {
        sliderArrowLeft.classList.add('active');
        sliderArrowRight.classList.add('active');
    } else if (i === 2) {
        sliderArrowLeft.classList.add('active');
        sliderArrowRight.classList.remove('active');
    }
}

sliderDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        resetActiveDot();
        changeSlides(dot, i);
        checkActiveArrow(i);
    })


})

sliderItems.forEach((img, i) => {
    img.addEventListener('click', () => {
        resetActiveDot();
        changeSlides(sliderDots[i], i);
    })

})



sliderArrowRight.addEventListener('click', () => {
    i++;
    if (i <= 2) {
        resetActiveDot();
        changeSlides(sliderDots[i], i);
    } else {
        i = 2;
    }

    checkActiveArrow(i);
})


sliderArrowLeft.addEventListener('click', () => {
    i--;
    if (i >= 0) {
        resetActiveDot();
        changeSlides(sliderDots[i], i);
    } else {
        i = 0;
    }

    checkActiveArrow(i);
})

//POPUP

logInBtn.addEventListener('click', (e) => {

    popup.classList.add('active');
    overlay.classList.add('show');
    body.style.overflow = 'hidden'
})

accountLink.addEventListener('click', (e) => {
    e.preventDefault();
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



