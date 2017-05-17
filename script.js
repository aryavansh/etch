$(function() {
    for (var x = 0; x<16; x++) {
        for (var y = 0; y<16; y++) {
            $("<div>").addClass("unit").appendTo('#container');
        }
    }
});

$(document).ready(function(){
	$('.unit').hover(
	function(){
		$(this).css("background-color", "red")	}
	
	);

	$('button').on("click", function() {
		$('.unit').css("background-color", "lightgrey")
	});

/*	$('.unit').mouseleave(
	function(){
		$(this).css("background-color", "lightgrey")	}
	
	);

	*/
	
});
