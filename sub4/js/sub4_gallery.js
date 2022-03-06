$(document).ready(function(){
             
    $('.image li:eq(0)').fadeIn('slow');
     
    $('.btn img').click(function(){
          var ind = $(this).index('.btn img'); // 0 1 2 3
         
          $('.image li').hide();
          $('.image li:eq('+ind+')').fadeIn('slow');

    });
});
