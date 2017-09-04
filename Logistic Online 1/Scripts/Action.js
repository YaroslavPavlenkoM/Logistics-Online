$( document ).ready(function() {
	
$(function(){
	$('.elementMoving').each(function(i,elem) {
	var link = "#link" + i;
	var icon = "#iconAction" + i;
	var hideElement = "#hideMe" + i;

	$(link).click(function() {
  		if ($(hideElement).hasClass("in")) {
    		$(icon).removeClass('glyphicon-menu-up');
    		$(icon).addClass('glyphicon-menu-down');
    	}
    	else {
    		$(icon).removeClass('glyphicon-menu-down');
    		$(icon).addClass('glyphicon-menu-up');
    	}
	});
 });
});


Tabs();
$(function(){
	$('[name="tabs"]').each(function(j,elemInp) {
		$(elemInp).bind('click load', function(){
  			Tabs();
		});

 });
});
});

function Tabs() {
	$('[name="tabs"]').each(function(i,elem) { 
			 	var d = elem;
				var nameSection = $(elem).data( "namesectionref");
				var element = document.getElementById(nameSection);
				if ($(elem).prop("checked")) {
					var src = $("#img" + i).attr("src");
					$("#img" + i).attr("src", src.replace("Gray", "Blue"));
					element.style.display = "block";
				}
				else {
					var src = $("#img" + i).attr("src");
					$("#img" + i).attr("src", src.replace("Blue" ,"Gray"));
					element.style.display = "none";
				}
			 });
}