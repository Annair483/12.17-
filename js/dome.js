jQuery(function($){
	var $btnFx = $('#btnFx');
	var $keyword = $('#keyword');
	var $datalist = $('.datalist');	
	//1.给tr偶数加背景颜色
	var $tr = $('.datalist tbody tr');
	$tr.filter(':even').css('background-color','#efefef');
	//2.点击全选按钮tobody的tr 高亮。并打钩
	var $allBtn =  $('#all');
	var $aloneBtn = $('tbody :checkbox');
	$allBtn.on('click',function(){
		//让aloneBtn的checked跟随allBtn的checked
		$aloneBtn.prop('checked',this.checked)
		//判断aloneBtn选中高亮
		this.checked? $tr.addClass('selected'):$tr.removeClass('selected');
	})
	//3.单个选中是否高亮
	var $datalist = $('.datalist');
	$datalist.on('click','tbody tr',function(){
		$(this).toggleClass('selected');
		//根据tr是否有selected样式来决定tr的复选框是否勾上
		$(this).find(':checkbox').prop('checked',$(this).hasClass('selected'));
		isAll();
	})
	//4.反选框
	var $btnFx = $('#btnFx');
	$btnFx.on('click',function(){
		$tr.toggleClass('selected');
		for(var i=0;i<$aloneBtn.length;i++){
			$aloneBtn[i].checked = !$aloneBtn[i].checked ;
		}
		isAll();
	})
	//5.如果tb全选 th也要打钩
	function isAll(){
		var $checkedLen = $('tbody :checked').length;
		var $checkboxLen = $tr.length;
		$checkedLen==$checkboxLen? $allBtn.prop('checked',true):$allBtn.prop('checked',false);
	}
	//6.输入关键字勾选tb的tr
	var $keyword = $('#keyword');
	var $button = $keyword.next();
	$button.on('click',function(){
		var _keyword = $keyword.val();
		if(_keyword.trim().length==0){
			return alert('请输入关键字')
		}else{
			$tr.removeClass('selected').find(':checkbox').prop('checked',false)
		$tr.filter(':contains('+_keyword+')').addClass('selected').find(':checkbox').prop('checked',true);
		}		
	})
	
})