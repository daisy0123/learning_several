//ʵ�ְ�ť
//��ҳһ����ʵ�ֶ������
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

//��ѡ��ť
function show(index){
	var dd=document.getElementById("type").getElementsByTagName("dd");
	for(var i=0;i<dd.length;i++)
		if (i==index){
			dd[i].className="selected";
		}else{
			dd[i].className=null;
		}

}

//����b��ǩ
function createTag(){
	var li=document.getElementById("checkList").getElementsByTagName("li");
	var label;
	for(var i=0;i<li.length;i++){
		label=li[i].getElementsByTagName("label");
		var bTag=document.createElement("b");
		li[i].insertBefore(bTag,label[0]);
	}
}
//��ѡ��ť
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
