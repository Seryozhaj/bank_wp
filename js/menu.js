$(function(){
	$(window).scroll(function () {
		if($(window).scrollTop() > 38){
			$('.menu__wrap').addClass('menu__wrap--fixed');
		} else {
			$('.menu__wrap').removeClass('menu__wrap--fixed');
		}
	 });
	 $(document)
	 .on('click', '.menu__top--show', function(){
		 $(this).addClass('hidden');
		 $('.menu__top--tel').html('8 800 123 8 800 123');
	 })
	 .on('click', '.bottomItem__burger', function(){
		$('.menu__open').toggleClass('show');
	 })

	 ;

});
