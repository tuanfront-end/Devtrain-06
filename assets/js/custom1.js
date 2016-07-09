console.log('script from cutsom1');



$(document).ready(function(){

	// Smoot-sCroll Js ---------------------------------------------
	// $(function(){ 

	// 	 var $window = $(window);
	// 	 var scrollTime = 0.8;
	// 	 var scrollDistance = 300;

	// 	 $window.on("mousewheel DOMMouseScroll", function(event){

	// 	  event.preventDefault(); 

	// 	  var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
	// 	  var scrollTop = $window.scrollTop();
	// 	  var finalScroll = scrollTop - parseInt(delta*scrollDistance);

	// 	  TweenMax.to($window, scrollTime, {
	// 	   scrollTo : { y: finalScroll, autoKill:true },
	// 	    ease: Power1.easeOut,
	// 	    overwrite: 5       
	// 	   });

	// 	 });
	// 	});
	//End Smoot-sCroll Js --------------------------------------------

  //owlCarousel Js ---------------------------------------------
	$('.nav li').click(function(){
		$('.nav li').removeClass('active');
		$(this).addClass('active');
	});

	 $("#owl-demo").owlCarousel({
 
	      autoPlay: false, //Set AutoPlay to 3 seconds
	 
	      items : 4,
	      itemsDesktop : [1199,3],
	      itemsDesktopSmall : [979,3]
	 
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
   

});
