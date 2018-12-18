//弹窗插件
//属性是否生成遮罩层  宽高 标题 内容 是否拖拽
//不确定别人会不会传参，所以最好自己定义一个默认传参对象
//传参时传对象进来
//方法：
// init 初始化 生成弹窗以及 弹窗内的元素
function popover(opts){
	var defaults ={
		width:300,
		height:"auto",//不传值就自适应
		overlay:0.3,
		title:'标题',
		content:'内容',
		draggable:true
	}
	//对象合并，因为不知道别人是否传参和传什么参进来，所以把2个对象合并为一个对象来作为参数
	this.options = Object.assign({},defaults,opts);
	//因为options里的属性。值时指向options，不是指向实例，所以原型的方法调用属性时要注意，this的指向
	//解决方法：1.在构造函数里执行 this.init(options) 传options进去 init:function(options)
			//	2.this.options = options
			//  3.this.options = Object.assign({},defaults,opts); 方法调用属性时， this.options.title

}
//方法 生成弹窗内容  
popover.prototype = {
	constructor:popover,
	//初始化生成弹窗等内容
	init:function(){
		//当遮罩层不为false，生成遮罩层，注意后创建在先创建后上
		if(typeof this.options.overlay=="number"){
			this.overlay = document.createElement('div');
			this.overlay.className = 'overlay';
			this.overlay.style.opacity = this.options.overlay;
			document.body.appendChild(this.overlay);
		}
		//生成弹窗最外的div
		//因为show方法要用到popover 所以创建时要用this
		this.popover =document.createElement('div');
		this.popover.className = 'popover';
		this.popover.style.width = this.options.width + 'px';
		//判断如果传入高度
		if(typeof this.options.height=="number"){
			this.popover.style.height = this.options.height + 'px';
		}
		document.body.appendChild(this.popover);
		//生成标题
		var title =document.createElement('div');
		title.className = 'title';
		title.innerHTML = this.options.title;
		this.popover.appendChild(title);
		//生成内容
		var content = document.createElement('div');
		content.className = 'content';
		content.innerHTML = this.options.content;
		this.popover.appendChild(content);
		//生成btnclose
		var closeBtn = document.createElement('span');
		closeBtn.className =  'btn-close';
		closeBtn.innerHTML = '&times;';
		title.appendChild(closeBtn);
		

		//给关闭按钮绑定事件,因为事件里的this指向closeBtn，所以用箭头函数
		closeBtn.onclick = ()=>{
			this.delete();
		}
		//draggable 的值为true。才执行darg方法
		if(this.options.draggable){
			this.move();
		}
		
	},
	
	//点击按钮关闭,初始化时要给关闭按钮绑定事件
	hide:function(){
		this.popover.style.display = "none";
		if(this.overlay){
			this.overlay.style.display = "none";
		}
	},
	//点击关闭按钮后删除popover
	delete:function(){
		document.body.removeChild(this.popover);
		if(this.overlay){
			document.body.removeChild(this.overlay);
		}
	},
	move:function(){
		var popover = this.popover;
        var title =  popover.children[0];
        title.onmousedown = function(evt){
            var ox = evt.pageX - popover.offsetLeft;
            var oy = evt.pageY - popover.offsetTop;
            document.onmousemove = function(e){
                popover.style.left = e.pageX -ox + 'px';
                popover.style.top = e.pageY -oy + 'px';
                e.preventDefault();
            }
        }
        title.onmouseup = function(){
            document.onmousemove = null;
        }
	}

}
//确认弹窗
function confirm(opts){
	var defaults ={
		width:300,
		height:"auto",//不传值就自适应
		overlay:0,
		title:'confirm标题',
		content:'confirm内容',
		confirmBtnFn:function(){},
		cancelBtnFn:function(){}

	}
	this.options = Object.assign({},defaults,opts);
	//父类继承子类的属性
	popover.call(this.options);

	this.init();
	
}
//继承方法
function object(o){
	function F(){};
	F.prototype = o;
	return new F();
}
confirm.prototype = object(popover.prototype);
// confirm.prototype = function(){
// 	constructor:confirm;

// }
confirm.prototype.reinit = function(){
	var confirmBtn =document.createElement('button');
		confirmBtn.innerHTML = "确定";
		this.popover.appendChild(confirmBtn);
	var cancelBtn =document.createElement('button');
		cancelBtn.innerHTML = "取消";
		this.popover.appendChild(cancelBtn);
		confirmBtn.onclick = ()=>{
			this.delete();
			this.options.confirmBtnFn();
		}
		cancelBtn.onclick = ()=>{
			this.delete();
			this.options.cancelBtnFn();
		}

}
