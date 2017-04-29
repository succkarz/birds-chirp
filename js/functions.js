$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });
    $('.back-bird').css({
      'transform' : 'translate(0px, '+ wScroll /5 +'%)'
    });
    $('.fore-bird').css({
      'transform' : 'translate(0px, -'+ wScroll /10 +'%)'
    });
    if (wScroll > $('.clothes-pics').offset().top - $(window).height() / 1.5) {

            $('.clothes-pics figure').each(function(i) {
              setTimeout(function(){

                $('.clothes-pics figure').eq(i).addClass('is-showing');
              }, 150 * (i+1));
            });
        }
});
