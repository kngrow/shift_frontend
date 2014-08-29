$(function(){
  $(document).foundation();

  $('table tr td').bind("touchend",function(ev){
      alert($("#month").text() + $(this).text() + "時");
  });
});
