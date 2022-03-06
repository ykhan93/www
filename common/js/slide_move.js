$(document).ready(function () {
            
   $('.footer_inner .topMove').hide();

  $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
       var scroll = $(window).scrollTop(); //스크롤의 거리
      
      
       $('.headerArea').text(scroll);
       if(scroll>600){  //500 이상의 거리가 발생되면
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