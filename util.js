
//改写读取事件
jQuery(document).ready(function(){

});

jQuery("#field7236").bindPropertyChange(function () {

});


//改写提交事件
function checkCustomize(){

}

jQuery(document).ready(function(){
  jQuery(".module capital").attr("url","http://www.baidu.com/");
});


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
