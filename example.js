
// document.write("<p>aaaa</p>");

window.onload = function(){
	var body = document.getElementsByTagName("body")[0];

	var ele = document.createElement("p");
	var txt = document.createTextNode("eeee");
	ele.appendChild(txt);

	var bb = document.createElement("em");
	var bbTxt = document.createTextNode("bbbbb");
	bb.appendChild(bbTxt);
	ele.appendChild(bb);

	var cc = document.createTextNode("ccc");
	ele.appendChild(cc);

	body.appendChild(ele);


	var ele1 = document.createElement("p");
	ele1.innerHTML = "oooooo";
	// body.appendChild(ele1);
	body.insertBefore(ele1,ele);


}