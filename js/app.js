$(function(){
  $(document).foundation();


  var date = new Date();



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
        $("#shift_in").html(' <div id="shift_in_allow"></div>' +$("#month").text() + $(this).text() + '日'+ '時'  );
        $("#shift_in_allow").css("left", trianglecenter);
        $("#shift_in").hide().fadeIn("slow");
        } else {
          $("#shift_in_allow").css("left", trianglecenter);
          $("#shift_in").html(' <div id="shift_in_allow"></div>' +'今日はなし');
          $("#shift_in_allow").css("left", trianglecenter);
          $("#shift_in").hide().fadeIn("slow");
        }
  });





  var remodal = $("[data-remodal-id=modal]").remodal({hashTracking: false});
  var select_day, select_start , select_end;

//touch時に日付を取得。
  $("#shift tr td").on("click touchend", function(ev){
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

            $("#shift_selected").append( "<div class='selected_time'>" +select_day  +"　"+  select_start+ "~" + select_end  + "　　<i class='step fi-x  '></i>" + "</div>" );
        } else {
           alert("時間が入力されてません。");
        }
      });


  $("#shift_selected").on('click touchend', '.step' , function(ev){
      // alert("ああああああｗｗｗｗｗｗｗｗｗｗｗ");
      if(window.confirm("消していいんですか？")){
          alert("消しました。");
          $(this).parent().fadeOut();
      }
  });


  $("#enter_submit").on('click touchend' ,function(ev){
    if(window.confirm("これで提出してもいいんですか？")){
            alert("提出しました。");
            location.href="./../";
    }

  });

  //タッチしてシフト入れてる人のやつを取得する
$("#make tr td").on("click touchend", function(ev){
  var shift =  $("#month").text() + $(this).text() + "日";
});


});
