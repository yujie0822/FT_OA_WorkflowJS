//改写读取事件
jQuery(document).ready(function(){
//  jQuery("#requestname").val("喵喵喵喵喵");
});
//改写提交事件
function checkCustomize(){
  createTitle(14026);
  jQuery("#requestname").val("喵喵喵喵喵");
  return true;
}

function createTitle(fieldname) {
  var titleString = jQuery("#field"+fieldname).val();
  if (titleString.length > 0) {
    jQuery("#requestname").val(titleString);
  }
}
