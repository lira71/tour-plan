var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.hotel-slider__button--next',
        prevEl: '.hotel-slider__button--prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("ya_map", {
        center: [41.04388125, 28.99894122],
        zoom: 15
    }, {
        searchControlProvider: 'yandex#search'
    });
    myMap.geoObjects
        .add(new ymaps.Placemark([41.04388125, 28.99894122], {
            balloonContent: '<strong>GRAND HILTON HOTEL</strong>'}, {
            preset: 'islands#greenDotIconWithCaption'
        })); 
};
var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.reviews-slider__button--next',
        prevEl: '.reviews-slider__button--prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
})