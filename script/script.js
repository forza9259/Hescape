      
        let min = 59;
        let sec = 59;
        
        function myScroll(){
        const ob = {
            winWidth:$(window).width(),
            scroll:$(window).scrollTop()
        }
        return  ob;
        }

        $('.minutes').text(min);
        $('.seconds').text(sec);
        function minuteText(){
            if(min < 10){
                    $('.minutes').text('0' + min);
            }else{$('.minutes').text(min);}
        }
        function secondText(){
            if(sec < 10){
                    $('.seconds').text('0' + sec);
                }else{$('.seconds').text(sec);}
        }

    
        
        function headerControll(){
            let msob = myScroll();
            if(msob.scroll >= 700){
                $('.header').addClass('active');
                if(msob.winWidth <= 1250){
                    $('.header').css({'width':'100%'})
                }else{$('.header').css({'width':'1000px'})}

                $('.lnb>li>a').css({'line-height':'60px'})
                
                $('.logo').find('img').css({ 'padding-top': '12px'});
                
            }else{
                $('.header').removeClass('active');
                if(msob.winWidth <= 1250){
                    $('.header').css({'width':'100%'})
                }else{$('.header').css({'width':'1200px'})}
                $('.lnb>li').find('a').css({'line-height':'normal'})
                $('.logo').find('img').css({ 'padding-top': '0'});
            }
        }
        
        function headerBottom(){
            let msob = myScroll();
            $('.bars').css({'top':'50%','transform':'translateY(-50%)'})
            $('.header').addClass('active');
            if(msob.winWidth <= 640){
                $('.lnb>li>a').css({'line-height':'normal'})
            }
            else if(msob.winWidth <= 1250){
                $('.header').css({'width':'100%'})
                $('.lnb>li>a').css({'line-height':'60px'})
            }else{$('.header').css({'width':'1000px'})
                $('.lnb>li>a').css({'line-height':'60px'})  
            }
            
            
            $('.logo').find('img').css({ 'padding-top': '12px'});
                
        }
        function headertop(){
            let msob = myScroll();
            $('.header').removeClass('active');
                if(msob.winWidth <= 1250){
                    $('.header').css({'width':'100%'})
                }else{$('.header').css({'width':'1200px'})}
                $('.lnb>li').find('a').css({'line-height':'normal'})
                $('.logo').find('img').css({ 'padding-top': '0'});
        }
        
        $(window).on('load',function(){
            let msob = myScroll();
            if(msob.winWidth > 960){
                $('nav').show()
                headerControll();
                $('.lnb').css({'display':'flex','flex-direction':'row'})
            } else if(msob.winWidth > 640){
                $('nav').show()
                if(msob.scroll >=700){
                   headerBottom();
                   $('.lnb').css({'flex-direction':'row'})
                }else{
                    headertop();
                    $('.lnb').css({'flex-direction':'column'})
                }
            }else{
                $('nav').hide()
            }
        })

        

        $(window).on('scroll',function(){
            let msob = myScroll();
            if(msob.winWidth > 960){
                $('nav').show()
                headerControll();
                $('.lnb').css({'display':'flex','flex-direction':'row'})
            } else if(msob.winWidth > 640){
                $('nav').show()
                if(msob.scroll >=700){
                   headerBottom();
                   $('.lnb').css({'flex-direction':'row'})
                }else{
                    headertop();
                    $('.lnb').css({'flex-direction':'column'})
                }
            }else{
                $('nav').hide()
                if(msob.scroll >=700){
                   headerBottom();
                }else{
                    headertop();
                }
            }
            
        })



        $('.smogImg').on('scroll touchmove mousewheel', function(event){
            if($('.bgImg02').hasClass('active') == true){
            }
            else{
                $('.bgImg02').addClass('active');
                $('.bgImg01').addClass('active');
                $('.countdownText').addClass('active');
             }
        });

        $(window).on('resize',function(){
            let msob = myScroll();
            $('.bgImg02').removeClass('active');
            $('.bgImg01').removeClass('active');
            $('.countdownText').removeClass('active');
            if(msob.winWidth > 960){
                $('nav').show()
                headerControll();
                $('.lnb').css({'display':'flex','flex-direction':'row'})
            } else if(msob.winWidth > 640){
                $('nav').show()
                if(msob.scroll >=700){
                   headerBottom();
                   $('.lnb').css({'display':'flex','flex-direction':'row'})
                }else{
                    headertop();
                    $('.lnb').css({'display':'flex','flex-direction':'column'})
                }
            }else{
                $('nav').hide()
                if(msob.scroll >=700){
                   headerBottom();
                   $('.lnb').css({'display':'flex','flex-direction':'column'})
                }else{
                    headertop();
                }
            }
        })
       
        $('.bars img').on('click',function(){
            $('nav').stop().slideToggle()
        })

        const minTimer = setInterval(function(){
            if(min > 0){
                min --;
                minuteText();
            }else{
                min = 60;
                minuteText();
            }
        },60000)
        const secTimer = setInterval(function(){
            if(sec > 0){
                sec --;
                secondText();
                
            }else{
                sec = 59;
                secondText();
            }
        },1000)

        
       
       
        $('.themeBox').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 960,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 640,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            }

  ]
});
        