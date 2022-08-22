
$(function(){
    AOS.init();

    $('.me').on('click',function(){
        $('.mobile_bg').css({
            display: 'block'
        })
        $('.mobile').animate({
            left:0
        },800,'easeOutQuart')
    })
    $('.m_top a').on('click',function(){
        $('.mobile_bg').css({
            display: 'none'
        })
        $('.mobile').animate({
            left: '-100%'
        },1500,'easeOutQuart')
    })
    $('.mobile_bg').on('click',function(){
        $('.mobile_bg').css({
            display: 'none'
        })
        $('.mobile').animate({
            left: '-100%'
        },1500,'easeOutQuart')
    })
    $('.mobile .gnb li a').on('click',function(){
        $(this).siblings().slideToggle(300).parent().siblings().find('.sub').hide(300);
        console.log($(this).children().parent());
    })


$(function(){
    Dots.generate(
     {speed: 50000,
         density: 300,
     size : 6,
     color: 'skyblue',
     accurancy: 70,
     opacity:0.1,
     randomOpacity:true,
     randomSize:true,
     randomColor:false

     });
 });
 $(function() {
      let $main = $(".vimg");
      window.mySparticles =new Sparticles($main.get(0),{
        count : 1500,
        alphaSpeed: 5,
        speed: 1,
        minSize: 0.5,
        maxSize: 20,
        maxAlpha: 0.6,
        twinkle : true,
        color:["darkcyan","rgba(15, 29, 92, 0.301q","midnightblue","rgb(42, 50, 88)","rgb(145, 223, 243)"],
        shape:[ "circle", "circle", "diamond" ],
        xVariance: 1,
        direction: 0,
        glow:100
        
    });
    let container = document.querySelector(".sparticles-container");
    let sparticles_2 = new Sparticles( container, { 
        color: "rgb(222, 249, 255)",
        count : 50,
        speed: 10,
        minSize: 4,
        maxSize: 12,
        maxAlpha: 1,
        twinkle : true,
        alphaSpeed: 1,
        direction: 0,
    });

      
    });

     


$('.cont1_slider').slick({
    slidesToShow : 1,
    arrows:false,
    dots: true,
    speed : 1500,
    autoplay: true,
    autoplaySpeed: 600
});
$('.cont2_slider').slick({
    slidesToShow : 1,
    arrow : true,
    speed : 1500,
    autoplay: false,
    autoplaySpeed: 1000,
});


    let cont1h =$('.cont1').offset().top;
    $(window).on('scroll',function(){
      let nowH = $(window).scrollTop();
      if(nowH + 200 >= cont1h){
          $('.cont1_bg_cover_bg').stop().slideUp(1400,'easeInOutQuint');
          $('.cover_txt').css({
              opacity:0,
              fontSize : 30
          },1400,200,'easeInCirc')
      }else{
          $('.cont1_bg_cover_bg').stop().slideDown();
          $('.cover_txt').css({
              opacity : 1,
              fontSize : 30
          });
      }
      $(window).on('resize',function(){
          document.location.reload();
      });
    })

    $(window).resize(function(){ 
        if (window.innerWidth >= 768 ) {   

        let cont1h =$('.cont1').offset().top;
          $(window).on('scroll',function(){
            let nowH = $(window).scrollTop();
            if(nowH + 150 >= cont1h){
                $('.cont1_bg_cover_bg').stop().slideUp(1400,'easeInOutQuint');
                $('.cover_txt').css({
                    opacity:0,
                    fontSize:50
                },1400,0,'easeInCirc')
            }else{
                $('.cont1_bg_cover_bg').stop().slideDown();
                $('.cover_txt').css({
                    opacity : 1,
                    fontSize:30
                    
                });
            }
            $(window).on('resize',function(){
                document.location.reload();
            });
          })

          

        }
        
        }).resize(); 


    $(window).resize(function(){ 
        if (window.innerWidth >= 1024 ) {   

        let mHtml = $("html");
        let page = 1;
        mHtml.animate({scrollTop : 0},10);
            
        $(window).on("wheel", function(e) {
            if(mHtml.is(":animated")) return;
            if(e.originalEvent.deltaY > 0) {
                if(page == 10) return;
                page++;
            } else if(e.originalEvent.deltaY < 0) {
                if(page == 1) return;
                page--;
            }
            let posTop =(page-1) * $(window).height();
            mHtml.animate({scrollTop : posTop});
        })
    
        $('.gnb li').on('mouseenter',function(){
            console.log($(this).children('.sub'))
            $(this).children('.sub').children().css({
                opacity: 1
            })
        }).on('mouseleave',function(){
                $(this).children('.sub').children().css({
                    opacity: 0
            })
        });


        let cont1h =$('.cont1').offset().top;
          $(window).on('scroll',function(){
            let nowH = $(window).scrollTop();
            if(nowH >= cont1h){
                $('.cont1_bg_cover_bg').stop().slideUp(1400,'easeInOutQuint');
                $('.cover_txt').css({
                    opacity:0,
                    fontSize:60
                },1400,0,'easeInCirc')
            }else{
                $('.cont1_bg_cover_bg').stop().slideDown();
                $('.cover_txt').css({
                    opacity : 1,
                    fontSize:60
                    
                });
            }
            $(window).on('resize',function(){
                document.location.reload();
            });
          })

          

        }
        
        }).resize(); 
        $(window).resize(function(){ 
            if (window.innerWidth >= 1200 ) {   
            let cont1h =$('.cont1').offset().top;
              $(window).on('scroll',function(){
                let nowH = $(window).scrollTop();
                if(nowH >= cont1h){
                    $('.cont1_bg_cover_bg').stop().slideUp(1400,'easeInOutQuint');
                    $('.cover_txt').css({
                        opacity:0,
                        fontSize:72
                    },1400,0,'easeInCirc')
                }else{
                    $('.cont1_bg_cover_bg').stop().slideDown();
                    $('.cover_txt').css({
                        opacity : 1,
                        fontSize:72
                        
                    });
                }
                $(window).on('resize',function(){
                    document.location.reload();
                });
              })
    
              
    
            }
            
            }).resize(); 
        
    

        

















































})