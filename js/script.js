$(document).ready(function() {
	$('.enroll-toggle').click(function(e) {
		e.preventDefault();
		var popup = $(this).next();
		if(!popup.hasClass('active')){
			popup.addClass('active');
		}
	});

	$('.close-popup').click(function(e) {
		e.preventDefault();
		var popup = $('.enroll-popup');
		if (popup.hasClass('active')) {
			popup.removeClass('active');
		};
	});
});