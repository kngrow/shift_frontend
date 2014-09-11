$(function(){

  $('table tr td a').bind("touchend",function(ev){
        $("#modal_month").html($("#month").text() +$(this).text() + "日" );
  });
$(document).on('open', '.remodal', function () {
    console.log('open');
    // $("#modal_month").html($("#month").text() +$(this).text() + "日" );
});
});
