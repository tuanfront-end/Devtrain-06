console.log('script from cutsom1');



$(document).ready(function(){

	// Smoot-sCroll Js ---------------------------------------------
	$(function(){ 

		 var $window = $(window);
		 var scrollTime = 0.8;
		 var scrollDistance = 300;

		 $window.on("mousewheel DOMMouseScroll", function(event){

		  event.preventDefault(); 

		  var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		  var scrollTop = $window.scrollTop();
		  var finalScroll = scrollTop - parseInt(delta*scrollDistance);

		  TweenMax.to($window, scrollTime, {
		   scrollTo : { y: finalScroll, autoKill:true },
		    ease: Power1.easeOut,
		    overwrite: 5       
		   });

		 });
		});
	//End Smoot-sCroll Js ---------------------------------------------

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
	  $(" #owl-demo-2").owlCarousel({
 
	      autoPlay: false, //Set AutoPlay to 3 seconds
	 
	      items : 5,
	      itemsDesktop : [1199,3],
	      itemsDesktopSmall : [979,3]
	 
	  });
	  $(" #owl-demo-3").owlCarousel({
 
	      autoPlay: false, //Set AutoPlay to 3 seconds
	 
	      items : 1,
	      itemsDesktop : [1199,1],
	      itemsDesktopSmall : [979,1]
	 
	  });


	   // external js: isotope.pkgd.js-------------------------------------------------------
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
		// End external js: isotope.pkgd.js-------------------------------------------------------		
      	
      	 $("ul.nav a, .reponsive-nav-list a").click(function (){
      	 	// $('.reponsive-nav-list').css('display','none');
      	 	var y = $(this).attr('href');
      	 	var i = $(''+y+'').offset().top;
      	 	
                $('html, body').animate({
                    scrollTop: i
                }, 2000);
            });
      //-End Ofset ID for Animate---------------------------------------------------------------------


	
    $(window).bind('scroll', function() {
        parallax();
    });
     $('.scrolldown a').click(function(){
		$('html, body').animate({
                scrollTop: $('#about').position().top
            }, 2000);
    });

 
	function parallax() {
        var scrollPos = $(window).scrollTop();

        var about = $('#about').position().top;
        var services = $('#services').position().top;
        var portfolio = $('#portfolio').position().top;
        var testimonials = $('#testimonials').position().top;
        var contact = $('#contact').position().top;
        

        if (scrollPos > 10 ) {
        	$('.nav li').removeClass('active');
			$('.nav li:eq(0)').addClass('active');
        	$('.wellcome .navbar').css({'padding':'5px 0','transition':'all 0.5s'});
        	$('.wellcome .navbar ul li a').css({'color':'#f8b865','transition':'all 0.5s'});
        }
        else{
        	$('.wellcome .navbar').css({'padding':'60px 0','transition':'all 0.5s'});
        	$('.wellcome .navbar ul li a').css({'color':'#fff','transition':'all 0.5s'});
        }
         if (scrollPos >= about && scrollPos <= services ) {
        	$('.nav li').removeClass('active');
			$('.nav li:eq(1)').addClass('active');
        }
        if (scrollPos >= services && scrollPos <= portfolio ) {
        	$('.nav li').removeClass('active');
			$('.nav li:eq(2)').addClass('active');
        }
        if (scrollPos >= portfolio && scrollPos <= testimonials ) {
        	$('.nav li').removeClass('active');
			$('.nav li:eq(3)').addClass('active');
        }

        if (scrollPos >= testimonials && scrollPos <= contact ) {
        	$('.nav li').removeClass('active');
			$('.nav li:eq(4)').addClass('active');
        }
        
        if (scrollPos >= contact  ) {
        	$('.nav li').removeClass('active');
			$('.nav li:eq(5)').addClass('active');
        }

       


        // Section 1
        // $('.section-1').css('backgroundPosition', "50% " + Math.round(($('.section-1').offset().top - scrollPos) * 0.1) + "px");
        // // Section 2
        // $('.section-2').css('backgroundPosition', "50% " + Math.round(($('.section-2').offset().top - scrollPos) * 0.3) + "px");
        // $('.sherlock').css('top',(300 - (scrollPos * 1)) + 'px')
        // $('#sherlock-img').css('top',(400 - (scrollPos * 1)) + 'px')
        // // Section 3
        // $('.section-3').css('backgroundPosition', "50% " + Math.round(($('.section-3').offset().top - scrollPos) * 0.2) + "px");
        // $('.steve').css('top',(0 - (scrollPos * 0.5)) + 'px')
        // $('#steve-img').css('top',(100 - (scrollPos * 1)) + 'px')


        
        $('.about-us-left img').css('top',((about * 0.7) - (scrollPos * 0.7)) + 'px');
        $('.about-us-right ').css('top',((about * 0.2) - (scrollPos * 0.2)) + 'px');


        var meet_our_team = $('#meet-our').position().top;
        $('#owl-demo').css('top',((meet_our_team * 0.2) - (scrollPos * 0.2)) + 'px');

        var clients = $('#clients').position().top;
        $('#owl-demo-2').css('top',((clients * 0.2) - (scrollPos * 0.2)) + 'px');



        // $('.grid-item-2').css('top',(((portfolio - 500) * 0.2) - (scrollPos * 0.2)) + 'px');




        $('.services-content').css('top',((services * 0.2) - (scrollPos * 0.2)) + 'px');

        $('.contact-input').css('top',((contact * 0.2) - (scrollPos * 0.2)) + 'px');
        $('#owl-demo-3').css('top',((testimonials * 0.2) - (scrollPos * 0.2)) + 'px');

	}
});
