//ʵ�ֻص�����
function obtn(){
	var obtn=document.getElementById('btn');
	var clientHeight=document.documentElement.clientHeight;
	var timer=null;
	var isTop=true;

//������
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

//���ͼ��
	obtn.onclick=function()
	{
		timer=setInterval(function(){
		var osTop=document.documentElement.scrollTop||document.body.scrollTop;//��ȡ����λ��
        var ispeed=Math.floor(-osTop/6);//�ٶ�
		document.documentElement.scrollTop=document.body.scrollTop=osTop+ispeed;
		isTop=true;
		console.log(osTop-ispeed);
		if(osTop==0){
			clearInterval(timer);
		}

	},30);
	}
}


