$(function(){

	$('#MainMenu').find('> li').hover(function(){
		$(this).find('ul')
		.removeClass('noJS')
		.stop(true, true).slideToggle('fast');
	});
	
});