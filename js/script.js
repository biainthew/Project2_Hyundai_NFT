let wheelDelta = 0;
let browser = 0;
$(".section").each(function (index) {
  $(this).on("mousewheel DOMMouseScroll", function (event) {
    event.preventDefault();
    browser = window.navigator.userAgent.toLowerCase().indexOf("firefox");
    if (browser >= 0) {
      wheelDelta = -event.detail * 40;
    } else {
      wheelDelta = event.originalEvent.wheelDelta;
    }
    if (wheelDelta < 0) {
      if (index < $(".section").length) {
        //0 1
        $("html")
          .stop()
          .animate({ scrollTop: $(this).next().offset().top }, 500);
        console.log(index);
      }
    } else {
      if (index > 0) {
        //1 2
        $("html")
          .stop()
          .animate({ scrollTop: $(this).prev().offset().top }, 500);
      }
    }
  });
});

//header nav click
$(".header-small").click(function () {
  $(".nav").toggleClass("on");
  $(".header-small").toggleClass("header-x");
});

//scrolling span
const mouse = $(".scroll-div");
const mouseControll = $(".scroll-span");

scrollEvent = setInterval(function () {
  mouseControll
    .animate({ top: 30 }, 1000, "linear")
    .animate({ top: 0 }, 1000, "linear");
});

//section3 swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//section5 infinite slide
let contwrap = $(".main-sec5-contwrap");
let sec5ul = $(".main-sec5-ul");
let sec5li = $(".main-sec5-li");
let visibleLi = sec5li;

//section6 swiper
let swiper1 = new Swiper(".swiper1", {
  slidesPerView: "auto",
  centeredSlides: true,
  initialSlide: 6,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    600: {
      slidesPerView: "auto",
    },
    599: {
      slidesPerView: 1,
    },
  },
});
$(".swiper-slide").on("activeIndexChange", function () {
  $(".swiper-slide").removeClass("on-white");
  $("this").addClass("on-white");
});
//footer
let cont = $(".footer-sec1-ul>li div");
let title = $(".footer-sec1-ul>li>a");
let img = $(".footer-sec1-ul li a img");
cont.hide();
title.click(function () {
  let th = $(this).next();
  cont.slideUp();
  img.removeClass("rotate");
  if (th.is(":visible")) {
    $(this).find(img).removeClass("rotate");
    th.slideUp();
  } else {
    th.slideDown();
    $(this).find(img).addClass("rotate");
  }
});
