jQuery(document).ready(function(){
  hideFun();
  hideShyq();
  hideMbh();
  hideTsyq();
});


function hideFun() {
  var wtsType = parseInt(jQuery("#field8554").val()||0);
  if (wtsType == 6) {
    jQuery(".gjkd").removeClass("edesign_hide");
    jQuery(".dsfsh").addClass("edesign_hide");
    jQuery(".xsry").addClass("edesign_hide");
  }else if (wtsType > 0 && wtsType < 5) {
    jQuery(".gjkd").addClass("edesign_hide");
    jQuery(".dsfsh").removeClass("edesign_hide");
    if (wtsType == 1 || wtsType == 3) {
      jQuery(".xsry").addClass("edesign_hide");
    }else {
      jQuery(".xsry").removeClass("edesign_hide");
    }
  }else {
    jQuery(".gjkd").addClass("edesign_hide");
    jQuery(".dsfsh").addClass("edesign_hide");
    jQuery(".xsry").addClass("edesign_hide");
  }
}

function hideShyq() {
  var ifShyq = parseInt(jQuery("#field12451").val()||0);
  if (ifShyq == 0) {
    jQuery(".mbh").addClass("edesign_hide");
    jQuery(".xzfs").addClass("edesign_hide");
    jQuery(".fzhh").addClass("edesign_hide");
    jQuery(".tsyq").addClass("edesign_hide");
  }else {
    jQuery(".mbh").removeClass("edesign_hide");
  }
}

function hideMbh() {
  var ifMbh = parseInt(jQuery("#field12452").val()||-1);
  if (ifMbh == 0) {
    jQuery(".xzfs").removeClass("edesign_hide");
  }else if (ifMbh == 1) {
    jQuery(".xzfs").addClass("edesign_hide");
    jQuery(".fzhh").addClass("edesign_hide");
    jQuery(".tsyq").addClass("edesign_hide");
  }
  else {
    jQuery(".xzfs").addClass("edesign_hide");
    jQuery(".fzhh").addClass("edesign_hide");
    jQuery(".tsyq").addClass("edesign_hide");
  }
}

function hideTsyq() {
  var xzfs = parseInt(jQuery("#field12453").val()||-1);
  if (xzfs == 0) {
    jQuery(".fzhh").addClass("edesign_hide");
    jQuery(".tsyq").removeClass("edesign_hide");
  }else if (xzfs == 1) {
    jQuery(".fzhh").removeClass("edesign_hide");
    jQuery(".tsyq").removeClass("edesign_hide");
  }else {
    jQuery(".fzhh").addClass("edesign_hide");
    jQuery(".tsyq").addClass("edesign_hide");
  }
}
