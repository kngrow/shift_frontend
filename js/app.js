$(function(){
    $(".back").on("click",function(ev){
        location.href='./../';
    });

$("[name='shift_checkbox']").bootstrapSwitch();
    });

//シフト登録ページで色を金にする。
$("tbody th").on("click",function(){
  $("#date").html($(this).text());
  $(this).attr("class","in");
  console.log($(event.target).index());
$('input[name="shift_checkbox"]').on({'switchChange.bootstrapSwitch': function(event, state) {
      if(state == true ){
        console.log("可");
         $(".time").attr('disabled', false);
              
      } else {
        console.log("不可");
         flag = 0;
         $(".time").attr('disabled', true);
         
      }
    }
  });
});


      
