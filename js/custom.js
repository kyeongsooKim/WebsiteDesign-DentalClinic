
// NIVO LIGHTBOX
$('.iso-box-section a').nivoLightbox({
        effect: 'fadeScale',
    });

// ISOTOPE FILTER
jQuery(document).ready(function($){

	if ( $('.iso-box-wrapper').length > 0 ) { 

	    var $container 	= $('.iso-box-wrapper'), 
	    	$imgs 		= $('.iso-box img');



	    $container.imagesLoaded(function () {

	    	$container.isotope({
				layoutMode: 'fitRows',
				itemSelector: '.iso-box'
	    	});

	    	$imgs.load(function(){
	    		$container.isotope('reLayout');
	    	})

	    });

	    //filter items on button click

	    $('.filter-wrapper li a').click(function(){

	        var $this = $(this), filterValue = $this.attr('data-filter');

			$container.isotope({ 
				filter: filterValue,
				animationOptions: { 
				    duration: 750, 
				    easing: 'linear', 
				    queue: false, 
				}              	 
			});	            

			// don't proceed if already selected 

			if ( $this.hasClass('selected') ) { 
				return false; 
			}

			var filter_wrapper = $this.closest('.filter-wrapper');
			filter_wrapper.find('.selected').removeClass('selected');
			$this.addClass('selected');

	      return false;
	    }); 

	}

});


// HIDE MOBILE MENU AFTER CLIKING ON A LINK
   $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


// SCROLLTO THE TOP
$(document).ready(function() {
	// Show or hide the sticky footer button
		$(window).scroll(function() {
			if ($(this).scrollTop() > 200) {
				$('.go-top').fadeIn(200);
					} else {
						$('.go-top').fadeOut(200);
					}
				});
				/*	
				// Animate the scroll to top
				$('.go-top').click(function(event) {
					event.preventDefault();
				
					$('html, body').animate({scrollTop: 0}, 300);
				})
				*/
			});





//POP UP SCREEN
        $(".b1").click(function () {
            $(".pop").fadeIn(300);
            
        });
		
		$(".b2").click(function () {
            $(".pop2").fadeIn(300);
            
        });
		
		$(".b3").click(function () {
            $(".pop3").fadeIn(300);
            
        });

        $(".b4").click(function () {
            $(".pop4").fadeIn(300);
            
        });
		
		$(".b5").click(function () {
            $(".pop5").fadeIn(300);
            
        });
		
		$(".b6").click(function () {
            $(".pop6").fadeIn(300);
            
        });

        $(".b7").click(function () {
            $(".pop7").fadeIn(300);
            
        });
		
		$(".b8").click(function () {
            $(".pop8").fadeIn(300);
            
        });
		
		$(".b9").click(function () {
            $(".pop9").fadeIn(300);
            
        });

        $(".b10").click(function () {
            $(".pop10").fadeIn(300);
            
        });

        $(".pop > span, .pop").click(function () {
            $(".pop").fadeOut(300);
        });
		
		$(".pop2 > span, .pop2").click(function () {
            $(".pop2").fadeOut(300);
        });
		
		$(".pop3 > span, .pop3").click(function () {
            $(".pop3").fadeOut(300);
        });

		$(".pop4 > span, .pop4").click(function () {
            $(".pop4").fadeOut(300);
        });

         $(".pop5 > span, .pop5").click(function () {
            $(".pop5").fadeOut(300);
        });
		
		$(".pop6 > span, .pop6").click(function () {
            $(".pop6").fadeOut(300);
        });
		
		$(".pop7 > span, .pop7").click(function () {
            $(".pop7").fadeOut(300);
        });

		$(".pop8 > span, .pop8").click(function () {
            $(".pop8").fadeOut(300);
        });

        $(".pop9 > span, .pop9").click(function () {
            $(".pop9").fadeOut(300);
        });

		$(".pop10 > span, .pop10").click(function () {
            $(".pop10").fadeOut(300);
        });