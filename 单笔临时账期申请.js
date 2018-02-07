//改写读取事件
jQuery(document).ready(function(){
  jQuery("#field13989").bindPropertyChange(function () {
    var cusType = jQuery("#field13989").val();
    if (cusType == 'CN') {
      applyEssAttr_n(9449);
    }else if (cusType == 'HK') {
      applyEssAttr_n(9450);
    }else {
      cancelEssAttr_n(9449);
      cancelEssAttr_n(9450);
    }
  });
});

//改写提交事件
function checkCustomize(){
  createTitle(13990);
  var xyzt = parseInt(jQuery("#field10589").val());
  if (xyzt>540) {
    alert("已发货单据无法申请临时账期");
    return false;
  }else {
    return true;
  }
}

function createTitle(fieldname) {
  var titleString = jQuery("#field"+fieldname).val();
  if (titleString.length > 0) {
    jQuery("#requestname").val(titleString);
  }
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
