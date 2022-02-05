//clipboard
var $temp = $("<input>");
var $url = $(location).attr('href=file:///Users/ciarahargis/Desktop/Code/startercode/Project-1/index.html');

$('.clipboard').on('click', function() {
  $("body").append($temp);
  $temp.val($url).select();
  document.execCommand("copy");
  $temp.remove();
  $("p").text("URL copied!");
})