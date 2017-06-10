$(document).ready(function() {
  console.log('Ready to work');
});

var span = $("span");
  span.each(function(index, element) {
    if (index % 2 == 0) {
      $(element).css('color', 'blue');
    }
  });

// guzik

var paragraph = $('p');
paragraph.each(function(index, element) {
  var newButton = '<button class="btn" data-tmp="' + index + '">Click me</button>'

  $(element).append(newButton)
});

// event
$("button").click(function() {
  alert($(this).attr(data-tmp));
})

