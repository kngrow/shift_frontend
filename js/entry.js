$(function(){
  var remodal = $("[data-remodal-id=modal]").remodal({hashTracking: false});
  var select_day, select_start , select_end;
  $("table tr td").on("click touchend", function(ev){

   select_day = $("#month").text() + $(this).text() + "日";
    $("#modal_month").html( select_day);
    remodal.open();
  });
  $(document).on('confirm', '.remodal', function () {
   select_start = $("#select_start").val();
    console.log(select_start);
    $("#shift_selected").append( "<div>" +select_day + select_start +"</div>" );

});
});
