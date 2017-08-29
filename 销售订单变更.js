jQuery(document).ready(function(){
  var mltag = parseInt(jQuery("#field11721").val()||0);
  if (mltag != 1) {
    jQuery("#field11720").parents("tr").first().addClass("detail_hide_col");
  }/*else {
    applyEssAttr_n(11720);
  }*/
  //循环明细表
  if(document.getElementById("indexnum0")){
      indexnum0 = document.getElementById("indexnum0").value * 1.0 - 1;
      for(var i=0;i<= indexnum0;i++){
        hlLabelField("11519_"+i,"11521_"+i,"field11521_"+i,"New",false);
        hlLabelField("11520_"+i,"11522_"+i,"field11522_"+i,"New",false);
      }
  }
});
function applyEssAttr_n(fieldVal) {
  var img  = "<img align=absMiddle src='/images/BacoError_wev8.gif' />";
  // jQuery("#exp_tr").show();
  jQuery("#field"+fieldVal).attr('viewtype','1');
  jQuery("#field"+fieldVal+"span").html(img);
}
insertBSCSS();
//比较field1与field2的值，若不同，在fieldId同级dom下新增label-danger,值为labelVal
function hlLabelField(field1,field2,fieldId,labelVal,changeTag) {
  var labelVal = arguments[3]?arguments[3]:"New";
  var cgTag = arguments[4]?arguments[4]:false;
  var var1 = jQuery("#field"+field1.toString()).val();
  var var2 = jQuery("#field"+field2.toString()).val();
  if (cgTag) {
    if (var1 == ""){
      var1 = "0";
    }
    if (var2 == "") {
      var2 = "0";
    }
  }
  if (var1 != var2) {
    var tempSpan = document.createElement("span");
    tempSpan.className = "label label-danger label-xs";
    tempSpan.style = "color:white!important";
    tempSpan.innerHTML = labelVal;
    document.getElementById(fieldId).parentNode.appendChild(tempSpan);
  }
}

//插入CSS文件
function insertBSCSS(){
  var head = document.getElementsByTagName('head')[0],
    cssURL = '/cus_web/css/bootstrap.min.css',
    linkTag = document.createElement('link');
    linkTag.id = 'dynamic-style';
 linkTag.href = cssURL;
 linkTag.setAttribute('rel','stylesheet');
 linkTag.setAttribute('media','all');
 linkTag.setAttribute('type','text/css');
 head.appendChild(linkTag);
}


//手机端

jQuery(document).ready(function(){
  var mltag = parseInt(jQuery("#field11721").val()||0);
  if (mltag != 1) {
    jQuery("#mltr").addClass("detail_hide_col");
  }else {
    applyEssAttr_n(11720);
  }
  //循环明细表
  var rowNum_DT1 = getDetailRownum_m(0);
  for (var i = 0; i < rowNum_DT1; i++) {
    hlLabelField("11519_"+i,"11521_"+i,"field11521_"+i,"New",false);
    hlLabelField("11520_"+i,"11522_"+i,"field11522_"+i,"New",false);
  }
});
function applyEssAttr_n(fieldVal) {
  var img  = "<img align=absMiddle src='/images/BacoError_wev8.gif' />";
  // jQuery("#exp_tr").show();
  jQuery("#field"+fieldVal).attr('viewtype','1');
  jQuery("#field"+fieldVal+"span").html(img);
}
insertBSCSS();
//比较field1与field2的值，若不同，在fieldId同级dom下新增label-danger,值为labelVal
function hlLabelField(field1,field2,fieldId,labelVal,changeTag) {
  var labelVal = arguments[3]?arguments[3]:"New";
  var cgTag = arguments[4]?arguments[4]:false;
  var var1 = jQuery("#field"+field1.toString()).val();
  var var2 = jQuery("#field"+field2.toString()).val();
  if (cgTag) {
    if (var1 == ""){
      var1 = "0";
    }
    if (var2 == "") {
      var2 = "0";
    }
  }
  if (var1 != var2) {
    var tempSpan = document.createElement("span");
    tempSpan.className = "label label-danger label-xs";
    tempSpan.style = "color:white!important";
    tempSpan.innerHTML = labelVal;
    document.getElementById(fieldId).parentNode.appendChild(tempSpan);
  }
}

//插入CSS文件
function insertBSCSS(){
  var head = document.getElementsByTagName('head')[0],
    cssURL = '/cus_web/css/bootstrap.min.css',
    linkTag = document.createElement('link');
    linkTag.id = 'dynamic-style';
 linkTag.href = cssURL;
 linkTag.setAttribute('rel','stylesheet');
 linkTag.setAttribute('media','all');
 linkTag.setAttribute('type','text/css');
 head.appendChild(linkTag);
}

function getDetailRownum_m(detailNum) {
  var result = jQuery("#nodenum"+detailNum).val();
  return parseInt(result);
}
