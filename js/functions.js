var pContainerHeight = $('.bird-box').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.logo').css({
    'transform': 'translate(0px, ' + wScroll / 2 + '%)'
  });
  $('.back-bird').css({
    'transform': 'translate(0px, ' + wScroll / 5 + '%)'
  });
  $('.fore-bird').css({
    'transform': 'translate(0px, -' + wScroll / 10 + '%)'
  });
  if (wScroll > $('.clothes-pics').offset().top - $(window).height() / 1.5) {

    $('.clothes-pics figure').each(function(i) {
      setTimeout(function() {

        $('.clothes-pics figure').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);
    });
  } 
  /*
    if(wScroll > $('.blog-posts').offset().top - $(window).height()){
	  var offset = Math.min(0, wScroll - 
	  $('.blog-posts').offset().top + $(window).height() - 350);
	  $('.post-1').css({'transform': 'translate('+ offset +'px, 20px)'});
	  $('.post-3').css({'transform': 'translate('+ offset +'px, 20px)'});
  } */
 if(wScroll > $('.blog-posts').offset().top - $(window).height()){
	  var offset = Math.min(0, wScroll - 
	  $('.blog-posts').offset().top + $(window).height() - 400);
	  $('.post-1').css({'transform': 'translate('+ offset +'px, '+ 
	  Math.abs(offset * 0.2) +'px)'});
	  $('.post-3').css({'transform': 'translate('+ 
	  Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});
  }

});
