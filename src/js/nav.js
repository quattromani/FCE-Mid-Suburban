// Toggle Navigation
$(function() {
	$(".open-panel").click(function(){
		if($('html').hasClass('open-nav')) {
			$('html').removeClass('open-nav');
		} else {
			$('html').addClass('open-nav');
		}
		$(this).toggleClass('active');
	});
	$('.close-panel').click(function() {
		if($('html').hasClass('open-nav')) {
			$('html').removeClass('open-nav');
		}
	});
});

$(function() {

	var header = $('header')
	, header_height = header.outerHeight()
	, nav = $('nav')
	, nav_height = nav.outerHeight();

  // Scroll to anchored link in Nav
  $('nav a').click(function(){
    // Active Nav links
    $('nav a').parent('li').removeClass('active');
    $(this).parent('li').addClass('active');
    $('html, body').animate({
    	scrollTop: $($.attr(this, 'href')).offset().top +1
    }, 500);
    return false;
  });

  if ($(window).scrollTop() >= (header_height - nav_height)) {
  	$('nav').addClass('fixed-top');
  	$('nav').css('margin-top','0');
  }

  // Make the Nav sticky
  $(window).bind('scroll', function () {
  	if ($(window).scrollTop() >= (header_height - nav_height)) {
  		$('nav').addClass('fixed-top');
  		$('nav').css('margin-top','0');
  	} else {
  		$('nav').removeClass('fixed-top');
  		// $('nav').css('margin-top', '-49px');
  	}
  });
});

