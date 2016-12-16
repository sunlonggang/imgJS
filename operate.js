
function addLoadEvent(fun){
	var old = window.onload;
	if (typeof old !="function") {
		window.onload = fun;
	}else{
		window.onload= function(){
			old();
			fun();
		}
	}
}

// window.onload = addAction;
addLoadEvent(addAction);
function addAction () {
	var a = document.getElementsByTagName("a");
	for (var i = 0; i < a.length; i++) {
		a[i].onclick = function(){
			 showPic(this);
	 		return true;
		};
	};
}


function showPic(whichpic){
	alert("success");
	var url = whichpic.getAttribute("href");

	var imgSrc = document.getElementById("img");
	imgSrc.setAttribute("src",url);

	var imgDes = document.getElementById("description");
	imgDes.firstChild.nodeValue = url;
	// imgDes.innerHTML = whichpic.getAttirbute("id");
	// alert(whichpic.getAttirbute("id"));
	
}

// addLoadEvent(countBodyChildren);
function countBodyChildren(){
	alert("start");
	// var num = document.getElementsByTagName("body")[0].childNodes;

	// var nodeArr = [];
	
	// for (var i = 0; i < num.length; i++) {
	// 	if (num[i].nodeType == 1) {
	// 		nodeArr.push(num[i]);
	// 	}
	// };
	// for (var i = 0; i < nodeArr.length; i++) {
	// 	alert(nodeArr[i]);
	// };
	// 
	var num = document.getElementById("description");
	alert(num.childNodes.length);
	var child = num.childNodes;
	for (var i = 0; i < child.length; i++) {
		alert(child[i] +"==="+child[i].nodeType);
	};

}
function insertAfter(newEle,tarEle){
	var parent = tarEle.parentNode;
	if (parent.lastChild == tarEle) {
		parent.appendChild(newEle);
	}else{
		parent.insertBefore(newEle,tarEle.nextSibling);
	}
}


