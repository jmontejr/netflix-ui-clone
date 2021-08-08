const Netflix = {

  init() {
    this.slider();
  },

  slider() {
    $('.owl-carousel.list_movies').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 2,
        },
        768: {
          items: 3,
        },
        1024: {
          items: 5
        },
        1600: {
          items: 7
        }
      }
    });
  },

};

Netflix.init();
