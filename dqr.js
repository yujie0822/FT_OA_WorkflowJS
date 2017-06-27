jQuery(document).ready(function(){
  jQuery("#field7940").val(getTodayDate());
  if(document.getElementById("indexnum0")){
      indexnum1 = document.getElementById("indexnum0").value * 1.0 - 1;
      for(var i=0;i<= indexnum1;i++){
           var yqts=jQuery("#field7951_"+i.toString()).val();
           if(yqts>0){
              applyEssAttr("7953_"+i.toString());
           }
      }
  }

});

checkCustomize = function (){
  var submitFlag = true;
  if(document.getElementById("indexnum0")){
      indexnum1 = document.getElementById("indexnum0").value * 1.0 - 1;
      for(var i=0;i<= indexnum1;i++){
        var yqts=jQuery("#field7951_"+i.toString()).val();
           if(yqts>0){
             if (jQuery("#field7953_"+i.toString()).val()=="") {
               submitFlag = false;
             }
           }
      }
  }
  if(!submitFlag){
      window.top.Dialog.alert("请填写原因");
      return false;
  }else{
      return true;
  }
}

//设置field框为必填
function applyEssAttr(fieldVal) {
  var img  = "<img align=absMiddle src='/images/BacoError_wev8.gif' />";
  // jQuery("#exp_tr").show();
  jQuery("#field"+fieldVal).attr('viewtype','1');
  jQuery("#field"+fieldVal+"spanimg").html(img);
}

//取消field框必填
function cancelEssAttr(fieldVal) {
  // jQuery("#exp_tr").hide();
  jQuery("#field"+fieldVal).attr('viewtype','0');
  jQuery("#field"+fieldVal+"spanimg").html('');

}

//取当前日期
function getTodayDate() {
  var d=new Date();
  var day=d.getDate();
  var month=d.getMonth() + 1;
  var year=d.getFullYear().toString();
  var result;
  if (month<10) {
    month = "0"+month.toString();
  }else {
    month = month.toString();
  }
  if (day<10) {
    day = "0"+day.toString();
  }else {
    day = day.toString();
  }
  result =year+"-"+month+"-"+day;
  return result;
}
