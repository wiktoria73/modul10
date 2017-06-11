$(document).ready(function() {

	var span = $("span");
    span.each(function(index, element) {
      if (index % 2 == 0) {
        $(element).css('color', 'blue');
      }
    });
		
	var paragraph = $('p');
	paragraph.each(function(index, element) {
	  var newButton = '<button class="btn" data-tmp="' + index + '">Click me</button>'

	  $(element).append(newButton)
	});

	$("button").click(function() {
	  alert($(this).attr("data-tmp"));
	})

});
