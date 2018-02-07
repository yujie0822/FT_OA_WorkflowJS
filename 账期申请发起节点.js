<script type="text/javascript">

jQuery(document).ready(function(){
  //票后清空结账日付款日
  //ACT付款条件改变时
  jQuery("#field9584").bindPropertyChange(function () {
    var actFktj = parseInt(jQuery("#field9584").val()||-1);
    if (actFktj == 1) {
      jQuery("#field7229").val("");
      jQuery("#field7230").val("");
    }
  });

  //PAS付款条件该表时
  jQuery("#field9586").bindPropertyChange(function () {
    var pasFktj = parseInt(jQuery("#field9586").val()||-1);
    if (pasFktj == 1) {
      jQuery("#field7238").val("");
      jQuery("#field7239").val("");
    }
  });

  //申请额度为0时清空
  jQuery("#field7857").bindPropertyChange(function () {
    if (parseInt(jQuery("#field7857").val()) == 0 ){
      jQuery("#field7857").val("");
    }
  });

  jQuery("#field12376").bindPropertyChange(function () {
    hideCusDetail();
  });

  //如果成立年份为0，则改为空
  jQuery("#field11388").bindPropertyChange(function () {
    var clnf = parseInt(jQuery("#field11388").val()||-1);
    if (clnf == 0) {
      jQuery("#field11388").val("");
    }
  });

  //客户注册地为CN时，必填统一社会信用代码，香港时必填商业登记证号
  jQuery("#field12376").bindPropertyChange(function () {
    var c_area = jQuery("#field12376").val();
    if (c_area == 'CN') {
      applyEssAttr_n(7035);
    }else if (c_area == 'HK') {
      applyEssAttr_n(7037);
    }else {
      cancelEssAttr_n(7035);
      cancelEssAttr_n(7037);
    }
  });

});

function checkCustomize(){

  createTitle(14026);
  //月结判断结账日
  var actFktj = parseInt(jQuery("#field9584").val()||-1);
  var pasFktj = parseInt(jQuery("#field9586").val()||-1);
  var actZqts = parseInt(jQuery("#field7227").val()||-1);
  var pasZqts = parseInt(jQuery("#field7236").val()||-1);
  if (actFktj == 0) {
    var jzr = parseInt(jQuery("#field7229").val()||-1);
    var fkr = parseInt(jQuery("#field7230").val()||-1);
    if (jzr <= 0 || jzr > 31) {
      alert("Active月结结账日无效");
      return false;
    }
    if (fkr <= 0 || fkr > 31) {
      alert("Active月结付款日无效");
      return false;
    }
    if (actZqts <= 0) {
      alert("Active账期天数无效");
      return false;
    }
  }else if (actFktj == 1) {
    if (actZqts <= 0) {
      alert("Active账期天数无效");
      return false;
    }
  }
  if (pasFktj == 0) {
    var jzr = parseInt(jQuery("#field7238").val()||-1);
    var fkr = parseInt(jQuery("#field7239").val()||-1);
    if (jzr <= 0 || jzr > 31) {
      alert("Passive月结结账日无效");
      return false;
    }
    if (fkr <= 0 || fkr > 31) {
      alert("Passive月结付款日无效");
      return false;
    }
    if (pasZqts <= 0) {
      alert("Passive账期天数无效");
      return false;
    }
  }else if (pasFktj == 1) {
    if (pasZqts <= 0) {
      alert("Passive账期天数无效");
      return false;
    }
  }

  return true;
}

//设置field框为必填
function applyEssAttr_f(fieldVal) {
  var img  = "<img align=absMiddle src='/images/BacoError_wev8.gif' />";
  jQuery("#exp_tr").show();
  jQuery("#field"+fieldVal).attr('viewtype','1');
  jQuery("#field"+fieldVal+"spanimg").html(img);
}

//取消field框必填
function cancelEssAttr_f(fieldVal) {
  jQuery("#exp_tr").hide();
  jQuery("#field"+fieldVal).attr('viewtype','0');
  jQuery("#field"+fieldVal+"spanimg").html('');

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

function myLog(para) {
  console.log("Val:"+para+"Type:"+typeof(para));
}

function createTitle(fieldname) {
  var titleString = jQuery("#field"+fieldname).val();
  if (titleString.length > 0) {
    jQuery("#requestname").val(titleString);
  }
}


</script>
