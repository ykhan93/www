$(document).ready(function() {
  var screenSize, screenHeight;
  var current=false;

  function screen_size(){
      screenSize = $(window).width(); //스크린의 너비
      screenHeight = $(window).height();  //스크린의 높이

      $("#content").css('margin-top',screenHeight);
      
      if( screenSize > 768 && current==false){
          $("#videoBG").show();
          $("#videoBG").attr('src','./images/aaa.mp4');
          $("#imgBG").hide();
          current=true;
        }
      if(screenSize <= 768){
          $("#videoBG").hide();
          $("#videoBG").attr('src','');
          $("#imgBG").show();
          current=false;
      }
  }

  screen_size();  //최초 실행시 호출
  
 $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
      screen_size();
  }); 
  
  $('.down').click(function(){
      screenHeight = $(window).height();
      $('html,body').animate({'scrollTop':screenHeight}, 1000);
  });
  
  
});




/*캐릭터 이미지 변경*/
$(document).ready(function () {
  var screenSize = $(window).width();
  function screenW() {
      if (screenSize > 1024) {
          $('.series1').attr('src', 'images/characters_1.jpg');
          $('.series2').attr('src', 'images/characters_2.jpg');
          $('.series3').attr('src', 'images/characters_3.jpg');
          $('.series4').attr('src', 'images/characters_4.jpg');
          $('.series5').attr('src', 'images/characters_5.jpg');
            
          
      } else if (screenSize >= 768) {
        $('.series1').attr('src', 'images/characters_1_mobile.jpg');
        $('.series2').attr('src', 'images/characters_2_mobile.jpg');
        $('.series3').attr('src', 'images/characters_3_mobile.jpg');
        $('.series4').attr('src', 'images/characters_4_mobile.jpg');
        $('.series5').attr('src', 'images/characters_5_mobile.jpg');
        $('.hidden_add').addClass('hidden');
        
        } else if (screenSize >= 640) {
          $('.hidden_add2').addClass('hidden');
          
          }
  }
  screenW(); //함수호출  
  $(window).resize(function () {
      screenSize = $(window).width();
      screenW(); //함수호출
  });

  // var current = 0;
  // $(window).resize(function () {
  //     var screenSize = $(window).width(); //브라우저의 넓이
  //     if (screenSize > 1024) { //모바일이상
  //         $(".mainMenu").show(); //모바일이상 해상도에선 무조건 보여라!
  //         current = 1; //모바일 이상의 해상도가 되면 1!
  //     }
  //     if (current == 1 && screenSize <= 1024) {
  //         $(".mainMenu").hide();
  //         current = 0; //모바일 해상도일 경우 0!
  //     }
 });