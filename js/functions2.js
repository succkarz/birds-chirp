$(window).scroll(function() {
    var wScrolls = $(this).scrollTop();
    if (wScrolls > $('.clothes-pics').offset().top) {

            $('.clothes-pics figure').each(function(i) {
              setTimeout(function(){

                $('.clothes-pics figure').eq(i).addClass('is-showing');
              }, 150 * (i+1));
            });
        }
});
