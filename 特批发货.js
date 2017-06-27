jQuery(document).ready(function(){
  if(document.getElementById("indexnum1")){
      indexnum1 = document.getElementById("indexnum1").value * 1.0 - 1;
      for(var i=0;i<= indexnum1;i++){
           var yqts=jQuery("#field7407_"+i.toString()).val();
           if(yqts>0){
              applyEssAttr("7559_"+i.toString());
           }
      }
  }

});

checkCustomize = function (){
  var submitFlag = true;
  if(document.getElementById("indexnum1")){
      indexnum1 = document.getElementById("indexnum1").value * 1.0 - 1;
      for(var i=0;i<= indexnum1;i++){
        var yqts=jQuery("#field7407_"+i.toString()).val();
           if(yqts>0){
             if (jQuery("#field7559_"+i.toString()).val()=="") {
               submitFlag = false;
             }
           }
      }
  }
  if(!submitFlag){
      alert("请填写原因");
      return false;
  }else{
      return true;
  }
}

//设置field框为必填
function applyEssAttr(fieldVal) {
  var img  = "<img align=absMiddle src='/images/BacoError_wev8.gif' />";
  jQuery("#exp_tr").show();
  jQuery("#field"+fieldVal).attr('viewtype','1');
  jQuery("#field"+fieldVal+"span").html(img);
}

//取消field框必填
function cancelEssAttr(fieldVal) {
  jQuery("#exp_tr").hide();
  jQuery("#field"+fieldVal).attr('viewtype','0');
  jQuery("#field"+fieldVal+"span").html('');

}
