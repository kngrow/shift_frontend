$(function(){
  $(document).foundation();

  $('table tr td').bind("touchend",function(ev){
      // alert($("#month").text() + $(this).text() + "時");

      //leftとwidthを取ってきて。widthの1/2をたす
      var left = $(this).position().left;
      var width = $(this).width();
      var trianglecenter = left + (width / 2) -9;

      console.log("left:"+ left);
      console.log("width" + width);
      console.log("center" + trianglecenter);

      if($(this).attr("value")){
        $("#shift_in_allow").css("left", trianglecenter);
        $("#shift_in").html(' <div id="shift_in_allow"></div>' +$("#month").text() + $(this).text() + '時'  );
        $("#shift_in_allow").css("left", trianglecenter);
        $("#shift_in").hide().fadeIn("slow");
        } else {
          $("#shift_in_allow").css("left", trianglecenter);
          $("#shift_in").html(' <div id="shift_in_allow"></div>' +'今日はなし');
          $("#shift_in_allow").css("left", trianglecenter);
          $("#shift_in").hide().fadeIn("slow");
        }
  });

  
});
