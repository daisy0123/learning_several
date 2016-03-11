function getDom(id){
	return document.getElementById(id);
}

function showProvince(){
	getDom("selectedprovince").onclick=showAllProvince;
}
function showAllProvince(){
		getDom("allprovince").style.display="block";
		getDom("layer").style.display="block";
		getDom("selectedprovince").style.backgroundImage="url(arrow01.png)";
		getDom("selectedprovince").style.color="#CCCCCC";
		getDom("layer").onclick=function(){
			hideAllProvince();
		}
		selectProvince();
}
function hideAllProvince(){
		getDom("allprovince").style.display="none";
		getDom("layer").style.display="none";
		getDom("selectedprovince").style.backgroundImage="url(arrow.png)";
		getDom("selectedprovince").style.color="#000000";
}
function selectProvince(){
		var pro=getDom("allprovince").getElementsByTagName("li");
		var links;
		for(var i=0;i<pro.length;i++){
			links=pro[i].getElementsByTagName("span");
			for(var j=0;j<links.length;j++){
				links[j].onclick=function(){
				getDom("selectedprovince").innerHTML=this.innerHTML;
			    hideAllProvince();
				}
			}
		}
}

addLoadEvent(obtn);
addLoadEvent(createTag);
addLoadEvent(checkList);
addLoadEvent(showProvince);