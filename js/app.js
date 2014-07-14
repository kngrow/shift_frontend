$(function(){
  $(".back").on("click",function(ev){
    location.href='./../';
  });

  $("[name='shift_checkbox']").bootstrapSwitch();
 
//シフト登録ページで色を金にする。
$("tbody th").on("click",function(){
  $("#date").removeClass("hidden");
  $("#more_detail").removeClass("hidden");
  $("#entry").removeClass("hidden");
  $("#check").removeClass("hidden");
  $("#date").html($(this).text());
  $(".more").data("td", this);  
  $(".incoming").removeClass("hidden");
  
});
  //ON OFFのチェックボックス
  $('input[name="shift_checkbox"]').on({'switchChange.bootstrapSwitch': function(event, state) {
      if(state == true ){
        console.log("可");
        $(".time").attr('disabled', false);
        $($(".more").data("td")).addClass("select");
      } else {
        console.log("不可");
        $(this).attr("id","select");
        $(".time").attr('disabled', true);
        $($(".more").data("td")).removeClass("select");
      }
  }});
  //シフトを登録するときのアラート文  
  $("#entry").on("click",function(){
    if(window.confirm("登録しますか？")){
        alert("登録しました");
        location.href="../";

    }
  });

  //シフト作成ページで☓で消す

  $(".glyphicon-remove").on("click", function(){
      $(".glyphicon-remove").on("click",function(){
         $(this).parent().fadeOut()
      });
  });

  

});

