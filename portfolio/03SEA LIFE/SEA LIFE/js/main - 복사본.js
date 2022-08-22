$(function(){



    $('#wrap div').on('mousewheel', function (e, d) {

        let prv = 0;
        let nxt = 0 ;
                 if (d > 0) {
         if ($(this).prev() != undefined) {
                     prv = $(this).prev().offset().top;
                     $('html,body').stop().animate({
                         scrollTop: '-=960px'
                     },1000)
        }
                 } 
     
        else if (d < 0) { 
         if ($(this).next() != undefined) {
                     nxt = $(this).next().offset().top;
                     $('html,body').stop().animate({
                         scrollTop: '+=980px'
                     },1000);
        }
                 }
             })











})