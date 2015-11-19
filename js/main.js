/* add wow.js class affter document ready*/

/* end wow.js class affter document ready*/

$(document).on("ready",function(){
	
	/* smoth scroll intialize*/
		$(function() {
		  $('a[href*=#]:not([href=#carousel-apollo])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top
		        }, 1000);
		        return false;
		      }
		    }
		  });
		});
	/* end smoth scroll*/

	/* start nav change*/
	$(window).scroll(function() {
	    if ($(".navbar").offset().top > 50) {
	        $(".navbar-fixed-top").addClass("navbar-change");
	    } else {
	        $(".navbar-fixed-top").removeClass("navbar-change");
	    }
	});
	/* end nav change*/

	$('body').scrollspy({ target: '.navbar-fixed-top' })

	/* end scrollspy*/

	/* start wow.js*/

	wow = new WOW(
	  {
	    animateClass: 'animated',
	    offset:       100,
	  }
	);
	wow.init();

	/* end wow.js*/
	
    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
    
	$('.navbar-toggle').on('click', function(e) {
	  e.preventDefault();
 	 $(this).toggleClass('toggled');
})
});