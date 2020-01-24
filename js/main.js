$('.nav__link').on( 'click', function(){
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({
                scrollTop: $(dest).offset().top - 150 // прокручиваем страницу к требуемому элементу
            }, 500 // скорость прокрутки
        );
    }
    return false;
});

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
    spaceBetween: 300,
    centeredSlides: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--news',
        prevEl: '.swiper-button-prev--news',
    },
  })