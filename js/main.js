var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.slider-button--next',
        prevEl: '.slider-button--prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
})
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
}