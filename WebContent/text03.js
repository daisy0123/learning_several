//实现搜索框
//封装函数
var getDOM=function(id){
	return document.getElementById(id);
}

var addEvent=function(id,event,fn){
	var el=getDOM(id)||document;
	if(el.addEventListener){
		el.addEventListener(event,fn,false);
	}else if(el.attachment){
		el.attachment('on'+event,fn);
	}	
}

var getElementLeft=function(element){
	var actualLeft=element.offsetLeft;
	var current=element.offsetParent;

	while(current!==null){
		actualLeft+=current.offsetLeft;
		current=current.offsetParent;
	}
	return actualLeft;
}

var getElementTop=function(element){
	var actualTop=element.offsetTop;
	var current=element.offsetParent;

	while(current!==null){
		actualTop+=current.offsetTop;
		current=current.offsetParent;
	}
	return actualTop;
}
//调用数据
var ajaxGet=function(url,callback){
	var _xhr=null;
	if(window.XMLHttpRequest){
		_xhr=new window.XMLHttpRequest();
	}else if(window.ActiveXObject){
		_xhr=new ActiveXObject("Msxml2.XMLHTTP");
	}
   _xhr.onreadystatechange=function(){
		if(_xhr.readyState==4 && _xhr.status==200){
			callback(JSON.parse(_xhr.responseText));
		}
   }
   _xhr.open('get',url,false);
   _xhr.send(null);
}
var delegateEvent=function(target,event,fn){
	addEvent(document,event,fuction(e){
		if(e.target.nodeName==target.toUpperCase()){
			fn.call(e.target);
		}
	});
}


  addEvent('search_input','keyup',function(){
	var searchText=getDOM('search_input').value;
	ajaxGet('http://api.bing.com/qsonhs.aspx?q='+searchText,function(d){
		var d=d.AS.Results[0].Suggests;
		var html='';
		for(var i=0;i<d.length;i++){
		 html+='<li>'+d[i].Txt+'</li>';
		}
	var _dom=getDOM('search-suggest');
	getDOM('search-result').innerHTML=html;
	_dom.style.top=getElementTop(getDOM('search-form'))+33+'px';
	_dom.style.left=getElementLeft(getDOM('search-form'))+'px';
	_dom.style.position='absolute';
	_dom.style.display='block';
   });
});

delegateEvent('li','click',function(){
	var keyword=this.innerHTML;
	location.href='http://cn.bing.com/search?q='+keyword;
});

