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


function initForm() {
    $('form').submit(function (e) {
      e.preventDefault();
      let mailExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;
      let theForm = $(this);
      const email = theForm.find('input[name="email"]').val();
      const name = theForm.find('input[name="name"]').val();
      const phone = theForm.find('input[name="phone"]').val();
  
      if (email && !mailExp.test(email)) {
        theForm.find('.form__errors').text('Почта введена некорректно');
        return false;
      } else {
        if (!name || !phone) {
          theForm.find('.form__errors').text('Заполните все поля');
          return false;
        } else {
          theForm.find('.form__errors').text('');
        }
      }
  
      $.ajax({
        type: 'POST',
        url: 'mail.php',
        data: theForm.serialize(),
      })
        .done(function () {
          theForm
            .find('.form__status')
            .text('Сообщение успешно отправлено!')
            .addClass('mt-12');
          theForm.find('.form__submit').hide();
        })
        .fail(function () {
          theForm
            .find('.form__status')
            .text(
              'Ошибка отправки сообщения. Пожалуйста, повторите попытку'
            )
            .addClass('mt-12');
          theForm.find('.form__submit').hide();
        });
  
      return false;
    });
  }
  
  initForm();
  