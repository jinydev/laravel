// tns Slider

(function () {
  // Slider first
  if (document.querySelector(".sliderFirst")) {
    var slider = tns({
      container: ".sliderFirst",
      loop: true,
      startIndex: 1,
      items: 1,
      nav: false,
      autoplay: true,
      swipeAngle: false,
      speed: 400,
      autoplayButtonOutput: false,
      mouseDrag: true,
      lazyload: true,
      gutter: 20,
      controlsContainer: "#sliderFirstControls",
      responsive: {
        768: {
          items: 2,
        },
        990: {
          items: 4,
        },
      },
    });
  }

  // Slider second
  if (document.querySelector(".sliderSecond")) {
    var slider = tns({
      container: ".sliderSecond",
      loop: true,
      startIndex: 1,
      items: 1,
      nav: false,
      autoplay: true,
      swipeAngle: false,
      speed: 400,
      autoplayButtonOutput: false,
      mouseDrag: true,
      lazyload: true,
      gutter: 20,
      controlsContainer: "#sliderSecondControls",
      responsive: {
        768: {
          items: 2,
        },
        990: {
          items: 4,
        },
      },
    });
  }

  // Slider third
  if (document.querySelector(".sliderThird")) {
    var slider = tns({
      container: ".sliderThird",
      loop: true,
      startIndex: 1,
      items: 1,
      nav: false,
      autoplay: true,
      swipeAngle: false,
      speed: 400,
      autoplayButtonOutput: false,
      mouseDrag: true,
      lazyload: true,
      gutter: 20,
      controlsContainer: "#sliderThirdControls",
      responsive: {
        768: {
          items: 2,
        },
        990: {
          items: 4,
        },
      },
    });
  }

  // Slider fourth
  if (document.querySelector(".sliderFourth")) {
    var slider = tns({
      container: ".sliderFourth",
      loop: true,
      startIndex: 1,
      items: 1,
      nav: false,
      autoplay: true,
      swipeAngle: false,
      speed: 400,
      autoplayButtonOutput: false,
      mouseDrag: true,
      lazyload: true,
      gutter: 20,
      controlsContainer: "#sliderFourthControls",
      responsive: {
        768: {
          items: 2,
        },
        990: {
          items: 4,
        },
      },
    });
  }

  // Slider testimonial
  if (document.querySelector(".sliderTestimonial")) {
    var slider = tns({
      container: ".sliderTestimonial",
      loop: true,
      startIndex: 1,
      items: 1,
      nav: false,
      autoplay: true,
      swipeAngle: false,
      speed: 400,
      autoplayButtonOutput: false,
      mouseDrag: true,
      lazyload: true,
      gutter: 20,
      controlsContainer: "#sliderTestimonialControls",
      responsive: {
        768: {
          items: 2,
        },
        990: {
          items: 3,
        },
      },
    });
  }

  // Slider testimonial second
  if (document.querySelector(".sliderTestimonialSecond")) {
    var slider = tns({
      container: ".sliderTestimonialSecond",
      loop: true,
      startIndex: 1,
      items: 1,
      nav: false,
      autoplay: true,
      swipeAngle: false,
      speed: 400,
      autoplayButtonOutput: false,
      mouseDrag: true,
      lazyload: true,
      gutter: 20,
      controlsContainer: "#sliderTestimonialSecondControls",
      responsive: {
        768: {
          items: 1,
        },
        990: {
          items: 1,
        },
      },
    });
  }

  // Slider for product
  if (document.querySelector(".product")) {
    var slider = tns({
      container: "#product",
      items: 1,
      startIndex: 1,
      navContainer: "#product-thumbnails",
      navAsThumbnails: true,
      autoplay: false,
      autoplayTimeout: 1000,
      swipeAngle: false,
      speed: 400,
      controls: false,
    });
  }

  // Slider testimonial third
  if (document.querySelector(".sliderTestimonialThird")) {
    var slider = tns({
      container: ".sliderTestimonialThird",
      loop: true,
      startIndex: 1,
      items: 1,
      nav: false,
      autoplay: true,
      swipeAngle: false,
      speed: 400,
      autoplayButtonOutput: false,
      mouseDrag: true,
      lazyload: true,
      gutter: 20,
      controlsContainer: "#sliderTestimonialThirdControls",
      responsive: {
        768: {
          items: 2,
        },
        990: {
          items: 3,
        },
      },
    });
  }

  // Slider testimonial fourth
  if (document.querySelector(".sliderTestimonialFourth")) {
    var slider = tns({
      container: ".sliderTestimonialFourth",
      loop: true,
      startIndex: 1,
      items: 1,
      nav: false,
      autoplay: true,
      swipeAngle: false,
      speed: 400,
      autoplayButtonOutput: false,
      mouseDrag: true,
      lazyload: true,
      gutter: 20,
      controlsContainer: "#sliderTestimonialFourthControls",
      responsive: {
        768: {
          items: 2,
        },
        990: {
          items: 1,
        },
        1400: {
          items: 2,
        },
      },
    });
  }
})();
