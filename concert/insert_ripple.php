<? 
	session_start(); 
	$table = "concert";
	$ripple = "free_ripple";
?>
<html lang="ko">
<meta charset="utf-8"/>
<title>대우조선해양</title>
<?
   /*
   세션변수
  form
      $ripple_content='덧글내용'
  table='free'
  num=1
   */

    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);

   if(!$userid) {
     echo("
	   <script>
	     window.alert('로그인 후 이용하세요.');
	     history.go(-1);
	   </script>
     </html>
	 ");
	 exit;
   }   
   include "../lib/dbconn.php";       // dconn.php 파일을 불러옴

   $regist_day = date("Y-m-d (H:i)");  // 현재의 '년-월-일-시-분'을 저장

   // 레코드 삽입 명령
   $sql = "insert into free_ripple (parent, id, name, nick, content, regist_day) ";
   $sql .= "values($num, '$userid', '$username', '$usernick', '$ripple_content', '$regist_day')";    
   
   mysql_query($sql, $connect);  // $sql 에 저장된 명령 실행
   mysql_close();                // DB 연결 끊기

   echo "
	   <script>
	    location.href = 'view.php?table=$table&num=$num';
	   </script>
	";
?>

   
