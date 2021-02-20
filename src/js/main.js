//= jquery.min.js
//= owl.carousel.js

var owl = $(".work__owl-carousel");
owl.owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    touchDrag: false,
    mouseDrag: false,
    responsive: {
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});