$(function() {
	var result = 16;
		for (var x = 0; x<result; x++) {
        for (var y = 0; y<result; y++) {
            $("<div>").addClass("unit").appendTo('#container'); }}});

function buttonFn() {
	$('.unit').css("background-color", "lightgrey")
			};

function valueCheck() {
	
	while ((isNaN(result) || result<1 || result>100) && result !== null) {
		var result = prompt("Please enter size of workspace:", "Please enter number between 1-100");
	};

	$('#container').empty();

	var ht = (832/result)-2;
	
	for (var x = 0; x<result; x++) {
        for (var y = 0; y<result; y++) {
            $("<div>").addClass("unit").appendTo('#container');
        }
  

        $('.unit').css("height", ht);
        $('.unit').css("width", ht);

        $('.unit').hover(
	function(){
		$(this).css("background-color", "#"+((1<<24)*Math.random()|0).toString(16))	
	});

    }};

$(document).ready(function(){

	$('.unit').hover(
	function(){
		$(this).css("background-color", "#"+((1<<24)*Math.random()|0).toString(16))	
	}); });