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

var nav = $('nav');
		navHeight = $('nav').outerHeight();
    ns = 'fixed-top';
    hdr = $('header').outerHeight();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    nav.addClass(ns);
    $('header').css('z-index', '-1');
    // $('.header-banner').css('margin-top', navHeight);
  } else {
    nav.removeClass(ns);
    $('header').css('z-index', '9');
    // $('.header-banner').css('margin-top', '0');
  }
});
