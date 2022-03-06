

/*캐릭터 이미지 변경*/
$(document).ready(function () {
    var screenSize = $(window).width();
    function screenW() {
        if (screenSize > 1024) {
            $('.content1_bg').attr('src', 'images/content1_bg.jpg');
            $('.content2_bg').attr('src', 'images/content2_bg.jpg');
            $('.content3_bg').attr('src', 'images/content3_bg.jpg');
            $('.content4_bg').attr('src', 'images/content4_bg.jpg');
              
            
        } else if (screenSize >= 768) {
          $('.content1_bg').attr('src', 'images/content1_bg_1024.jpg');
          $('.content2_bg').attr('src', 'images/content2_bg_1024.jpg');
          $('.content3_bg').attr('src', 'images/content3_bg_1024.jpg');
          $('.content4_bg').attr('src', 'images/content4_bg_1024.jpg');
        //   $('.hidden_add').addClass('hidden');
          
          } else if (screenSize >= 640) {
            // $('.hidden_add2').addClass('hidden');
            
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