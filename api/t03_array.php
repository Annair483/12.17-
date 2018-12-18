<?php
    // (一)
    // 5.输出语句
    //  echo
    //  print_r()  打印关于变量的信息，适用于数组、对象的打印，一般用于测试
    //  var_dump() 判断一个变量的类型与长度,并输出变量的数据类型和数值，一般用于测试
    // (二) Array
    // 1.创建数组 array() 
    // （1）数值数组 array(1,"aa",3)
    // （2）关联数组(类似于js对象) 
    //      * => 代替 :
    //  (3) 多维数组:一般都是外层为数值数组，内层为关联数组（类似于js的数组对象）
    // 2.操作数组
    //     数组[索引/'键']
    // 3.常用方法：
    //      count() 获取数组的长度    
    //      array_rand() 随机获取数组的索引值
    //      in_array() 判断某个值是否存在数组中
    //      array_slice() 从数组中取出一段
    // 4.遍历
    //  for() 一般用于遍历数值数组
    //  foreach() 一般用于遍历关联数组     
    //      * foreach($arr as $item)   遍历数值数组,$item代表数组每一项
    //      * foreach($arr2 as $key => $val) 遍历关联数组，$key代表数组每一项的键，$val代表数组每一项的值
    //                 
    $arr = array(1,"aa",3,"bb","cc","dd");
    // var_dump(in_array("aa",$arr));
    var_dump(array_slice($arr,2,2));
    // for($i=0;$i<count($arr);$i++){
    //     echo $arr[$i];
    // }
    // foreach($arr as $item){
    //     echo $item;
    // }
    // echo $arr[1];
    // print_r($arr);

    $arr2 = array(
        "name" => "lemon",
        "age" => 17
        );
    foreach($arr2 as $key => $val){
        echo $val;
    }
    // echo $arr2["name"];
    // var_dump($arr2);
    
    $goodslist = array(array(
            "goodsName" => "电动牙刷",
            "price" => 200
        ),array(
            "goodsName" => "牙线",
            "price" =>10
        ));

    // var_dump($goodslist);
    // echo $goodslist[0]["goodsName"];


?>
<script>
    var arr = [1,2,3];
    var obj = {
        name : "lemon",
        age : 17
    }


    var goodslist = [{
        goodsName : "电动牙刷",
        price　: 200
    },{
        goodsName : "牙线",
        price : 10
    }];

    new Object();


</script>