//改写读取事件
jQuery(document).ready(function(){
  onCusTypeChange();
  jQuery("#field9852").bindPropertyChange(function () {
    onCusTypeChange();
  });
});

function onCusTypeChange() {
  var c_area = jQuery("#field9852").val();
  if (c_area == 'CN') {
    //大陆客户必填注册地址、统一社会信用代码、注册资金、成立年份
    applyEssAttr_n(9868);
    applyEssAttr_n(9870);
    applyEssAttr_n(9871);
    applyEssAttr_n(12694);
    cancelEssAttr_n(9872);
    cancelEssAttr_n(9873);
  }else if (c_area == 'HK') {
    //香港客户必填注册地址、商业登记证号、到期日
    applyEssAttr_n(9868);
    applyEssAttr_n(9872);
    applyEssAttr_n(9873);
    cancelEssAttr_n(9870);
    cancelEssAttr_n(9871);
    cancelEssAttr_n(12694);
  }else {
    cancelEssAttr_n(9868);
    cancelEssAttr_n(9872);
    cancelEssAttr_n(9873);
    cancelEssAttr_n(9868);
    cancelEssAttr_n(9870);
    cancelEssAttr_n(9871);
    cancelEssAttr_n(12694);
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
