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
        $page=1
	*/

	include "../lib/dbconn.php";

	$sql = "select * from greet where num=$num";
	$result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  	$item_nick    = $row[nick];
	$item_hit     = $row[hit];

    $item_date    = $row[regist_day];

	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}	

	$new_hit = $item_hit + 1;

	$sql = "update greet set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>산림환경연구소-공지사항</title>
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="../sub6/common/css/sub6common.css">
    <link rel="stylesheet" href="./css/view.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
    integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
       
    <script src="../common/js/prefixfree.min.js"></script>
    <script>
        function del(href) 
        {
            if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
                    document.location.href = href; //'delete.php?num=1'
            }
        }
    </script>

     <!--[if IE 9]>  
            <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
            <![endif]-->
</head>
<body>
    
    <div class="wrap">
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
                <div id="view_title">
                    <div id="view_title1"> <?= $item_subject ?></div>
                    <div id="view_title2">
                         조 회&nbsp; :&nbsp; <?= $item_hit ?>&nbsp;&nbsp;|&nbsp;&nbsp;<?= $item_date ?> 
                    </div>
                    <div id="view_title3">
                       <?= $item_nick ?>
                    </div>	
                </div>

                <div id="view_content">
                    <?= $item_content ?>
                </div>

                <div id="view_button">
                    <a href="list.php?page=<?=$page?>">목록</a>&nbsp;
                    <? 
                        if($userid==$item_id || $userlevel==1 || $userid=="master")
                        {
                    ?>
                        <a href="modify_form.php?num=<?=$num?>&page=<?=$page?>">수정</a>&nbsp;
                        <a href="javascript:del('delete.php?num=<?=$num?>')">삭제</a>&nbsp;
                    <?
                        }
                    ?>

                    <!-- <? 
                        if($userid )
                        {
                    ?>
                                    <a href="write_form.php">글쓰기</a>
                    <?
                        }
                    ?> -->
                </div>   
            </div>

        </article>
        <!--서브푸터영역 -->
        <? include "../common/sub_footer.html" ?>

    </div>


        <!--  JQuery -->
        <script src="../common/js/jquery-1.12.4.min.js"></script>
        <script src="../common/js/jquery-migrate-1.4.1.min.js"></script>  
        <script src="../common/js/gnb.js"></script>
</body>
</html>