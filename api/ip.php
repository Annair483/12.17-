<?php
	$content = file_get_contents("http://2018.ip138.com/ic.asp");
	$content = iconv("gb2312","UTF-8",$content);
	$reg = '/\[((?:\d+\.){3}\d+)\]/';
	preg_match($reg,$content,$res);
	echo $res[1];
	
?>