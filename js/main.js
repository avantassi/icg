$('.nav__link').on( 'click', function(){
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({
                scrollTop: $(dest).offset().top - 150 // прокручиваем страницу к требуемому элементу
            }, 500 // скорость прокрутки
        );
    }
    // $('.menu__box').toggleClass('visibility');
    return false;
});

$('.gamburger').click(function(){
  $('.menu').toggleClass('menu-active');
  $('.header').toggleClass('fixed');
});

$('.menu a').click(function() {

  $('.menu').removeClass('menu-active');

});

// $('#menu__toggle').on('click', function(){
//   $('.menu__box').toggleClass('visibility');
//   $('.header').toggleClass('fixed');
//   $('.hero').toggleClass('padding');
//   return false;
// })

var mySwiperFeed = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 300,
    centeredSlides: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

var mySwiperNews = new Swiper ('.swiper-container--news', {
    // Optional parameters
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 150,
    centeredSlides: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--news',
        prevEl: '.swiper-button-prev--news',
    },
  })

var mySwiper = new Swiper ('.swiper-container--hero', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  })