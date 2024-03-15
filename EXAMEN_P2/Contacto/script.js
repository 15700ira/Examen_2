$(document).ready(function(){
	$('.subir icon-airplane').hide();
	$('.subir icon-airplane').click(function(){
		$('body, html').animate({
			scrollTop:0
		},300);
	});
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.subir icon-airplane').fadeIn();
			$('.subir icon-airplane').slideDown(3000);
		} else {
			$('.subir icon-airplane').fadeOut();
			$('.subir icon-airplane').slideUp(3000);
		}
	});

});