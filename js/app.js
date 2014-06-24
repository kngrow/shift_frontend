$(function(){
    $(".back").on("click",function(ev){
        location.href='./../';
    });



$("[name='shift_checkbox']").bootstrapSwitch();
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
