<?php
    // 二、数据类型
    // （一）字符串string
    // - strlen() 获取字符串长度，得到的字符的字节数
    // - mb_strlen() 获取字符串长度
    // - strpos() 查找某个字符在字符串中的索引(字节数)，如果未找到匹配，则返回 false

    $name = "lemon";
    // echo $name;
    // echo strlen($name);
    // echo mb_strlen($name);
    echo strpos($name,"e");





?>