<?
	session_start();
    @extract($_GET); 
    @extract($_POST); 
    @extract($_SESSION);  
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head> 
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="stylesheet" type="text/css" href="css/common.css">
<style>
    #content{overflow: hidden}
    .con1,.con2{width: 50%; border: 1px solid #ccc;
      float: left; box-sizing: border-box;
      height: 300px; margin-top: 20px}    
</style>
</head>

<body>
<div id="wrap">
	<div id="header">
    <? include "./lib/top_login1.php"; ?>
	</div>  <!-- end of header -->

	<div id="menu">
	<? include "./lib/top_menu1.php"; ?>
	</div>  <!-- end of menu --> 

  <div id="content">
		<div id="main_img"><img src="./img/main_img.jpg"></div>
	  <? include "./lib/func.php"; ?>	
		<div class="con1">
		    <? latest_article("greet", 5, 30); ?>
		</div>
		<div class="con2">
		     <? latest_article("concert", 5, 30); ?>
		</div>
		
		
		
  </div> <!-- end of content -->
</div> <!-- end of wrap -->

</body>
</html>







