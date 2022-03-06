//네비게이션

$(document).ready(function() {
  var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
      
    $(".menu_open").click(function(e) { //메뉴버튼 클릭시
        e.preventDefault();
        
        var documentHeight =  $(document).height();
        $("#gnb").css('height',documentHeight); // 전체 body의 높이를 네비에 높이로 반환
 
       if(op==false){ //네비가 닫혀있는 상태에서 클릭했냐??
         $("#gnb").animate({right:0,opacity:1}, 'fast');
         $('#headerArea').addClass('mn_open');
         op=true;
         $('.modal_box').fadeIn('slow');
       }else{ //네비가 열려있는 상태에서 클릭했냐??
         $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
         $('#headerArea').removeClass('mn_open');
         op=false;
         $('.main_box').fadeOut('fast');
       }
 
    });
    
    
     //2depth 메뉴 교대로 열기 처리 
     var onoff=[false,false,false,false]; //각각의 메뉴가 닫혀있으면(false) / 열려있으면(true)
     var arrcount=onoff.length;  //메뉴의개수 6
     
     //console.log(arrcount);
     
     $('#gnb .depth1 h3 a').click(function(){  //1depth 메뉴를 각각 클릭하면
         var ind=$(this).parents('.depth1').index();  // 0~5
         
         //console.log(ind);
         
        if(onoff[ind]==false){
         //$('#gnb .depth1 ul').hide();
         $(this).parents('.depth1').find('ul').slideDown('slow');//클릭한 해당 메뉴의 2depth를 열여라
         $(this).parents('.depth1').find('h3 a').css('color','#228b22').css('font-weight','800');
         $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast'); //나머지 메뉴의 서브를 겁니 다 닫아라
         $(this).parents('.depth1').siblings('li').find('h3 a').css('color','#999').css('font-weight','800');
         
         for(var i=0; i<arrcount; i++) {
            onoff[i]=false; //모든 메뉴의 상태를 false로...
            
         }
          onoff[ind]=true;  //자신의 상태만 true..
          
            
          // $('.depth1 span').text('+');   
          // $(this).find('span').text('-');   
             
        }else{  //클릭한 해당메뉴가 열려있느냐??
          $(this).parents('.depth1').find('ul').slideUp('fast'); // 자신의 서브메뉴만 닫아라
          onoff[ind]=false;   
 
          $(this).parents('.depth1').find('h3').css('background','#fff');
          $(this).parents('.depth1').find('h3 a').css('color','#333').css('font-weight','400');
            
          // $(this).find('span').text('+');     
        }
     });    
   
   });
 




/*top*/
$(document).ready(function () {
            
    $('.footer_inner .topMove').hide();
 
   $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
        var scroll = $(window).scrollTop(); //스크롤의 거리
       
        if(scroll>500){  //500 이상의 거리가 발생되면
            $('.footer_inner .topMove').fadeIn('slow'); //top 보여라
        }else{
            $('.footer_inner .topMove').fadeOut('fast');//top 안보여라
        }
   });
 
 
    $('.footer_inner .topMove').click(function(e){
     e.preventDefault();   
     //상단으로 스르륵 이동합니다.
       $("html,body").stop().animate({"scrollTop":0},1000); 
    });


});

/*footer family */
$(document).ready(function () {
    var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
      
    $(".footer_family .open").click(function(e) { //메뉴버튼 클릭시
        e.preventDefault();
        
        var documentHeight =  $(document).height();
        //$("#gnb").css('height',documentHeight);  전체 body의 높이를 네비에 높이로 반환
 
       if(op==false){ //네비가 닫혀있는 상태에서 클릭했냐??
         $(".footer_family li").animate({right:0,opacity:1}, 'fast');
         $('.footer_family').addClass('family_open');
         op=true;
         $('.modal_box').fadeIn('slow');
       }else{ //네비가 열려있는 상태에서 클릭했냐??
        $(".footer_family li").animate({right:'-100%',opacity:0}, 'fast');
        $('.footer_family').removeClass('family_open');
        op=false;
        $('.main_box').fadeOut('fast');
      }
 
    });


});