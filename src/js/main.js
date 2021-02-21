//= jquery.min.js
//= owl.carousel.js

$(".work__owl-carousel").owlCarousel({
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


$(".tariffs__owl-carousel").owlCarousel({
    loop: false,
    margin: 0,
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
            items: 3
        }
    }
});


$(".spheres-of-life__owl-carousel").owlCarousel({
    loop: false,
    margin: 27,
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
            items: 4
        }
    }
});