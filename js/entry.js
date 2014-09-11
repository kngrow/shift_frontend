$(function(){
  $("table tr td").on("click touchend", function(ev){
    $("#modal_month").html($("#month").text() + $(this).text() + "日");
    $.remodal.lookup[$("[data-remodal-id=modal]").data("remodal")].open();
  });
});
