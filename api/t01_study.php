<!-- 一、php的基本语法
（1）基本结构 <?php ?>
 (2) 注释同js
 (3) 变量
    - 以 $ 符号开始，后面跟着变量的名称（$称为标识符，不属于变量组成部分）
    - 只能包含字母、数字字符以及下划线，不能以数字开头（不能包含空格）
    - 区分大小写
    - 没有声明变量的命令，也没有声明提前的概念。
    * 定义常量并赋值：define("MY_NAME", "laoxie"); 
 (4)作用域：
    - 全局变量：在函数外部定义的变量，可以在任意位置访问(需要手动定义为全局变量)
    - 局部变量：函数内部声明的变量，仅能在函数内部访问
    * 手动定义为全局变量:
        * global关键字: global $变量名
        * $GLOBALS 超级全局变量，数组： $GLOBALS["变量名"]
 (5) 输出语句
    echo 可以输出一个或多个字符串（字符串可以包含HTML标签），速度较快，一般用于向前端返回数据
    

 （6）拼接字符串 .
 -->
<?php
    // $fruit = "lemon";
    // $Fruit = "apple";
    // $x = 10;
    // $y = 20;
    // echo $x > $y? 1: 2;
    // // echo $num || 1;//false||1==>1
    
    // function show(){
    //     // global $fruit;
    //     // echo "<span>我最喜欢吃的水果是".$GLOBALS["fruit"]."</span>";

    //     $GLOBALS["uname"] = "laotian";
    // }
    // show();
    // echo $uname;
    $num = 0;
    for($i=1;$i<=100;$i++){
        $num += $i;
    }
    echo $num;

?>
