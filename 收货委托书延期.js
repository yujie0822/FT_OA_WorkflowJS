
jQuery(document).ready(function(){
  var wtsType = parseInt(jQuery("#field8554").val()||0);
  if (wtsType == 6) {
    jQuery(".gjkd").removeClass("edesign_hide");
    jQuery(".dsfsh").addClass("edesign_hide");
  }else if (wtsType > 0 && wtsType < 5) {
    jQuery(".gjkd").addClass("edesign_hide");
    jQuery(".dsfsh").removeClass("edesign_hide");
  }else {
    jQuery(".gjkd").addClass("edesign_hide");
    jQuery(".dsfsh").addClass("edesign_hide");
  }

  jQuery("#field8554").bindPropertyChange(function () {
    var wtsType = parseInt(jQuery("#field8554").val()||0);
    if (wtsType == 6) {
      jQuery(".gjkd").removeClass("edesign_hide");
      jQuery(".dsfsh").addClass("edesign_hide");
    }else if (wtsType > 0 && wtsType < 5) {
      jQuery(".gjkd").addClass("edesign_hide");
      jQuery(".dsfsh").removeClass("edesign_hide");
    }else {
      jQuery(".gjkd").addClass("edesign_hide");
      jQuery(".dsfsh").addClass("edesign_hide");
    }
  });
});
