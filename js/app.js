$("[name='shift_checkbox']").bootstrapSwitch();
      $('input[name="shift_checkbox"]').on({'switchChange.bootstrapSwitch': function(event, state) {
      if(state == true ){
        console.log("可");
         flag = 1;
      } else {
        console.log("不可");
         flag = 0;
      }
    }
  });