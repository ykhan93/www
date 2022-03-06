// JavaScript Document

$(document).ready(function() {

  var timeonoff;   //타이머 처리  홍길동 정보
  var imageCount=3;   //이미지 총개수
  var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
  var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
  
  $('.dock .btn1').css('background','#228b22'); //첫번째 불켜
  $('.visual_gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..

  function moveg(){
    if(cnt==imageCount+1)cnt=1;
    if(cnt==imageCount)cnt=0;  //카운트 초기화

    cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
   
  //  for(var i=1;i<=imageCount;i++){
  //         $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
  //  }
  
   $('.visual_gallery li').hide(); //모든 이미지를 보이지 않게.
   $('.visual_gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
                         
  //  for(var i=1;i<=imageCount;i++){
  //       $('.btn'+i).css('background','#00f'); //버튼불다꺼!!
  //      $('.btn'+i).css('width','16'); // 버튼 원래의 너비
  //   }
    
    $('.dock .mbutton').css('background','#fff'); //버튼불다꺼!!
    $('.dock .mbutton').css('width','10'); // 버튼 원래의 너비
    $('.dock .btn'+cnt).css('background','#228b22');//자신만 불켜
    $('.dock .btn'+cnt).css('width','10');    

     if(cnt==imageCount)cnt=0;  //카운트의 초기화 0
   }
   
  timeonoff= setInterval( moveg , 4000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리
    //var 변수 = setInterval( function(){처리코드} , 4000);  //홍길동의 정보를 담아놓는다
    //clearInterval(변수); -> 살인마/사이코패스/살인청부업자


 $('.dock .mbutton').click(function(event){  //각각의 버튼 클릭시
     var $target=$(event.target); //클릭한 버튼 $target == $(this)
     clearInterval(timeonoff); //타이머 중지     
 
    //  for(var i=1;i<=imageCount;i++){
    //      $('.gallery .link'+i).hide(); //모든 이미지 안보인다.
    //    } 
    $('.visual_gallery li').hide(); //모든 이미지 안보인다.

    if($target.is('.btn1')){  //첫번째 버튼 클릭??
       cnt=1;  //클릭한 해당 카운트를 담아놓는다
    }else if($target.is('.btn2')){  //두번째 버튼 클릭??
       cnt=2; 
    }else if($target.is('.btn3')){ 
       cnt=3; 
    }else if($target.is('.btn4')){
       cnt=4; 
    } 

    $('.visual_gallery .link'+cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다
    
    // for(var i=1;i<=imageCount;i++){
    //   $('.btn'+i).css('background','#00f'); //버튼 모두불꺼
    //   $('.btn'+i).css('width','16');
    // }
    $('.dock .mbutton').css('background','#fff'); //버튼 모두불꺼
    $('.dock .mbutton').css('width','10');
    $('.dock .btn'+cnt).css('background','#228b22');//자신 버튼만 불켜 
    $('.dock .btn'+cnt).css('width','10');
    
    if(cnt==imageCount)cnt=0;  //카운트 초기화
   
    timeonoff= setInterval( moveg , 4000); //타이머의 부활!!!
   
    
    
  });




  //왼쪽/오른쪽 버튼 처리
  $('.visual_main .btn').click(function(){

      clearInterval(timeonoff); //살인마

      if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
          if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
          //if(cnt==imageCount+1)cnt=1;  
          cnt++; //카운트 1씩증가
      }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭
          if(cnt==1)cnt=imageCount+1;
          if(cnt==0)cnt=imageCount;
          cnt--; //카운트 감소
      }

    // for(var i=1;i<=imageCount;i++){
    //     $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
    // }
    $('.visual_gallery li').hide(); //모든 이미지를 보이지 않게.
    $('.visual_gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
                        
    $('.dock .mbutton').css('background','#fff'); //버튼 모두불꺼
    $('.dock .mbutton').css('width','16');
    $('.dock .btn'+cnt).css('background','#228b22');//자신 버튼만 불켜 
    $('.dock .btn'+cnt).css('width','30');

    // if($(this).is('.btnRight')){
    //   if(cnt==imageCount)cnt=0;
    // }else if($(this).is('.btnLeft')){
    //   if(cnt==1)cnt=imageCount+1;
    // }

    timeonoff= setInterval( moveg , 4000); //부활

  });


});









// event_슬라이드

// $(document).ready(function() {

//   var timeonoff;   //타이머 처리  홍길동 정보
//   var imageCount=3;   //이미지 총개수
//   var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
//   var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
  
//   $('.dock2 .btn1').css('background','#228b22'); //첫번째 불켜
//   $('.event_inner .event_link1').fadeIn('slow'); //첫번째 이미지 보인다..

//   function moveg(){
//     if(cnt==imageCount+1)cnt=1;
//     if(cnt==imageCount)cnt=0;  //카운트 초기화

//     cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
   
//   //  for(var i=1;i<=imageCount;i++){
//   //         $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
//   //  }
  
//    $('.event_inner li').hide(); //모든 이미지를 보이지 않게.
//    $('.event_inner .event_link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
                         
//   //  for(var i=1;i<=imageCount;i++){
//   //       $('.btn'+i).css('background','#00f'); //버튼불다꺼!!
//   //      $('.btn'+i).css('width','16'); // 버튼 원래의 너비
//   //   }
    
//     $('.dock2 .mbutton').css('background','#fff'); //버튼불다꺼!!
//     $('.dock2 .btn'+cnt).css('background','#228b22');//자신만 불켜

//      if(cnt==imageCount)cnt=0;  //카운트의 초기화 0
//    }
   
//   timeonoff= setInterval( moveg , 4000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리
//     //var 변수 = setInterval( function(){처리코드} , 4000);  //홍길동의 정보를 담아놓는다
//     //clearInterval(변수); -> 살인마/사이코패스/살인청부업자


//  $('.dock2 .mbutton').click(function(event){  //각각의 버튼 클릭시
//      var $target=$(event.target); //클릭한 버튼 $target == $(this)
//      clearInterval(timeonoff); //타이머 중지     
 
//     //  for(var i=1;i<=imageCount;i++){
//     //      $('.gallery .link'+i).hide(); //모든 이미지 안보인다.
//     //    } 
//     $('.event_inner li').hide(); //모든 이미지 안보인다.

//     if($target.is('.btn1')){  //첫번째 버튼 클릭??
//        cnt=1;  //클릭한 해당 카운트를 담아놓는다
//     }else if($target.is('.btn2')){  //두번째 버튼 클릭??
//        cnt=2; 
//     }else if($target.is('.btn3')){ 
//        cnt=3; 
//     }
//     $('.event_inner .event_link'+cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다
    
//     // for(var i=1;i<=imageCount;i++){
//     //   $('.btn'+i).css('background','#00f'); //버튼 모두불꺼
//     //   $('.btn'+i).css('width','16');
//     // }
//     $('.dock2 .mbutton').css('background','#999'); //버튼 모두불꺼
//     $('.dock2 .btn'+cnt).css('background','#228b22');//자신 버튼만 불켜 
    
//     if(cnt==imageCount)cnt=0;  //카운트 초기화
   
//     timeonoff= setInterval( moveg , 4000); //타이머의 부활!!!
   
    
    
//   });




//   //왼쪽/오른쪽 버튼 처리
//   $('.visual_main .btn').click(function(){

//       clearInterval(timeonoff); //살인마

//       if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
//           if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
//           //if(cnt==imageCount+1)cnt=1;  
//           cnt++; //카운트 1씩증가
//       }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭
//           if(cnt==1)cnt=imageCount+1;
//           if(cnt==0)cnt=imageCount;
//           cnt--; //카운트 감소
//       }

//     // for(var i=1;i<=imageCount;i++){
//     //     $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
//     // }
//     $('.event_inner li').hide(); //모든 이미지를 보이지 않게.
//     $('.event_inner .event_link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
                        
//     $('.dock2 .mbutton').css('background','#fff'); //버튼 모두불꺼
//     $('.dock2 .btn'+cnt).css('background','#228b22');//자신 버튼만 불켜 

//     // if($(this).is('.btnRight')){
//     //   if(cnt==imageCount)cnt=0;
//     // }else if($(this).is('.btnLeft')){
//     //   if(cnt==1)cnt=imageCount+1;
//     // }

//     timeonoff= setInterval( moveg , 3000); //부활

//   });


// });
