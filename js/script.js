// Slider
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 10,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});


var swiper = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    spaceBetween: 10,

    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    },
});

// Pop-up
document.addEventListener('DOMContentLoaded', (e) => {
    // e.preventDefault();
    const ageVerification = document.getElementById('age-verification');
    const notEligible = document.getElementById('not-eligible');
    const welcome = document.getElementById('welcome');
    const input = document.getElementById('age-field');
    const submit = document.getElementById('submit');
    const hasVerified = localStorage.getItem('ageVerified');

    if (!hasVerified) {
        ageVerification.style.display = 'flex';
    }

    submit.addEventListener('click', () => {
        if (input.value < 18 || input.value > 100) {
            notEligible.style.display = 'flex';
            ageVerification.style.display = 'none';
        }
        else {
            localStorage.setItem('ageVerified', 'true');
            ageVerification.style.display = 'none';
            welcome.style.display = 'flex';
            setTimeout(() => {
                welcome.style.display = 'none';
            }, 2000);
        }
    });
});
