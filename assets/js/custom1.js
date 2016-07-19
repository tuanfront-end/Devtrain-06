console.log('script from cutsom11111111');



$(document).ready(function(){

  // $fn.scrollSpeed(step, speed, easing);
     jQuery.scrollSpeed(100, 800);
  // End $fn.scrollSpeed(step, speed, easing);


  //owlCarousel Js ---------------------------------------------
     var owl = $("#owl-demo");
      var owl_2 = $(" #owl-demo-2");
      var owl_3 = $(" #owl-demo-3");
      var owl_4 = $(" #owl-demo-4");
      var owl_5 = $(" #owl-demo-5");
   
      owl.owlCarousel({
          items : 1, //10 items above 1000px browser width
          itemsDesktop : [1000,1], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,1], // betweem 900px and 601px
          itemsTablet: [600,1], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
      });
      owl_2.owlCarousel({
          items : 1, //10 items above 1000px browser width
          itemsDesktop : [1000,1], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,1], // betweem 900px and 601px
          itemsTablet: [600,1], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
      });

      owl_3.owlCarousel({
          items : 7, //10 items above 1000px browser width
          itemsDesktop : [1000,5], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,3], // betweem 900px and 601px
          itemsTablet: [600,2], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
      });
      owl_4.owlCarousel({
          items : 5, //10 items above 1000px browser width
          itemsDesktop : [1000,3], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,2], // betweem 900px and 601px
          itemsTablet: [600,1], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
      });
     owl_5.owlCarousel({
          items : 1, //10 items above 1000px browser width
          itemsDesktop : [1000,1], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,1], // betweem 900px and 601px
          itemsTablet: [600,1], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
      });
      // Custom Navigation Events
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".next_2").click(function(){
        owl_2.trigger('owl.next');
      })
      $(".next_3").click(function(){
        owl_3.trigger('owl.next');
      })
      $(".next_5").click(function(){
        owl_5.trigger('owl.next');
      })


      $(".prev, .prev_2, .prev_3").click(function(){ 
        owl.trigger('owl.prev');
      })
       $(".prev_2").click(function(){ 
        owl_2.trigger('owl.prev');
      })
      $(".prev_3").click(function(){ 
        owl_3.trigger('owl.prev');
      })
      $(".prev_5").click(function(){ 
        owl_5.trigger('owl.prev');
      })



      $(".play").click(function(){
        owl_4.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
      })
      $(".stop").click(function(){
        owl_4.trigger('owl.stop');
      })
   
  
   //owlCarousel Js ---------------------------------------------


	 // external js: isotope.pkgd.js------------------------------------

  	// End external js: isotope.pkgd.js---------------------------------

    //Slider show -js------------------------------------
      var myIndex = 0;
      carousel();
     
      function carousel() {
          var i;
          var x = document.getElementsByClassName("mySlides");
          for (i = 0; i < x.length; i++) {
             x[i].style.display = "none";
          }
          myIndex++;
          if (myIndex > x.length) {myIndex = 1;}
          if (myIndex < 1) {myIndex = x.length;}
          x[myIndex-1].style.display = "block";
          time = setTimeout(carousel, 6000); // Change image every 2 seconds
      }

      // function next(){
         
      //  }
      $('.prev-slideshow').click(function(event) {
           clearTimeout(time);
           $('.process').animate({width: '0%'}, 3500);
           myIndex = $('.mySlides:visible').index() - 1 ;
           $('.mySlides img').removeClass('slideInUp');
           $('.mySlides img').addClass('slideInLeft');
           carousel() ;
       });
       $('.next-slideshow').click(function(event) {
           clearTimeout(time);
           myIndex = $('.mySlides:visible').index() + 1 ;
           $('.mySlides img').removeClass('slideInUp');
           $('.mySlides img').addClass('slideInLeft');
           carousel() ;
       });
      // function prev(){
         
      //  }
     
    // End slideShow-js------------------------------------

     // Hover-img-js------------------------------------
        // $('.hover-search ').hover(function() {
        //     // $(this).children('.inner-far').children('.inner').removeClass('animated wobble');
        //     // $(this).children('.inner-far').children('.inner').addClass('animated flip');
        // });
        // $('.hover-search').mouseout(function() {
        //     // $(this).children('.inner-far').children('.inner').removeClass('animated flip');
        //     // $(this).children('.inner-far').children('.inner').addClass('animated wobble');
        // });
     // End Hover-img-js------------------------------------

     // Js-Go to top Button here
      $('.up-top').click(function(event) {
        $('html, body').animate({
                    scrollTop: 0
                }, 2000);
      });
     // Js-Go to top Button here

    // .Ul Li navbar Hover here Js
      // $('.my-nav ul li').hover(function(){
      //   $(this).children('ul').css({
      //     background: 'red',
      //     color: 'green',
      //     opacity: '1',

      //   });
      // });

    //End  .Ul Li navbar Hover here Js


    

});
