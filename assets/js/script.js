<<<<<<< HEAD
// test
=======
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
>>>>>>> b787b56fe92f18d137b53ac597455f6d2e00c174
