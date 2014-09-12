$(function(){
  var remodal = $("[data-remodal-id=modal]").remodal({hashTracking: false});

  $("table tr td").on("click touchend", function(ev){
    $("#modal_month").html($("#month").text() + $(this).text() + "日");
    remodal.open();
  });
});
