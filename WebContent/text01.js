//实现回到顶部
function obtn(){
	var obtn=document.getElementById('btn');
	var clientHeight=document.documentElement.clientHeight;
	var timer=null;
	var isTop=true;

//滚动条
 window.onscroll=function(){
	    var osTop=document.documentElement.scrollTop||document.body.scrollTop;
		if(osTop>=clientHeight){
			obtn.style.display='block';
		}else{
			obtn.style.display='none';
		}
		if(!isTop){
			clearInterval(timer);
		}
		isTop=false;
	}

//点击图标
	obtn.onclick=function()
	{
		timer=setInterval(function(){
		var osTop=document.documentElement.scrollTop||document.body.scrollTop;//获取顶部位置
        var ispeed=Math.floor(-osTop/6);//速度
		document.documentElement.scrollTop=document.body.scrollTop=osTop+ispeed;
		isTop=true;
		console.log(osTop-ispeed);
		if(osTop==0){
			clearInterval(timer);
		}

	},30);
	}
}


