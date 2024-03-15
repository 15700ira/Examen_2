$(document).ready(function(){
	$('.subir').hide();
	$('.subir').click(function(){
		$('body, html').animate({
			scrollTop:0
		},300);
	});
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.subir').fadeIn();
			$('.subir').slideDown(3000);
		} else {
			$('.subir').fadeOut();
			$('.subir').slideUp(3000);
		}
	});

});