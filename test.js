


var myimg = setInterval(function(){ setimg() }, 3500);

function setimg() {
        let top = document.querySelector("section.background-img");
        if(
            top.style.backgroundImage == 'url("../img/background4.jpg")'
        ){
            top.style.backgroundImage = 'url("../img/background5.jpg")'
        }else if(
            top.style.backgroundImage == 'url("../img/background5.jpg")'
        ){
            top.style.backgroundImage = 'url("../img/background11.jpg")'
        }else{
            top.style.backgroundImage = 'url("../img/background4.jpg")'
        }
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 5,
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        960: {
            slidesPerView: 3,
        },
        '@1.5': {
            slidesPerView: 4,
        }
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});

