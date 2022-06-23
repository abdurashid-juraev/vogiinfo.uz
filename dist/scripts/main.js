// aos animation
AOS.init({
  disable: "mobile",
  once: true,
});
//============================================================
var swiper = new Swiper(".my__swiper", {
  slidesPerView: 2.8,
  spaceBetween: 20,
  grabCursor: true,
  speed: 700,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
});
//=============================================================
const menuRight = document.querySelector(".header__menu-right");
const menuLeft = document.querySelector(".header__menu-left");
const btnWrap = document.querySelector(".menu-sm");
const headerWrap = document.querySelector(".header__menu-wrap");
const gallerysm = document.getElementsByClassName("gallery__sm");
const galleryAll = document.querySelector(".gallery__all");
const eventsCardBlock = document.querySelector(".events__info-card");
const eventsPagination = document.querySelector(".pagination__wrap");
if (window.innerWidth < 992) {
  if (btnWrap) {
    menuRight.insertAdjacentElement("afterend", menuLeft);
    headerWrap.insertAdjacentElement("beforebegin", btnWrap);

    if (gallerysm[4]) {
      gallerysm[4].insertAdjacentElement("afterend", galleryAll);
    }
  }
  if (eventsCardBlock) {
    eventsPagination.insertAdjacentElement("afterend", eventsCardBlock);
  }
}
//==========================================================
// lang select
$(".selector__list li ").click(function () {
  $(this)
    .parent()
    .parent()
    .parent()
    .find(".valueOfButton")
    .html($(this).text());
  $(this).parent().parent().parent().find("input").val($(this).data("key"));
});

var selector_open = false;

// $(".selector__toggle").on("click", function (e) {
//   e.stopPropagation();
//
//   if (selector_open == false) {
//     selector_open = open;
//     $(this).parent().removeClass("closed").addClass("open");
//     $(this).addClass("open--lang");
//   } else {
//     selector_open = false;
//     $(this).parent().removeClass("open").addClass("closed");
//     $(this).removeClass("open--lang");
//   }
// });

$("body").on("click", function () {
  selector_open = true;
  $(".selector").removeClass("open").addClass("closed");
  $(".selector__toggle").removeClass("open--lang");
});
//======================================================================
// header swiper
var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  speed: 800,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
//=================================================================
// video player
let videoCustom = document.querySelectorAll(".video__custom-play");

videoCustom.forEach((videoItem) => {
  let playIcon = videoItem.querySelector(".video__play-icon");
  let player = videoItem.querySelector("video");
  let videoInfo = videoItem.nextElementSibling;
  playIcon.addEventListener("click", () => {
    if (player.paused === false) {
      player.pause();
      videoInfo.classList.remove("opacity");
      videoItem.classList.remove("is-video-playing");
    } else {
      player.play();
      videoInfo.classList.add("opacity");
      videoItem.classList.add("is-video-playing");
    }
  });
});

//======================================================================
// menu burger
$(".burger__btn").click(function () {
  $(headerWrap).toggleClass("menu--show");
  $("body").toggleClass("overflow");
  $(".burger").toggleClass("menu--open");
});
//=====================================================================
// lightGallery
lightGallery(document.getElementById("gallery1"), {
  thumbnail: true,
});
//==================================================================
// nav animation
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();
  if (Math.abs(lastScrollTop - st) <= delta) return;
  if ($(window).scrollTop() >= 90) {
    $("header").addClass("color");
  } else if ($(window).scrollTop() <= 90) {
    $("header").removeClass("color");
  }
  if (st > lastScrollTop && st > navbarHeight) {
    $("header").removeClass("nav-down").addClass("nav-up");
  } else {
    if (st + $(window).height() < $(document).height()) {
      $("header").removeClass("nav-up").addClass("nav-down");
    }
  }

  lastScrollTop = st;
}
//============================================================
// header backgroundColor
const main = document.querySelector(".main");
if (main) {
  main.previousElementSibling.style.backgroundColor = "#172863";
}

//============================================================
// activ tab inner text

const activeTabText = document.querySelector(".tab__active");
const tabLinks = document.querySelectorAll(".tab__nav-link");
const activeTabLink = document.querySelector(".tab__nav-link.active");

if ((activeTabText, tabLinks, activeTabLink)) {
  activeTabText.innerText = activeTabLink.innerText;
  tabLinks.forEach((elTab) => {
    elTab.addEventListener("click", () => {
      activeTabText.innerText = elTab.innerText;
    });
  });
}
//=========================================================
const navLink = document.querySelectorAll(".header__nav-link");

navLink.forEach((elLink) => {
  elLink.addEventListener("click", () => {
    navLink.forEach((item) => {
      item.classList.remove("active--link");
    });
    elLink.classList.add("active--link");
  });
});
//=============================================================

// const pageLink = document.querySelectorAll(".page-link");

// pageLink.forEach((el) => {
//   el.addEventListener("click", () => {
//     pageLink.forEach((item) => {
//       item.classList.remove("active--page");
//     });
//     el.classList.add("active--page");
//   });
// });
//===================================================
