<script type="text/javascript">

jQuery(document).ready(function(){
  //取旧账期天数
  var actOldZq = jQuery("#field7223").val();
  var pasOldZq = jQuery("#field7232").val();
  //ACT申请账期天数变化时
  jQuery("#field7227").bindPropertyChange(function () {
    //输入为空默认赋值为0
    if (jQuery("#field7227").val() == "") {
      var actNewZq = 0;
    }else {
      var actNewZq = parseInt(jQuery("#field7227").val());
    }
    var actNewSeg = jQuery("#field7228").val();
    if (actNewZq!=actOldZq) {
      if (actNewSeg == "") {
        applyEssAttr_f(7228);
      }
    }else {
      if (actNewSeg == "") {
        cancelEssAttr_f(7228);
      }
    }
    if (actNewZq != 0) {
      applyEssAttr_n(9584);
    }else {
      cancelEssAttr_n(9584);
    }
  });
  //PAS申请账期天数变化时
  jQuery("#field7236").bindPropertyChange(function () {
    if (jQuery("#field7236").val() == "") {
      var pasNewZq = 0;
    }else {
      var pasNewZq = parseInt(jQuery("#field7236").val());
    }
    var pasNewSeg = jQuery("#field7237").val();
    if (pasNewZq!=pasOldZq) {
      if (pasNewSeg == "") {
        //Segment与付款条件必填
        applyEssAttr_f(7237);
      }
    }else {
      if (pasNewSeg == "") {
        //取消Segment与付款条件必填
        cancelEssAttr_f(7237);
      }
    }
    if (pasNewZq != 0) {
      applyEssAttr_n(9586);
    }else {
      cancelEssAttr_n(9586);
    }
  });

  //申请额度为0时清空
  jQuery("#field7857").bindPropertyChange(function () {
    if (parseInt(jQuery("#field7857").val()) == 0 ){
      jQuery("#field7857").val("");
    }
  });
});

function checkCustomize(){
  //付款条件
  var actFktj = parseInt(jQuery("#field9584").val());
  var pasFktj = parseInt(jQuery("#field9586").val());

  if (actFktj == 0) {
    var actJzr = parseInt(cus_getFieldValue("field7229"));
    var actFkr = parseInt(cus_getFieldValue("field7230"));
    if ( actJzr <= 0 || actJzr > 31 ) {
      window.top.Dialog.alert("申请结账日无效");
      return false;
    }
    if (actFkr <= 0 || actFkr > 31) {
      window.top.Dialog.alert("申请付款日无效");
      return false;
    }
  }

  if (pasFktj == 0) {
    var pasJzr = parseInt(cus_getFieldValue("field7238"));
    var pasFkr = parseInt(cus_getFieldValue("field7239"));
    if ( pasJzr <= 0 || pasJzr > 31 ) {
      window.top.Dialog.alert("申请结账日无效");
      return false;
    }
    if (pasFkr <= 0 || pasFkr > 31) {
      window.top.Dialog.alert("申请付款日无效");
      return false;
    }
  }

  //取旧账期天数
  var actOldZq = parseInt(jQuery("#field7223").val());
  var pasOldZq = parseInt(jQuery("#field7232").val());
  //取ACT申请账期天数与Segment
  if (jQuery("#field7227").val() == "") {
    var actNewZq = 0;
  }else {
    var actNewZq = parseInt(jQuery("#field7227").val());
  }
  var actNewSeg = jQuery("#field7228").val();
  //取PAS申请账期天数与Segment
  if (jQuery("#field7236").val() == "") {
    var pasNewZq = 0;
  }else {
    var pasNewZq = parseInt(jQuery("#field7236").val());
  }
  var pasNewSeg = jQuery("#field7237").val();

  //取信用额度
  var oldEd = parseInt(jQuery("#field7856").val());
  var newEd = parseInt(jQuery("#field7857").val());

  if ((actNewZq != 0)&&(isNaN(actFktj))) {
    window.top.Dialog.alert("请填写Active付款条件");
    return false;
  }
  if ((pasNewZq != 0)&&(isNaN(pasFktj))) {
    window.top.Dialog.alert("请填写Passive付款条件");
    return false;
  }
  //当Segment为空时不允许提交
  var submitFlag = true;
  if ( ((actNewZq != actOldZq)&&(actNewSeg == "")) || ((pasNewZq != pasOldZq)&&(pasNewSeg == "")) ) {
    submitFlag = false;
  }

  if ((oldEd != newEd)&&(actNewSeg == "")&&(pasNewSeg == "")) {
    submitFlag =false;
  }

  if (!submitFlag) {
    window.top.Dialog.alert("请填写申请Segment");
    return false;
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


</script>
