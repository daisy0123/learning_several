//实现按钮
//网页一加载实现多个函数
function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!="function"){
		window.onload=func;
	}else{
		window.onload=function(){
		oldonload();
		func();
		}
	}
}

//单选按钮
function show(index){
	var dd=document.getElementById("type").getElementsByTagName("dd");
	for(var i=0;i<dd.length;i++)
		if (i==index){
			dd[i].className="selected";
		}else{
			dd[i].className=null;
		}

}

//创建b标签
function createTag(){
	var li=document.getElementById("checkList").getElementsByTagName("li");
	var label;
	for(var i=0;i<li.length;i++){
		label=li[i].getElementsByTagName("label");
		var bTag=document.createElement("b");
		li[i].insertBefore(bTag,label[0]);
	}
}
//多选按钮
function checkList(){
	var li=document.getElementById("checkList").getElementsByTagName("li");
	for(var i=0;i<li.length;i++){
		li[i].onclick=function(){
			if(this.className=="selected"){
				this.className=null;
			}else{
				this.className="selected";
			}
			
		}
	}
}
