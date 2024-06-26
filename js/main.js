import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });

  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  let direction = window.innerWidth <= 860 ? 'vertical' : 'horizontal';


  var swiper = new Swiper(".swiper", {
    slidesPerView: window.innerWidth <= 860 ? 1 : 4,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      resize: function () {
        this.changeDirection(direction);
      },
    },
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 24,
    dots: true,
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);

var path = window.location.pathname;

var segments = path.split("/");

var secondSegment = segments[1];
if (
  secondSegment == "about.html" ||
  secondSegment == "team.html" ||
  secondSegment == "testimonial.html"
) {
  location.href = "index.html";
}
if (secondSegment == "service.html" || secondSegment == "destination.html") {
  location.href = "index.html";
}

// Destinations Array
let arr = [
  {
    id: 1,
    image:
      "https://c0.wallpaperflare.com/preview/426/557/76/morocco-garden-blue-authentic.jpg",
    destination: "Location 1",
  },
  {
    id: 2,
    image:
      "https://w0.peakpx.com/wallpaper/357/296/HD-wallpaper-city-view-landscape-morocco-istanbul-night-house-island-islands.jpg",
    destination: "Location 2",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1-M0XKZc_9GiYqrmxloZYCWtAPEDNF8LSMAj5lKi0-o9TprNcqMNwJrKuIuUmNhmkE2s&usqp=CAU",
    destination: "Location 3",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOEhLWKe1fFdJbtRAgSwrnKSJULUfdKxwj-g&usqp=CAU",
    destination: "Location 4",
  },
  {
    id: 5,
    image:
      "https://i.pinimg.com/736x/e9/ce/e5/e9cee5ecee9c525cb534f7f0a75f6927.jpg",
    destination: "Location 5",
  },
];

