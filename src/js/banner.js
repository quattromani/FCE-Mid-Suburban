function setBannerHeight() {
	var headerHeight = $('.header-banner').outerHeight();
	var navHeight = $('nav').outerHeight();
	$('.hero-banner').css('margin-top', - (headerHeight + navHeight));
	console.log(headerHeight);
}

$(document).ready(function() {
	if($(window).width() > mediumBreakPoint) {
		setBannerHeight();
	} else {
		$('.hero-banner').css('margin-top', 0);
	}
});

$(window).resize(function() {
	if($(window).width() > mediumBreakPoint) {
		setBannerHeight();
		console.log($(window).width());
	} else {
		$('.hero-banner').css('margin-top', 0);
	}
});
