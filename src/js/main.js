//= jquery.min.js
//= owl.carousel.js

$(".work__owl-carousel").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    touchDrag: false,
    navText: ['',''],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items:3
        },
        1400:{
            items:4
        },
        1500:{
            items:5
        }
    }
});


$(".tariffs__owl-carousel").owlCarousel({
    loop: false,
    margin: 20,
    nav: true,
    dots: false,
    touchDrag: false,
    navText: ['',''],
    responsive: {
        0:{
            items:1,
        },
        768:{
            items: 2
        },
        1100:{
            items: 3
        },
    }
});


$(".spheres-of-life__owl-carousel").owlCarousel({
    loop: false,
    margin: 27,
    nav: true,
    dots: false,
    touchDrag: false,
    navText: ['',''],
    mouseDrag: false,
    responsive: {
        0:{
            items:1
        },
        510:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items: 4
        }
    }
});


$(".reviews__owl-carousel").owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    dots: false,
    touchDrag: false,
    navText: ['',''],
    mouseDrag: false,
    responsive: {
        0:{
            items: 1
        }
    }
});


$('.video__owl-carousel').owlCarousel({
    items:1,
    merge:true,
    loop:false,
    margin: 0,
    nav: true,
    dots: false,
    video:true,
    navText: ['',''],
    lazyLoad:false,
    center:false,
    responsive:{
        0: {
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
})