$(function(){
  $("table tr td a").on("click touchend", function(ev){
    $("#modal_month").html($("#month").text() + $(this).text() + "日");
  });
});
