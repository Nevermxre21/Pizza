$(document).ready(function(){
    $(".owl-carousel").owlCarousel({


      responsive : {
        0:{
          items: 1,
          stagePadding: 0,
        },
        300:{
          items: 1,
          margin: 100,
        },

        690:{
          margin: 20,
          items: 2,
          stagePadding: 50,
        },

        1008:{
          items: 1,
          margin: -150,
          stagePadding: 50,
        },

        1300:{
          stagePadding: 100,
          margin: 100,
          items: 3,
        },


      }
    });
    // navToggle
    let nav = $("#nav");
    let navToggle = $("#navToggle");


    $(navToggle).on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");



    });


  });

  $(document).ready(function(){
    let nav = $("#nav");
    let navlink = $(".nav__link");

    $(navlink).on("click", function() {
      nav.removeClass("show");


    });
  });


