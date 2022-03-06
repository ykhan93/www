$(document).ready(function () {
            

    $('.content_box a').click(function(){
        var value=0;
        if($(this).hasClass('link1')){
           value= $('.content_area #history01').offset().top;   
        }else if($(this).hasClass('link2')){
           value= $('.content_area #history02').offset().top; 
        }else if($(this).hasClass('link3')){
           value= $('.content_area #history03').offset().top; 
        }else if($(this).hasClass('link4')){
           value= $('.content_area #history04').offset().top; 
        }
        
      $("html,body").stop().animate({"scrollTop":value},1000);
    });
});