$(function(){

$('.simg').slick({
    dots:true,
    slidesToShow : 1,
    arrows:true,
    dots:true,
    autoplay:true,
    autoplaySpeed: 2000,
    responsive: [
        {breakpoint:1200, settings :{
            slidesToShow : 1,
            arrows:true,
            dots:false,
            autoplay:true,
            autoplaySpeed: 2000,
        }}
    ]
});

$('.close').on('click',function(){
    $('.mobile_bg').css({
        display: 'block'
    })
    $('.mobileM').animate({
        left:0
    },800,'easeOutQuart')
});
$('.m_close a').on('click',function(){
    $('.mobile_bg').css({
        display: 'none'
    })
    $('.mobileM').animate({
        left: '-100%'
    },1500,'easeOutQuart')
});
$('.mobile_bg').on('click',function(){
    $('.mobile_bg').css({
        display: 'none'
    })
    $('.mobileM').animate({
        left: '-100%'
    },1500,'easeOutQuart')
});
$('.mobileM .depth1 h3').on('click',function(){
    $(this).siblings().slideToggle(300).parent().siblings().find('.depth2').slideUp(300);
});

$(window).resize(function(){ 
    if (window.innerWidth < 768 ) {  
        $('#tab_3 .animal_box').css({display : 'block'});
        $('#tab_3 .bn_btn').css({display : 'block'}); 
        $('#tab_2 .bn').css({display : 'block'}); 
        $('#tab_1 .bn').css({display : 'block'}); 
        $('#tab_1 .bn_btn').css({display : 'block'});
        $('#tab_1 .tab1_tit p').css({display : 'block'});   
        $('.tab_menu .tabs:first-child').addClass('now');
        
        $('.tabs li').on('click',function(){

            let num = $(this).index() + 1;
            console.log(num);
            $(this).addClass('now').siblings().removeClass('now');
            
            $(`#tab_${num}`).addClass('now').siblings().removeClass('now');
        
            console.log(`.tab_${num}`);
            console.log(this);
        });

    }else{ 
    }
    
    }).resize(); 

    $(window).resize(function(){ 
        if (window.innerWidth >= 786 ) {  
           
        $('#tab_3 .animal_box').css({display : 'none'});
        $('#tab_3 .bn_btn').css({display : 'none'}); 
        $('#tab_2 .bn').css({display : 'none'}); 
        $('#tab_1 .tab1_tit p').css({display : 'none'}); 
        $('#tab_1 .bn').css({display : 'none'}); 
        $('#tab_1 .bn_btn').css({display : 'none'}); 
        $('#tab_4').removeClass('now');


        $('.tab').removeClass('now');
        $('.tab_menu li').removeClass('now');
        
        $('#tab_2').addClass('now');
        }
        
        }).resize(); 

        $(window).resize(function(){ 
            if (window.innerWidth >= 1200 ) {  
               

                $('#tab_1 .tab1_tit p').css({display : 'block'});   
            }else{
                $('.tab_btn').slick({
                    dots:false,
                    arrows:false,
                    slidesToShow : 5,
                    autoplay:true,
                    autoplaySpeed: 2500,
                });
            }
            
            }).resize(); 






























})