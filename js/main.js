
//         Header on scroll

let header = document.querySelector('.header');
let headerHeight = header.clientHeight;

window.onscroll = function(){
    if(window.pageYOffset + headerHeight > headerHeight){
        header.classList.add('fixed');
    }else {
        header.classList.remove('fixed');
    }
}

// Burger menu

let headerBurger = document.querySelector('.header-burger');
let menu = document.querySelector('.menu');
let body = document.querySelector('body');

headerBurger.onclick = function() {
    headerBurger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('no-scroll');
}

//    ----------      Slider

document.addEventListener("DOMContentLoaded", function(event){
    $('.reviews-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});