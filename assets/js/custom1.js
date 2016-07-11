console.log('script from cutsom11111111');



$(document).ready(function(){


  //owlCarousel Js ---------------------------------------------
     $("#owl-demo").owlCarousel({
 
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
   
        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
   
    });
   //owlCarousel Js ---------------------------------------------


	 // external js: isotope.pkgd.js------------------------------------
    $(".grid").isotope({
           itemSelector: '.grid-item-2',
           layoutMode: 'fitRows',
        });

        $('.portfolio-list li').click(function(){
          $('.portfolio-list li').removeClass('active');
          $(this).addClass('active');

          var selector =$(this).attr('data-filter');
          $(".grid").isotope({
            filter: selector,
            animationOption: {
              duration: 750,
              easing: 'linear',
              queue: false,
            }
          });
            return false;
        });
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
