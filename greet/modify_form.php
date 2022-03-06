<? 
	session_start(); 

	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);
	/*
		$_SESSION['userid']
		$_SESSION['username']
		$_SESSION['usernick']
		$_SESSION['userlevel']

		$num=1  (나야나~~~~~)
		$page=2
	*/
	
	include "../lib/dbconn.php";

	$sql = "select * from greet where num=$num";
	$result = mysql_query($sql, $connect);

	$row = mysql_fetch_array($result);       	
	$item_subject     = $row[subject];
	$item_content     = $row[content];
?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>산림환경연구소-자유게시판</title>

    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="../sub6/common/css/sub6common.css">
    <link rel="stylesheet" href="./css/write_form.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
    integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
       
    <script src="../common/js/prefixfree.min.js"></script>


     <!--[if IE 9]>  
            <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
            <![endif]-->
</head>
<body>
    
    <div class="wrap">


        <!--서브헤더영역 -->
                <!--서브헤더영역 -->
                <? include "../common/sub_header.html" ?> 


        <div class="visual">
            <img src="../sub6/common/images/visual.jpg" alt="비주얼 사진">
            <h3>산림어울마당</h3>
        </div>

        <div class="sub_menu">
            <ul>
                <li class="current"><a href="greet/list.php">공지사항</a></li>
                <li><a href="../greet2/list.php">자유게시판</a></li>
                <li><a href="../sub6/sub6_3.html">포토 갤러리</a></li>
                <li><a href="../sub6/sub6_3.html">체험 갤러리</a></li>
            </ul>
        </div>


        <article id="content">
            <div class="title_area">
                <div class="line_map">
                    <img src="../sub6/images/content1/home_ico.png" alt="Home"> &gt; 산림어울마당 &gt; <strong>공지사항</strong></div>
                <h2>공지사항</h2>
                

            </div>

            <div class="content_area">
                <form  name="board_form" method="post" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>"> 
                    <div id="write_form">
                        <div id="write_row1">
                            <ul>
                                <li class="col1">이 름&nbsp;&nbsp;:&nbsp;</li>
                                <li class="col2"><?=$usernick?></li>
                            </ul>
                        </div>
                        <div id="write_row2">
                            <ul>
                                <li class="col1">제 목&nbsp;&nbsp;: &nbsp; </li>
                                <li class="col2"><input type="text" name="subject" value="<?=$item_subject?>" ></li>
                            </ul>
                        </div>
                        <div id="write_row3">
                            <div class="col1"> 내용   </div>
			                 <div class="col2"><textarea rows="25" cols="108" name="content"><?=$item_content?></textarea></div>
                            <!-- <ul>
                                <li class="col1"> 내 용&nbsp;&nbsp;: &nbsp; </li>
                                <li class="col2"> <textarea rows="25" cols="125" name="content" ><?=$item_content?></textarea></li>
                            </ul> -->
                        </div>
		            </div>

                    <div id="write_button">
                        <ul>
                            <li> <input type="submit" value="확인">&nbsp;</li>
                            <li><a href="list.php?page=<?=$page?>">목록</a></li>
                        </ul>
                    </div>
		        </form>  
            </div>

        </article>
        <!--서브푸터영역 -->
        <? include "../common/sub_foot.html" ?>

    </div>


        <!--  JQuery -->
        <script src="../common/js/jquery-1.12.4.min.js"></script>
        <script src="../common/js/jquery-migrate-1.4.1.min.js"></script>  
        <script src="../common/js/gnb.js"></script>
</body>
</html>