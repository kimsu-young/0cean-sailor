$(function(){
    var num = 0;
    var connum =  $('.cont.on progress').val();
    $('.tabtit p').text($('.cont progress').val()+'%');
   
    function counton(){
        sec = setInterval(count,15);
        }
   
    function count(){
        num ++;
        if(num>connum){
            clearInterval(sec);
           
        }else{
            if(num<10){
                $('.tabtit p').text('0'+num+'%');
            }else{
                $('.tabtit p').text(num+'%');
            }
        }
   
    }

   
//탭버튼 클릭하면 progress 게이지 차오르고 숫자 상승
    $('.tab_button .tab').on('click',function() {
        var onTab = $(this).attr('data-tab');
        $('.cont').removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
        $('#' + onTab).addClass('on');

        $(this).children('span').stop().animate({
            width:'100%'
        })
        $(this).siblings().children('span').css({width:0})

        counton();
        connum =  $('.cont.on progress').val();
        num = 0 ;

        let prog = $('.cont.on progress').val();
        let defaultV = 0;
            function tag(){
                if(defaultV<prog){
                   defaultV++;
                    $('.cont.on progress').val(defaultV);  
                }else{
                    clearInterval(tag);
                }

            }
            setInterval(tag,15);
        })

   
        $('.mm_slide').slick({            
            slidesToShow : 1,
            slidesToScroll: 1,
            arrows : false,
            dots: true,
            infinite : true,
            autoplay:true,
            autoplaySpeed:3000,
            appendDots:$('.port04_dots')
        });
       

          $('.probtn a').on('click',function(){
            event.preventDefault();
          });
         
       
          new jBox('Modal', {
            attach: '.btn01',
            width: 400,
            height:170,
            title: '친절함',
            footer:'X표 혹은 단어를 한 번 더 클릭하시면 창이 닫힙니다.',
            position: {x: 1600, y: 100},
            target: '#detail_about',
            outside: 'x',
            overlay: false,
            content: $('.modal01'),
            draggable: 'title',
            repositionOnOpen: false,
            repositionOnContent: false
          });

          new jBox('Modal', {
            attach: '.btn02',
            width: 400,
            height:170,
            footer:'X표 혹은 단어를 한 번 더 클릭하시면 창이 닫힙니다.',
            position: {x: 1400, y: 250},
            title: '융통성',
            overlay: false,
            content: $('.modal02'),
            draggable: 'title',
            repositionOnOpen: false,
            repositionOnContent: false,
           
          });
          new jBox('Modal', {
            attach: '.btn03',
            width: 400,
            height:170,
            footer:'X표 혹은 단어를 한 번 더 클릭하시면 창이 닫힙니다.',
            position: {x: 1600, y: 400},
            title: '새로움',
            overlay: false,
            content: $('.modal03'),
            draggable: 'title',
            repositionOnOpen: false,
            repositionOnContent: false,
          });
          new jBox('Modal', {
            attach: '.btn04',
            width: 400,
            height:170,
            footer:'X표 혹은 단어를 한 번 더 클릭하시면 창이 닫힙니다.',
            position: {x: 1400, y: 550},
            title: '새로움',
            overlay: false,
            content: $('.modal04'),
            draggable: 'title',
            repositionOnOpen: false,
            repositionOnContent: false,
          });

          var myModal = new jBox('Modal', {
            title: '안내사항',
            content: $('.modalmain'),
            footer:'빈화면 혹은 X표를 클릭하시면 창이 닫힙니다.',
            width: 600,
            overlayclass:$('#over'),
            height:180,
          });
           
          myModal.open();

          $('.pro_main .btn01 a').on('click',function(){
            character01.open();
          })
         
                   
            $('.port_slide').slick({            
                slidesToShow : 1,
                slidesToScroll: 1,
                arrows : false,
                dots: true,
                infinite : true,
                autoplay:true,
                autoplaySpeed:5000,
                draggable: false,
                pauseOnHover: false
            });

            $('.play').on('click',function(){
                $('.port_slide').slick('slickPlay')
            });
            $('.pause').on('click',function(){
                $('.port_slide').slick('slickPause')
            })

            /* 슬라이드시 색상 변경 */
            $('.port_slide').on('afterChange',function(currentSlide,event,slick){
                if($('.port_slide').slick('slickCurrentSlide')%2==0){
                    $('#portfolio .gnb li').css({
                        color:'#011722'
                    });
                    $('.header .sub_tit').css({
                        color:'#00334c'
                    });
                    $('#portfolio .bot_logo p').css({
                        color:'#004667'
                    });
                    $('#portfolio .bot_logo span').css({
                        borderColor:'#004667'
                    });
                    $('#portfolio .bot_logo div').css({
                        backgroundImage:'url(../img/logo_color.png)no-repeat center center/100%'
                    });
                }else if($('.port_slide').slick('slickCurrentSlide')%2 == 1){
                    $('#portfolio .gnb li').css({
                        color:'#f1f4f6'
                    });
                    $('.header .sub_tit').css({
                        color:'#97a5ae'
                    });
                    $('#portfolio .bot_logo p').css({
                        color:'#f1f4f6'
                    });
                    $('#portfolio .bot_logo span').css({
                        borderColor:'#f1f4f6'
                    });
                    $('#portfolio .bot_logo div').css({
                        backgroundImage:'url(../img/logo_white.svg)no-repeat center center/100%'
                    });
                }
            });

            //물방울 gsap

         

            let timeLine = new TimelineMax({ paused:true });
                timeLine
                .to(".ani01",1,{ rotation:30,x:100,y:-40,})
                .to(".ani02",1,{rotation:30,x:100,y:-50},"<")
                .to(".drop",{scale:1.2},"<")
                .to(".ani03",1,{rotation:-30,x:-100,y:-40,},"<-0.1")
                .to(".ani04",1,{rotation:-30,x:-60,y:-40},"<0.2")
                .to(".drop",{scale:0.7},"<")
                .to(".drop",{opacity:0},"<")

           
                $('.outro_box h1').on('mouseenter',function(){
                    $('.drop').css({display:"block"});
                    timeLine.play();
                   
                });
                $('.outro_box h1').on('mouseleave',function(){
                    $('.drop').css({display:"none"});
                    timeLine.reverse();
                   
                })

                $('.outro_box h1 ul').slick({            
                    slidesToShow : 1,
                    slidesToScroll: 1,
                    arrows : false,
                    dots: false,
                    infinite : true,
                    autoplay:true,
                    autoplaySpeed:2000,
                    vertical : true,    
                });

                new jBox('Image');

                $('.device_btn a').on('click',function(){
                    event.preventDefault();
                  });

                  let mobileBtn = $('.mobile_btn');
                  let pcBtn = $('.pc_btn');
                  let tabletBtn = $('.tablet_btn');

                $('.device_btn a').on('click',function(){
                    $(this).addClass('on').siblings().removeClass('on');
                   
                    if($('.tablet_btn').hasClass('on')){
                        $('.tabletImg').addClass('on').siblings().removeClass('on');
                    }
                    else if($('.mobile_btn').hasClass('on')){
                        $('.mobileImg').addClass('on').siblings().removeClass('on');
                    }else if($('.pc_btn').hasClass('on')){
                        $('.pcImg').addClass('on').siblings().removeClass('on');
                    }
                })

                $('.artwork_slide').slick({            
                    slidesToShow : 1,
                    slidesToScroll: 1,
                    arrows : true,
                    dots: true,
                    infinite : true,
                    autoplay:false,
                });
})