<?php
	$ip = isset($_GET["ip"])?$_GET["ip"]:"1";
	$content = file_get_contents("http://ip.taobao.com/service/getIpInfo.php?ip=".$ip);
	echo $content;
?>