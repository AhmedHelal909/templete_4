$("html").niceScroll({

cursorcolor:'#29aae3',
cursorwidth:'15px',
cursorborderradius:'5px',
cursorborder:'1px solid #29aae3;'
});
$(function(){
'use strict';
var winH =$(window).height();


    $('.home').attr('style','height:100%');


//numbers
var aboutContainer = $('.count-number>div p');
    if (aboutContainer.length) {
        aboutContainer.counterUp({
            delay: 50,
            time: 1000
        });
         };


});
//auto slider
 
 (function autoSlider(){
$('.slider .active').each(function(){
if(!$(this).is(':last-child')){
$(this).delay(3000).fadeOut(1000, function(){

$(this).removeClass('active').next().addClass('active').fadeIn();
autoSlider();
});
} else{
	$(this).delay(3000).fadeOut(1000,function(){

$(this).removeClass('active');
$('.slider div').eq(0).addClass('active').fadeIn();
autoSlider();
	});
}

});
    }());
 // play video 
 $(function(){
$('.video .play > a').click(function(){

$(this).hide();
$('.video .info').show();
$('.overlay').show();
});
//close video
$('.video .small-box button').click(function(){
$('.video .info').hide();
$('.overlay').hide();
$('.video .play > a').show();
$('iframe').attr('src', $('iframe').attr('src'));

});
//scroll to top
  $(window).scroll(function(){
var scroll =$(this).scrollTop();
if(scroll>200){
	$('.arrow').fadeIn();
}
else {
	$('.arrow').fadeOut();
}
});

   $('.arrow ,.navbar .nav-link ,.dropdown-item ').click(function(){
      $('html').animate({
	scrollTop : $('#' + $(this).data('value')).offset().top
		},1500);
    });




 });