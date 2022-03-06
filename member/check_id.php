<meta charset="utf-8">
<?
   
    // @extract($_POST);
    // @extract($_GET);
    // @extract($_SESSION);

    $id = $_POST['id'];
    //$id='a';

    if(!$id)
    {
        echo "<span class='fail'>아이디를 입력하세요.</span>";
        // echo "<span class='fail'>아이디를 입력하세요.</span>";
    }
    else if(strpos($id, ' ') !== false)
    {
        echo "<span class='fail'>공백을 포함하지 않은 아이디를 입력하세요.</span>";
    }
    else
    {
        include "../lib/dbconn.php";    // DB연결

        $sql = "select * from member where id='$id'";

        $result = mysql_query($sql, $connect);
        $num_record = mysql_num_rows($result);


        if ($num_record)
        {
            echo "<span class='fail'>다른 아이디를 사용하세요.</span>";
        }
        else
        {
            echo "<span class='success'>사용가능한 아이디입니다.</span>";
        }
    
        mysql_close();
    }

?>