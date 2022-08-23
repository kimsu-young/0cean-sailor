
$(function(){
   
    $('.menubtn').on('click',function(){
        if($('.menubar').hasClass("open")==true){
            $('.menubar').stop().animate({
                left:'-100%'
            },1000,'easeInOutQuint');
            $('.menubar').removeClass('open');
        }else{
            $('.menubar').stop().animate({
                left:0
            },1000,'easeInOutQuint');
            $('.menubar').addClass('open');
        }
    });

    let cont1h =$('.cont1').offset().top;
    function scrollfadeout(){
      $('.cont1_tit').stop().animate({
        color:'#fff'
      },1900,'easeInQuart',1000);
      $('.cont1_bg_white').stop().fadeOut(1900,'easeInQuart',1000);
      $('.cont1_subtit').stop().animate({
        color:'#fff',
        textShadow :'text-shadow: 5px 5px 5px ##fff;'
      },1900,'easeInQuart',1000);
      $('.cont1_subtxt').stop().animate({
        color:'#eee'
      },1900,'easeInQuart',1000);
      $('.cont1_txt').stop().animate({
        color:'#ddd'
      },1900,'easeInQuart',1000);
    }
    $(window).on('scroll',function(){
      let nowH = $(window).scrollTop();
      if(nowH + 200 >= cont1h){
        scrollfadeout();
        $(".m00 img").fadeOut(1000,function(){
          $(".m00 img").attr('src',"img/fullmoon02.svg").fadeIn(500);
          $('.moonbox').addClass('on');
          let moonMove = gsap.timeline();
          moonMove.add('start')
          moonMove.to('.m06', 5, { x: '45vw',ease: Power4.easeOut },'start');
          moonMove.to('.m05', 4, { x: '30vw',ease: Power4.easeOut },'start');
          moonMove.to('.m04', 3, { x: '15vw',ease: Power4.easeOut },'start');
          moonMove.to('.m01', 5, { x: '-45vw' ,ease: Power4.easeOut },'start');
          moonMove.to('.m02', 4, { x: '-30vw' ,ease: Power4.easeOut },'start');
          moonMove.to('.m03', 3, { x: '-15vw' ,ease: Power4.easeOut },'start');
          moonMove.to('.m00 svg', 3, { opacity:0 ,ease: Power4.easeOut,delay:2 },'start');

        });
      }
      
      


    });
    
    let cont1_ing=0;
    function imgchage(){
      

      if(cont1_ing<= 3)  {
        $('.cont1_bg_img div').eq(cont1_ing).show().animate({
        backgroundPosition: '10%'
      },5000,'easeInSine').siblings().hide();
      cont1_ing++;
      $('.cont1_bg_img div').eq(2).css({
          backgroundPosition: '0%'
        });
      }else{
        
        $('.cont1_bg_img div').eq(0).css({
          backgroundPosition: '20%'
        });
        $('.cont1_bg_img div').eq(1).css({
          backgroundPosition: '0%'
        });
        
        cont1_ing=0;
      }
      
    }
    setInterval(imgchage, 5000);

    $('.cont2_prod_name').on('click',function(){
        $(this).parents().addClass('on').siblings().removeClass('on');

        let num = $('.cont2_prod_name').index($(this));
        console.log(num)
       
        $('.selcet_area .cont2_prodtit:eq(' + num + ')').addClass("on");
        $('.prod_area .cont2_prod:eq(' + num + ')').addClass("on").siblings().removeClass('on');
    });

    let idx = 0;
    let id = 0;
    setInterval(time01, 3000);
  

    function time01(){
      let box = $('.cont2_prodtit');
      box.removeClass('on');
      box.eq(idx).addClass('on');
      idx++;
      if(idx >= box.length) idx= 0;
    }
    setInterval(time02, 3000);
    function time02(){
      let box1 = $('.cont2_prod');
      box1.removeClass('on');
      box1.eq(id).addClass('on');
      id++;
      if(id >= box1.length) id= 0;
    }

    $('.cont3_slidebox').slick({
        slidesToShow : 1,
        slidesToScroll: 1, 
        arrows : true, 
        dots: false, 
    });

    $('.cont4_slidebox').slick({             
        slidesToShow : 4,
        slidesToScroll: 1, 
        arrows : false,
        dots: true, 
        infinite : true, 
        autoplay:true,
        centerMode: true,
        centerPadding: '20px',
        responsive: [ 
          {  
              breakpoint: 1200,
              settings: {
                  slidesToShow:3,
                  centerMode: false,
              } 
          }
      ]
    });

    $('.slick-dots').slick({
        slidesToShow : 5,
    });







})