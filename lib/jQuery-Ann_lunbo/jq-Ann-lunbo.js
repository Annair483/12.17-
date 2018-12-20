if(!jQuery.fn.lunbo){
    jQuery.fn.lunbo = function(obj){
        var defaults={
            width:200,
            height:200,
            img:[],
            type:'shuiping',//水平shuiping,淡入淡出fade
            seamless:true //是否无缝连接
        }
        //合并传入对象和默认对象属性
        var opt = Object.assign({},defaults,obj);
        //初始化轮播图
        var $ul
        var idx = 0;
        var init = ()=>{
            //创建ul、li、img
            $ul = $('<ul/>');
            //遍历传入的img长度生成li
            for(var i=0;i<opt.img.length;i++){
                $('<li/>').appendTo($ul).html(`<img src="${opt.img[i]}" width="${opt.width}" height="${opt.height}">`)
            }
            //this 指向.focus 设置宽高
            this.append($ul).width(opt.width).height(opt.height);


            //设置ul的宽高
                //如果要无缝轮播,在ul最后的li追加第一个
            if(opt.seamless==true&&(opt.type=='shuiping'||opt.type=='chuizhi')){
                $('<li/>').appendTo($ul).html(`<img src="${opt.img[0]}" width="${opt.width}" height="${opt.height}">`);
                //水平滚动时 opt.img长度+1  
                opt.type=='shuiping'?opt.img.length++:opt.img.length;
               
            }
            if(opt.type=='shuiping'){
                $ul.width(opt.width*opt.img.length).height(opt.height).addClass('shuiping');
                console.log(opt.img.length)
            }else if(opt.type=='touming'){
                $ul.width(opt.width).height(opt.height).addClass('fade')
            }
           
        }
     
       
        //ul移动
        var autoPlay = ()=>{
            setInterval(function(){
                idx++;
                show();
            },800)
        }
        var show = ()=>{
            if(opt.seamless==true&&(opt.type=='shuiping'||opt.type=='chuizhi')){
                if(opt.type=='shuiping'){
                    if(idx==opt.img.length){
                        opt.type=='chuizhi'?$ul.css('top',0):$ul.css('left',0);
                        idx=1;
                    }
                }else{
                    if(idx==opt.img.length+1){
                        opt.type=='chuizhi'?$ul.css('top',0):$ul.css('left',0);
                        idx=1;
                    }
                }
               
               opt.type=='chuizhi'?$ul.animate({top:-opt.height*idx},500):$ul.animate({left:-opt.width*idx},500);
               console.log(idx)
            }else{if(opt.type=='chuizhi'){
                    if(idx>=opt.img.length){
                        idx=0;
                    }
                    $ul.animate({top:-opt.height*idx},500)
                }
                else if(opt.type=='shuiping'){
                    if(idx>=opt.img.length){
                        idx=0;
                    }
                    $ul.animate({left:-opt.width*idx},500);
                }
            }
           
        }
        
        init();
        autoPlay();
      
            // 3.复制索引0所在的元素，追加到ul最后面。
            
            // 1.focus呈现图片，宽度为第一张图片的宽度。ul的宽度=图片的宽度*图片张数
            //  * 必须等待第一张图片加载完成后，再获取宽度
           
            //4.鼠标移入focus，清除定时器。鼠标移出focus，重新开启定时器
           
            //5.点击小圆点，获取里面的内容-1==>索引
           
            // you.onclick =function(){
            //  idx++;
            //  showPic();
            // }
        
            // 2.开启定时器，定义一个索引（0、1、2）改变，从而改变的是ulbox的left值
            //  * 当索引为数组长度时，其实要呈现的是索引1所在的图片。为了让轮播图是正着滚的，同时将ul的left手动设置成0。
          
            //只做呈现图片
            
                //4.滚动过程中索引改变，去除所有的高亮，再让对应的索引高亮.
                //  * 当滚到被复制那张图片索引时，对应的索引为0的小圆点高亮。
               
            
            
            //3.生成页码，同时根据len-1生成小圆点.默认第一个小圆点高亮.active
           
        }
    
}

// 0 1 2 3(0)
// 0 1 2