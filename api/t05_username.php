<?php
    // $exist = array("lemon","甜甜","尔康");
    // $username = $_GET["username"];
    // if(in_array($username,$exist)){
    //     echo "用户名已存在，请换一个";
    // }else{
    //     echo "用户名可用";
    // }

//1.创建异步请求
//2.与服务器连接，用get传输信息到服务器
    //3、发送请求 服务器判断存在 返回数据
	$exist = array("lemon","tiantian","erkan");
	$username = $_GET["username"];
	if(in_array($username,$exist)){
		echo "用户名已存在，请换一个";
	}else{
		echo "用户名可用";
	}



?>