console.log('script from cutsom11111111');



$(document).ready(function(){


  //owlCarousel Js ---------------------------------------------
     var owl = $("#owl-demo");
   
      owl.owlCarousel({
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
      $(".prev").click(function(){ 
        owl.trigger('owl.prev');
      })
      $(".play").click(function(){
        owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
      })
      $(".stop").click(function(){
        owl.trigger('owl.stop');
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
          time = setTimeout(carousel, 4000); // Change image every 2 seconds
      }

      // function next(){
         
      //  }
      $('.prev-slideshow').click(function(event) {
           clearTimeout(time);
           $('.process').animate({width: '0%'}, 3500);
           myIndex = $('.mySlides:visible').index() - 1 ;
           carousel() ;
       });
       $('.next-slideshow').click(function(event) {
           clearTimeout(time);
           myIndex = $('.mySlides:visible').index() + 1 ;
           carousel() ;
       });
      // function prev(){
         
      //  }
     
    // End slideShow-js------------------------------------



});
