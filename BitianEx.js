checkCustomize = function (){
        var flag=0;
        if(document.getElementById("indexnum1")){
            indexnum1 = document.getElementById("indexnum1").value * 1.0 - 1;
            for(var i=0;i<= indexnum1;i++){
                 var wcxje=jQuery("#field6640_"+i).val();
                 var bccxje=jQuery("#field6641_"+i).val();
                 if((bccxje-wcxje)*1>0){
                     flag=1;
                 }
            }
        }
        if(flag==1){
            alert('本次冲销借款金额大于该笔借款未核销金额');
            return false;
        }else{
            return true;
        }
    }


function checkCustomize(){

    if(jQuery("#field10793").val() == "1"){

        var state = cus_verifyExistNullField("field13031,field13032", "字段未填写");    //封装的校验是否存在空值字段方法

        if(state)    return false;

    }

    return true;

}


jQuery(document).ready(function(){
  jQuery("#field6794").bindPropertyChange(function () {
      var num = jQuery("#field6794").val();
      var img  = "<img align=absMiddle src='/images/BacoError_wev8.gif' />";
      if(num==1){
         jQuery("#exp_tr").show();
         jQuery("#field6796").attr('viewtype','1');
         jQuery("#field6796span").html(img);
         jQuery("#field6795").attr('viewtype','1');
         jQuery("#field6795span").html(img);
      }else{
         jQuery("#exp_tr").hide();
         jQuery("#field6796").attr('viewtype','0');
         jQuery("#field6796span").html('');
         jQuery("#field6795").attr('viewtype','0');
         jQuery("#field6795span").html('');
      }
  });
});

function checkCustomize(){
    if(jQuery("#field6794").val() == 1){
        var state = cus_verifyExistNullField("field6795,field6796","原币金额或汇率未填写");    //封装的校验是否存在空值字段方法
        if(state)   return false;
    }
    return true;
}
