const burger = document.querySelector('.burger')
const nav = document.querySelector('.header__nav')
const header = document.querySelector('.header')
const body = document.querySelector('.page')

/* const width = document.documentElement.clientWidth */

if (body && header && nav && burger) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    nav.classList.toggle('active')
    header.classList.toggle('active')
    body.classList.toggle('lock')
  })
}

/* ---SWIPER--- */
const swiper = new Swiper('.features__swiper', {
  loop: true,
  spaceBetween: 28,
  slidesPerView: 1,
  breakpoints: {
    540: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
