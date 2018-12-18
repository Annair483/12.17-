<?php
	//接收html传来的数据,需要前端告诉我，你想要第几页，每一页有多少条
	$qty = isset($_GET["qty"])?$_GET["qty"]:5;
	$crrpage = isset($_GET["crrpage"])?$_GET["crrpage"]:1;
	// 1.获取所有json数据
	$path = "../data/football.json";
	$file = fopen($path,"r");
	$content = fread($file,filesize($path));
	fclose($file);
	// 2.将json字符串转成数组（获取数组的长度）,裁剪出需要的当前页的内容。
	$content = json_decode($content,true);
	$len = count($content);
	//裁剪出当前的内容，索引为页数-1*qty
	$res = array_slice($content,($crrpage-1)*$qty,$qty);
	//输出多个值用关联数组在转json
	$arr = array(
		"res"=>$res,
		"len"=>$len,
		"qty"=>$qty,
		"crrpage"=>$crrpage
		);
	echo json_encode($arr,JSON_UNESCAPED_UNICODE);
?>