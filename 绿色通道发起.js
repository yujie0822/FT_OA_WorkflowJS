//改写读取事件
jQuery(document).ready(function(){
  var applyType = parseInt(jQuery("#field6857").val()||-1);
  if (applyType != 1) {
    jQuery("#field6858").attr('readonly', true);//设为只读属性
  }else {
    applyEssAttr_n(6858);
  }
});

//改写提交事件
function checkCustomize(){
  var applyType = parseInt(jQuery("#field6857").val()||-1);
  if (applyType == 1) {
    var jgType = parseInt(jQuery("#field6858").val()||-1);
    if (jgType == -1) {
      window.top.Dialog.alert("进关单请填写进关类型");
      return false;
    }
    //进关单改标题
    var titleString = jQuery("#requestname").val();
    var titleHead = titleString.substring(0,3);
    if (titleHead == "进关单" || titleHead == "加进关") {
      if (jgType == 0) {
        titleString = "加进关"+titleString.substring(3);
      }else {
        titleString = "单独进关"+titleString.substring(3);
      }
      jQuery("#requestname").val(titleString);
    }
    if (titleHead == "单独进"){
      if (jgType == 0) {
        titleString = "加进关"+titleString.substring(4);
      }else {
        titleString = "单独进关"+titleString.substring(4);
      }
      jQuery("#requestname").val(titleString);
    }

  }
  return true;
}


//设置非field框为必填
function applyEssAttr_n(fieldVal) {
  var img  = "<img align=absMiddle src='/images/BacoError_wev8.gif' />";
  // jQuery("#exp_tr").show();
  jQuery("#field"+fieldVal).attr('viewtype','1');
  jQuery("#field"+fieldVal+"span").html(img);
}

//取消非field框必填
function cancelEssAttr_n(fieldVal) {
  // jQuery("#exp_tr").hide();
  jQuery("#field"+fieldVal).attr('viewtype','0');
  jQuery("#field"+fieldVal+"span").html('');
}
