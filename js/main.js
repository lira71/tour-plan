$(document).ready(function () {
//Слайдер для hotel
var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  effect: "fade",

  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

//Слайдер для reviews
var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },

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
  
  if (e.keyCode == 27) {
    closeModal(event);
  }
});
$(document).mouseup(function (e) {
  
  var div = $(".modal__dialog"); 
  if (
    !div.is(e.target) && 
    div.has(e.target).length === 0
  ) {
    
    closeModal(event); 
  }
});

document.querySelector('.map__preloader').addEventListener('mouseenter', () => {
document.querySelector('.map').innerHTML = '<iframe class="iframe-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12040.256521001236!2d4.904228939542422!3d52.37885613322667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x496b950c06acfa48!2sDoubleTree%20by%20Hilton%20Amsterdam%20Centraal%20Station!5e0!3m2!1sen!2sru!4v1595511100614!5m2!1sen!2sru" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
  });
    
//Валидация форм
$(".form").each(function () {
    $(this).validate({
      rules: {
        phone: {
          minlength: 18
        }
      },
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "Name must be at least 2 letters long",
      },
      email: {
        required: "We need your email address to contact you",
        email: "Wrong format of email",
      },
      phone: {
        required: "We need your phone number to contact you",
        minlength: "Wrong number",
      },
    },
  });
});
$(".subscribe-form").each(function () {
  $(this).validate({
  errorClass: "invalid-sub",
  messages: {
    email: {
      required: "We need your email address to contact you",
      email: "Wrong format of email",
    },
  },
});
});
//Маска для телефона
$('input[name ="phone"]').mask('+7 (000) 000-00-00');

  AOS.init();
});
