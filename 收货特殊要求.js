jQuery(document).ready(function(){
  var czType = parseInt(jQuery("#field12248").val()||-1);
  if (czType == 0 || czType == 1) {
    jQuery(".tsyq2").addClass("edesign_hide");
    jQuery(".tsyq1").removeClass("edesign_hide");
  }
  else if (czType == 2) {
    jQuery(".tsyq1").addClass("edesign_hide");
    jQuery(".tsyq2").removeClass("edesign_hide");
  }
  else {
    jQuery(".tsyq1").addClass("edesign_hide");
    jQuery(".tsyq2").addClass("edesign_hide");
  }

  //类型变更时触发
  jQuery("#field12248").bindPropertyChange(function () {
    var czType = parseInt(jQuery("#field12248").val()||-1);
    if (czType == 0 || czType == 1) {
      jQuery(".tsyq2").addClass("edesign_hide");
      jQuery(".tsyq1").removeClass("edesign_hide");
    }
    else if (czType == 2) {
      jQuery(".tsyq1").addClass("edesign_hide");
      jQuery(".tsyq2").removeClass("edesign_hide");
    }
    else {
      jQuery(".tsyq1").addClass("edesign_hide");
      jQuery(".tsyq2").addClass("edesign_hide");
    }
  });
});

function checkCustomize(){
  var yshyq = jQuery("#field12249").val();
  var czlx = parseInt(jQuery("#field12248").val()||-1);
  if (czlx == 0 && yshyq != "" ) {
    window.top.Dialog.alert("存在原收货特殊要求，无法选择新增");
    return false;
  }
  return true;
}
