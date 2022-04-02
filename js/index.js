$(function(){
	$('.about__wrap--button').mouseover(function() {
		$(this).parent().find('.about__wrap--age').css({
			'color': '#f84f5b',
			'transition': '0.5s'
		});
	});
	$('.about__wrap--button').mouseleave(function() {
		$(this).parent().find('.about__wrap--age').css({
			'color': '#1f375a',
			'transition': '0.5s'
		});
	});
});