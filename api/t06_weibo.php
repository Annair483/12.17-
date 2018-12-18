<?php
    // 1.接收前端发送的currentId.
    //  判断currentId有没有设置 isset()
    //      若有则接收currentId,若没有设置默认值1
    $currId = isset($_GET["currId"])?$_GET["currId"]:1;
    
    // 2.对文件内容的读取出来==>用$content接收
    //  (1) 获取文件路径$path
    //  (2) 打开文件（读取）$file = fopen($path,打开文件模式)
    //  (3) 读取文件 fread($file,读多少)
    //      * filesize($path)：读取文件字符长度
    //  (4) 关闭文件 fclose($file)
    $path = "../data/weibo.json";
    $file = fopen($path,"r");
    $content = fread($file,filesize($path));
    fclose($file);
    // 3.json字符串转成数组
    // json_decode(json,assoc);把字符串转成数组/对象
    //      json：待解码的 json string 格式的字符串
    //      assoc：默认false,返回object, 当该参数为 true 时，将返回array
    $content = json_decode($content,true);

    // 4.对$content进行遍历，找到与currentId相等的那个对象，对其的likecnt进行++运算。
    //  * 数值数组for循环，直接操作数组
    for($i=0;$i<count($content);$i++){
        if($content[$i]["id"] == $currId){
            $content[$i]["likecnt"]++;
            $res = $content[$i]["likecnt"];
            break;
        }
    }
    // 5.将$content重新写入文件
    // （1）以只写方式打开
    // （2）写入 fwrite(file,json字符串)
    //      *json_encode(array,JSON_UNESCAPED_UNICODE);  把数组转成字符串
    //      php5.4+ 使用JSON_UNESCAPED_UNICODE防止中文转义
    $file = fopen($path,"w");
    fwrite($file,json_encode($content,JSON_UNESCAPED_UNICODE));
    fclose($file);
    
    // 6.将当前被改变的关联数组的点赞数返回给前端。
    echo $res;



    // var obj = {
    //     "name" : "laotian",
    // }
    // obj.age = 17;
    // // 关联数组
    // $arr = array(
    //      "name" => "laotian"
    // )
    // $arr["age"] = 17
    // // 对象
    // $obj  = new Object();
    // $obj->age = 17;

    // js  php
    // +    .
    // :    =>
    // .    ->
   
?>