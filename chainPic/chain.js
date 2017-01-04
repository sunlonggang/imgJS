$(function(){
	$("a.toolTip").mouseover(function(e){
		var tooltip = "<div id = 'tooltip'>"+this.title+"</div>";
		$("body").append(tooltip);
		var x = 10;
		var y = 20;
		$("#tooltip").css({
			"top":100+"px",
			"left":200+"px"
		}).show("fast");
	}).mouseout(function(event) {
		/* Act on the event */
		$("#tooltip").remove();
	}).mousemove(function(event) {
		/* Act on the event */
				$("#tooltip").css({
			"top":(e.pageY+y)+"px",
			"left":(e.pageX+x)+"px"
		})
	});;
})