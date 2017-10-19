jQuery(document).ready(function(){
  hideFun();
//委托书类型变更时触发
  jQuery("#field8554").bindPropertyChange(function () {
    hideFun();
  });

  //国别数组
  var arr_gb = new Array(1,958);
  var arr_sj = new Array(10,5,30,15,18,31,23,17,6,14,11,9,24,29,4,12,22,21,20,16,2,26,7,19,28,13,8,1461,1462,1463,1464);
  //国别（中文）变更时触发

  jQuery("#field11939").bindPropertyChange(function () {
    var gb_cn = parseInt(jQuery("#field11939").val()||0);
    if (jQuery.inArray(gb_cn,arr_gb) != -1) {
      applyEssAttr_f(11940);
    }else {
      cancelEssAttr_f(11940);
    }
  });
  jQuery("#field11940").bindPropertyChange(function () {
    var sj_cn = parseInt(jQuery("#field11940").val()||0);
    if (jQuery.inArray(sj_cn,arr_sj) != -1) {
      applyEssAttr_f(11941);
    }else {
      cancelEssAttr_f(11941);
    }
  });
  jQuery("#field11942").bindPropertyChange(function () {
    var gb_en = parseInt(jQuery("#field11942").val()||0);
    if (jQuery.inArray(gb_en,arr_gb) != -1) {
      applyEssAttr_f(11943);
    }else {
      cancelEssAttr_f(11943);
    }
  });

  hideShyq();
  hideMbh();
  hideTsyq();
  //是否有收货特殊要求变更时
  jQuery("#field12451").bindPropertyChange(function () {
    hideShyq();
  });
  //是否有模板号变更时
  jQuery("#field12452").bindPropertyChange(function () {
    hideMbh();
  });
  //收货特殊要求新增方式变更时
  jQuery("#field12453").bindPropertyChange(function () {
    hideTsyq();
    var xztype = parseInt(jQuery("#field12453").val()||-1);
    if (xztype == 0) {
      jQuery("#field12455").val("");
      jQuery("#field12454").val("");
    }else if (xztype == 1) {
      jQuery("#field12455").val("");
      jQuery("#field12454").val("");
    }
  });
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
    window.top.Dialog.alert("收货特殊要求中有模板号要求时，请另行单独申请收货特殊要求流程");
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
    jQuery("#field12454").attr('readonly', false);//取消只读属性
  }else if (xzfs == 1) {
    jQuery(".fzhh").removeClass("edesign_hide");
    jQuery(".tsyq").removeClass("edesign_hide");
    jQuery("#field12454").attr('readonly', true);//设为只读属性
  }else {
    jQuery(".fzhh").addClass("edesign_hide");
    jQuery(".tsyq").addClass("edesign_hide");
  }
}

function checkCustomize(){
  var wtsType = parseInt(jQuery("#field8554").val()||0);
  if (wtsType != 6) {
    var shName1 = jQuery("#field8562").val();
    var shName2 = jQuery("#field8563").val();
    if (shName1 == "" && shName2 == "") {
      window.top.Dialog.alert("请至少填写一项收货名字");
      return false;
    }
    var shDizhi1 = jQuery("#field8564").val();
    var shDizhi2 = jQuery("#field8565").val();
    if (shDizhi1 == "" && shDizhi2 == "") {
      window.top.Dialog.alert("请至少填写一种收货地址");
      return false;
    }

    var gb_cn = parseInt(jQuery("#field11939").val()||0);
    // var sf_cn = parseInt(jQuery("#field11940").val()||0);
    // var sj_cn = parseInt(jQuery("#field11941").val()||0);
    var gb_en = parseInt(jQuery("#field11942").val()||0);
    // var sf_en = parseInt(jQuery("#field11943").val()||0);

    if (shDizhi1 != "" && gb_cn == 0) {
      window.top.Dialog.alert("请选择中文国别、省级（若有）、市级（若有）");
      return false;
    }
    if (shDizhi2 != "" && gb_en == 0) {
      window.top.Dialog.alert("请选择英文国别、省级（若有）、市级（若有）");
      return false;
    }
  }
  return true;
}

//设置field框为必填
function applyEssAttr_f(fieldVal) {
  var img  = "<img align=absMiddle src='/images/BacoError_wev8.gif' />";
  // jQuery("#exp_tr").show();
  jQuery("#field"+fieldVal).attr('viewtype','1');
  jQuery("#field"+fieldVal+"spanimg").html(img);
}

//取消field框必填
function cancelEssAttr_f(fieldVal) {
  // jQuery("#exp_tr").hide();
  jQuery("#field"+fieldVal).attr('viewtype','0');
  jQuery("#field"+fieldVal+"spanimg").html('');
}
