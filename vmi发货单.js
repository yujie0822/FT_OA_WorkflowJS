//改写读取事件
jQuery(document).ready(function(){
  var xyed = parseInt(jQuery("#field7543").val()||0);
  if (xyed <= 0) {
    cancelEssAttr_n(6246);
    jQuery("#field6246").attr('readonly', true);//设为只读属性
  }

});

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
