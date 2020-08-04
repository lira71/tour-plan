//Слайдер для hotel
var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  //Effect
  effect: "fade",

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },

  //Keyboard control
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
//Подключение API Яндекс Карты
ymaps.ready(function () {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [12.934948, 100.88328],
        zoom: 15.3,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark(
      myMap.getCenter(),
      {
        hintContent: "Grand Hilton Hotel",
      },
      {
        iconLayout: "default#image",
        iconImageHref: "js/location-icon.svg",
        iconImageSize: [40, 52],
        iconImageOffset: [-25, -40],
      }
    );
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable("scrollZoom");
});

//Cоздание parallax эффекта newsletter
$(".newsletter").parallax({ imageSrc: "img/newsletter/newsletter-bg.jpg" });

//Слайдер для reviews
var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },

  //Keyboard control
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

//Создание мобильного меню
$(init);

function autoAdaptiv() {
  if ($(window).outerWidth() < 768) {
    $(".navbar-menu").append($(".navbar-top>.search, .user"));
    //Иначе все улетает обратно
  } else {
    $(".navbar-top").append($(".navbar-menu>.search, .user"));
  }
}

function init() {
  autoAdaptiv();

  $(window).resize(() => autoAdaptiv());
}
//Появление/исчезание меню при нажатии
$(".menu-button").on("click", function () {
  $(".navbar-menu").toggleClass("navbar-menu--active");
  $(".header-menu").toggleClass("header-menu_active");
});
$(".navbar-menu__item").on("click", function () {
  $(".navbar-menu").removeClass("navbar-menu--active");
});

//Модальное окно
var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);

function openModal() {
  var targetModal = $(this).attr("data-href");
  $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
  $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
}
function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
}
$(document).keydown(function (e) {
  // ESCAPE key pressed
  if (e.keyCode == 27) {
    closeModal(event);
  }
});
$(document).mouseup(function (e) {
  // событие клика по веб-документу
  var div = $(".modal__dialog"); // тут записываем в переменную элемент
  if (
    !div.is(e.target) && // если клик был не по нашему блоку
    div.has(e.target).length === 0
  ) {
    // и не по его дочерним элементам
    closeModal(event); // вызываем функцию скрытия
  }
});

//Валидация форм
$(".form").each(function () {
  $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "Name must be at least 2 letters long",
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
      phone: {
        required: "Please specify your phone number",
        minlength: "wrong number dialed",
      },
    },
  });
});
//Маска для телефона
$('input[name|="phone"]').mask("+7(999) 999-9999");
