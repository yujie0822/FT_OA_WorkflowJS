//改写读取事件
jQuery(document).ready(function(){
  insertBSCSS();
  //循环明细表
  if(document.getElementById("indexnum0")){
      indexnum0 = document.getElementById("indexnum0").value * 1.0 - 1;
      for(var i=0;i<= indexnum0;i++){
        hlMpq("6909_"+i,"12963_"+i,"field6909_"+i);
      }
  }
});

//field1:数量，field2:MPQ 数量不满足MPQ时lable提示
function hlMpq(field1,field2,fieldId) {
  var var1 = parseFloat(jQuery("#field"+field1.toString()).val()||0.0);
  var var2 = parseFloat(jQuery("#field"+field2.toString()).val()||0.0);
  if (var1%var2 != 0) {
    var tempSpan = document.createElement("span");
    tempSpan.className = "label label-danger label-xs";
    tempSpan.style = "color:white!important";
    tempSpan.innerHTML = "不满足MPQ";
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


//手机
jQuery(document).ready(function(){
  insertBSCSS();
  //循环明细表
  var rowNum_DT1 = getDetailRownum_m(0);
  for (var i = 0; i < rowNum_DT1; i++) {
    hlMpq("6909_"+i,"12963_"+i,"field6909_"+i);
  }
});

//field1:数量，field2:MPQ 数量不满足MPQ时lable提示
function hlMpq(field1,field2,fieldId) {
  var var1 = parseFloat(jQuery("#field"+field1.toString()).val()||0.0);
  var var2 = parseFloat(jQuery("#field"+field2.toString()).val()||0.0);
  if (var1%var2 != 0) {
    var tempSpan = document.createElement("span");
    tempSpan.className = "label label-danger label-xs";
    tempSpan.style = "color:white!important";
    tempSpan.innerHTML = "不满足MPQ";
    document.getElementById(fieldId).parentNode.appendChild(tempSpan);
  }
}
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
