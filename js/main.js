$(document).ready(function () {
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
    
    var menuButton = $('.menu-button');
    menuButton.on('click', function () {
        $('.navbar-bottom').toggleClass('navbar-bottom_visible');
    });

    var subscribeButton = $('.subscribe__button');
    subscribeButton.on('click', function () {
        event.preventDefault();
    });

    var modalButton = $('[data-toggle="modal"]');  //document.QuerySelector
    var closeModalButton = $('.modal__close');


    modalButton.on('click', openModal);                 // on=addEventListener
    closeModalButton.on('click', closeModal);

    function openModal() {
        var modalOverlay = $('.modal__overlay');
        var modalDialog = $('.modal__dialog');  
        modalOverlay.addClass('modal__overlay--visible');
        modalDialog.addClass('modal__dialog--visible');
    }

    function closeModal(event) {
        event.preventDefault()
        var modalOverlay = $('.modal__overlay');
        var modalDialog = $('.modal__dialog');  
        modalOverlay.removeClass('modal__overlay--visible');
        modalDialog.removeClass('modal__dialog--visible');
    }

    $(document).keydown(function(eventObject){
        if (eventObject.which == 27) {closeModal(event)};
    });
});