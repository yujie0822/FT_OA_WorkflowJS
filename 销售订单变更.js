jQuery(document).ready(function(){
  insertBSCSS();
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
        hlGlyField("11519_"+i,"11521_"+i,"field11521_"+i);
        hlGlyField("11520_"+i,"11522_"+i,"field11522_"+i);
      }
  }
});
function applyEssAttr_n(fieldVal) {
  var img  = "<img align=absMiddle src='/images/BacoError_wev8.gif' />";
  // jQuery("#exp_tr").show();
  jQuery("#field"+fieldVal).attr('viewtype','1');
  jQuery("#field"+fieldVal+"span").html(img);
}


//如果field2大于field1，增加红色向上箭头，如果小于，增加绿色向下箭头
function hlGlyField(field1,field2,fieldId) {
  var var1 = parseFloat(jQuery("#field"+field1.toString()).val()||0.0);
  var var2 = parseFloat(jQuery("#field"+field2.toString()).val()||0.0);
  if (var1 < var2) {
    var tempSpan = document.createElement("span");
    tempSpan.className = "label label-danger label-xs";
    tempSpan.style = "color:white!important";
    tempSpan.innerHTML = "↑";
    document.getElementById(fieldId).parentNode.appendChild(tempSpan);
  }else if (var1 > var2) {
    var tempSpan = document.createElement("span");
    tempSpan.className = "label label-success label-xs";
    tempSpan.style = "color:white!important";
    tempSpan.innerHTML = "↓";
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
  insertBSCSS();
  var mltag = parseInt(jQuery("#field11721").val()||0);
  if (mltag != 1) {
    jQuery("#mltr").addClass("detail_hide_col");
  }else {
    applyEssAttr_n(11720);
  }
  //循环明细表
  var rowNum_DT1 = getDetailRownum_m(0);
  for (var i = 0; i < rowNum_DT1; i++) {
    hlGlyField("11519_"+i,"11521_"+i,"field11521_"+i);
    hlGlyField("11520_"+i,"11522_"+i,"field11522_"+i);
  }
});
function applyEssAttr_n(fieldVal) {
  var img  = "<img align=absMiddle src='/images/BacoError_wev8.gif' />";
  // jQuery("#exp_tr").show();
  jQuery("#field"+fieldVal).attr('viewtype','1');
  jQuery("#field"+fieldVal+"span").html(img);
}


function hlGlyField(field1,field2,fieldId) {
  var var1 = parseFloat(jQuery("#field"+field1.toString()).val()||0.0);
  var var2 = parseFloat(jQuery("#field"+field2.toString()).val()||0.0);
  if (var1 < var2) {
    var tempSpan = document.createElement("span");
    tempSpan.className = "label label-danger label-xs";
    tempSpan.style = "color:white!important";
    tempSpan.innerHTML = "↑";
    document.getElementById(fieldId).parentNode.appendChild(tempSpan);
  }else if (var1 > var2) {
    var tempSpan = document.createElement("span");
    tempSpan.className = "label label-success label-xs";
    tempSpan.style = "color:white!important";
    tempSpan.innerHTML = "↓";
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
