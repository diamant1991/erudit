$(':input').blur(function() {
  if($(this).val().length == 0) {
    $(this)
      .addClass('error')
      $(this).parent().append('<span class="tolltip">Неправильно заполнено поле.</span>')
      $(this).parent().find('.tolltip').animate({opacity: '1', marginTop: '0'}, 350)
  }
});
$(':input').focus(function() {
  $(this)
    .removeClass('error')
    $(this).parent().find('.tolltip').removeClass('active')
    $(this).parent().find('.tolltip').animate({opacity: '0', marginTop: '15px'}, 350).remove()
});

$('form').bind('submit', function(event) {
  $(this).find('[type=text], textarea').each(function() {
    if(!$(this).val().length) { 
    event.preventDefault();
      $(this).addClass('error');
      $(this).parent().append('<span class="tolltip">Неправильно заполнено поле.</span>')
      $(this).parent().find('.tolltip').animate({opacity: '1', marginTop: '0'}, 350)
    }
  });
});



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

	$('.ques-toggle').click(function(e) {
		e.preventDefault();
		var text = $(this).next();
		$('.ques-text').slideUp(300);
		$('.ques-toggle').removeClass('active');
		if(text.is(':hidden')){
			$(this).addClass('active');
			text.slideDown(300);
		}
		else{
			text.slideUp(300);
		}
	});
});

