$(document).ready(function(){
	init();
});

function init(){
	var windowHeight = $(window).height();
	var toolbarHeight = $('#toolbar').height();
	$('#landing-section').height(windowHeight-toolbarHeight-30); 
}