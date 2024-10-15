let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".gallery-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
/*
let accordions = document.querySelectorAll(".faqs .row .content .box");

accordions.forEach((acco) => {
  acco.onclick = () => {
    accordions.forEach((subAcco) => {
      subAcco.classList.remove("active");
    });
    acco.classList.add("active");
  };
}); */ 

let accordion = document.querySelectorAll('.accordion-container .accordion');

accordion.forEach(acco =>{
    acco.onclick = () => {
        accordion.forEach(subacco => {
            subacco.classList.remove('active')
        });
        acco.classList.add('active');
    }
})


var swiper = new Swiper(".review-slider", {
  loop:true,
  grabCursor: true,
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
      delay: 5500,
      disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
  },
}); 
