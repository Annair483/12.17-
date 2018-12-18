<?php
    $brand = array("小米","华为","锤子","iphone","诺基亚","摩托罗拉");
    $price = array(2000,10000,9999,5999,998,399);
    $color = array("骚粉","原谅绿","女儿红","柠檬黄");
    $goodslist = array();
    for($i=0;$i<100;$i++){
        $goods = array(
            "guid" => $i+1,
            "goodsName" => $brand[array_rand($brand)],
            "price" => $price[array_rand($price)],
            "color" => $color[array_rand($color)]
        );
        $goodslist[$i] = $goods;
    }
    // var_dump($goodslist);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Document</title>
</head>
<body>
    <ul id="output">
        <?php
            // foreach($goodslist as $item){
            //     echo '<li data-id="'.$item["guid"].'">
            //                 <p>商品名：'.$item["goodsName"].'</p>  
            //                 <p>价格:'.$item["price"].'</p>  
            //                 <p>颜色:'.$item["color"].'</p>
            //             </li>';
            // }
        for($i=0;$i<count($goodslist);$i++){
                echo '<li data-id="'.$goodslist[$i]["guid"].'">
                            <p>商品名：'.$goodslist[$i]["goodsName"].'</p>  
                            <p>价格:'.$goodslist[$i]["price"].'</p>  
                            <p>颜色:'.$goodslist[$i]["color"].'</p>
                        </li>';
            }
        ?>
    </ul>
</body>
</html>