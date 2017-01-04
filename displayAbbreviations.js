
addLoadEvent(displayAbbreviations);

function displayAbbreviations(){


	var b = $(".bbbb").text();
	alert(b);

	var abbr = document.getElementsByTagName("abbr");

	var def = new Array();

	for (var i = 0; i < abbr.length; i++) {
		var title = abbr[i].getAttribute("title");
		var key = abbr[i].firstChild.nodeValue;
		def[key] = title;
	};

	var dlist = document.createElement("dl");

	for (key in def) {
		var value =  def[key];
		var dt = document.createElement("dt");
		var dt_text = document.createTextNode(key);
		dt.appendChild(dt_text);

		var dd = document.createElement("dd");
		var dd_text= document.createTextNode(value);
		dd.appendChild(dd_text);
		dlist.appendChild(dt);
		dlist.appendChild(dd);

	}

	var header = document.createElement("h2");
	var header_text = document.createTextNode("header h2h2h2h2h");
	header.appendChild(header_text);

	var body = document.getElementsByTagName("body")[0];
	body.appendChild(header);
	body.appendChild(dlist);

}

addLoadEvent(displayCity);

function displayCity(){
	var quote = document.getElementsByTagName("blockquote")[0];
	var url = quote.getAttribute("city");
	var quoteElements = quote.getElementsByTagName("*")[0];
	var a = document.createElement("a");
	var a_text= document.createTextNode(url);
	a.appendChild(a_text);
	a.setAttribute("href",url);
	// quote.appendChild(a);
	var sup = document.createElement("sup");
	sup.appendChild(a);
	quoteElements.appendChild(sup);


}

