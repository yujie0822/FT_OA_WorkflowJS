
//改写读取事件
jQuery(document).ready(function(){

});

jQuery("#field7236").bindPropertyChange(function () {

});


//改写提交事件
function checkCustomize(){

}

//循环明细表
if(document.getElementById("indexnum0")){
    indexnum0 = document.getElementById("indexnum0").value * 1.0 - 1;
    for(var i=0;i<= indexnum0;i++){

    }
}

//日期相关

//取当前日期
function getTodayDate() {
  var d=new Date();
  var day=d.getDate();
  var month=d.getMonth() + 1;
  var year=d.getFullYear().toString();
  var result;
  if (month<10) {
    month = "0"+month.toString();
  }else {
    month = month.toString();
  }
  if (day<10) {
    day = "0"+day.toString();
  }else {
    day = day.toString();
  }
  result =year+"-"+month+"-"+day;
  return result;
}


function checkDateGreaterThanToday(dateString) {
  if (dateString.length!=10) {
    console.log("DateError:"+dateString);
    return false;
  }
  var t_Date = new Date();
  var t_Day = t_Date.getDate();
  var t_Month = t_Date.getMonth()+1;
  var t_Year = t_Date.getFullYear();
  var c_Day = parseInt(dateString.substring(8,10));
  var c_Month = parseInt(dateString.substring(5,7));
  var c_Year = parseInt(dateString.substring(0,4));
  if (c_Year<t_Year) {
    return false;
  }else if (c_Month<t_Month) {
    return false;
  }else if (c_Day<t_Day) {
    return false;
  }else {
    return true;
  }
}

function trim(str){
  return str.replace(/(^\s*)|(\s*$)/g,"");
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

//设置非field框为必填
function applyEssAttr_n(fieldVal) {
  var img  = "<img align=absMiddle src='/images/BacoError_wev8.gif' />";
  // jQuery("#exp_tr").show();
  jQuery("#field"+fieldVal).attr('viewtype','1');
  jQuery("#field"+fieldVal+"spanimg").html(img);
}

//取消非field框必填
function cancelEssAttr_n(fieldVal) {
  // jQuery("#exp_tr").hide();
  jQuery("#field"+fieldVal).attr('viewtype','0');
  jQuery("#field"+fieldVal+"spanimg").html('');
}


//取明细表中某列的唯一值，返回string
function getColValFromIndex(indexNum,fieldNum) {
  var resultArr = new Array();
  if(document.getElementById("indexnum"+indexNum.toString())){
      indexnum1 = document.getElementById("indexnum"+indexNum.toString()).value * 1.0 - 1;
      for(var i=0;i<= indexnum1;i++){
        var temp = jQuery("#field"+fieldNum.toString()+"_"+i.toString()).val();
        if (!findEleInArray(resultArr,temp)) {
          resultArr.push(temp);
        }
      }
  }
  return resultArr.toString();
}

//在数组中查找相应的值，返回布尔值
function findEleInArray(arr,val) {
  if(arr.length==0){
    return false;
  }else {
    for (x in arr){
      if (val == arr[x]) {
        return true;
      }
    }
    return false;
  }
}

//比较field1与field2的值，若不同，在fieldId同级dom下新增label-danger,值为labelVal
function hlLabelField(field1,field2,fieldId,labelVal) {
  var labelVal = arguments[3]?arguments[3]:"New"
  var var1 = jQuery("#field"+field1.toString()).val();
  var var2 = jQuery("#field"+field2.toString()).val();
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


//手机端明细行相关

function getDetailRownum_m(detailNum) {
  var result = jQuery("#nodenum"+detailNum).val();
  return parseInt(result);
}

function getDetailFieldValue_m(detailNum,fieldNum,rowNum){
  if (document.getElementById("fieldfield"+fieldNum+"_"+rowNum+"_span")) {
    var result = document.getElementById("fieldfield"+fieldNum+"_"+rowNum+"_span").innerHTML;
  }else {
    var result = "";
  }
  return result;
}

function getDetailValue_m(detailNum,fieldNum,rowNum){
  if (document.getElementById("isshow"+detailNum+"_"+rowNum+"_"+fieldNum)) {
    var result = document.getElementById("isshow"+detailNum+"_"+rowNum+"_"+fieldNum).innerHTML;
  }else {
    var result = "";
  }
  return result;
}
