$(document).ready(function() {

	var paragraph = $('p');
	paragraph.each(function(index, element) {
	  var newButton = '<button class="btn" data-tmp="' + index + '">Click me</button>'

	  $(element).append(newButton)
	});

	$("button").click(function() {
	  alert($(this).attr("data-tmp"));
	})

});
