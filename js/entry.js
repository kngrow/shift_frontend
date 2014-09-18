$(function(){
  var remodal = $("[data-remodal-id=modal]").remodal({hashTracking: false});
  var select_day, select_start , select_end;

//touch時に日付を取得。
  $("table tr td").on("click touchend", function(ev){
      if( $(this).text()  ){
       select_day = $("#month").text() + $(this).text() + "日";
        $("#modal_month").html( select_day);
        remodal.open();
      }
  });


  $(document).on('confirm', '.remodal', function () {
      select_start = $("#select_start").val();
      select_end  = $("#select_end").val();

        if(select_start  && select_end){
            $("#shift_selected").append( "<div class='selected_time'>" +select_day  +"　"+  select_start+ "~" + select_end  + "　　<i class='step fi-x '></i>" + "</div>" );
        } else {
          remodal.close();
           alert("時間が入力されてません。");
        }
});
});
