$(function(){
  $(document).foundation();

  $('table tr td').bind("touchend",function(ev){
      // alert($("#month").text() + $(this).text() + "時");
      var l = $(this).position().left;
      var w = $(this).width();
      console.log("left:"+ l);
      console.log("width" + w);
      if($(this).attr("value")){
          $("#shift_in").text($("#month").text() + $(this).text() + '時'  );

        } else {
          $("#shift_in").text("今日はなし");
        }
  });
});
