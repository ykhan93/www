$(document).ready(function () {

    //top
    $('.topMove').hide();
    $(window).on('scroll', function () { //�ㅽ겕濡� 媛믪쓽 蹂��붽� �앷린硫�
        var scroll = $(window).scrollTop(); //�ㅽ겕濡ㅼ쓽 嫄곕━

        if (scroll > 500) { //500�댁긽�� 嫄곕━媛� 諛쒖깮�섎㈃
            $('.topMove').fadeIn('slow'); //top�몄텧
        } else {
            $('.topMove').fadeOut('fast'); //top誘몃끂異�
        }
    });
    $('.topMove').click(function (e) { //�꾩씠肄� �대┃ �� �곷떒�쇰줈 �ㅻⅤ瑜� �대룞
        e.preventDefault();
        $("html,body").stop().animate({
            "scrollTop": 0
        }, 100);
    });

    /*scroll*/
    var h1= $('#menu').offset().top -500 ;
    var h2= $('#cummitment').offset().top -500 ;
    var h3= $('#event').offset().top -500 ;

    $(window).on('scroll',function(){ 
        var scroll = $(window).scrollTop(); 
            
        if(scroll>=300 && scroll<h1){  
            $('#brand').addClass('scrollevent'); 
            
        }else if(scroll>=h1 && scroll<h2){            
            $('#menu').addClass('scrollevent'); 

        }else if(scroll>=h2 && scroll<h3){            
            $('#cummitment').addClass('scrollevent'); 

        }else if(scroll>=h3){            
            $('#event').addClass('scrollevent'); 

        }
    });
});