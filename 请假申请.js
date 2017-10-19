//改写提交事件
function checkCustomize(){

  //明细行请假开始时间控制，必须大于关账日期
  //取出关账日期
  var gzDate = jQuery("#field13497").val();
  //单次申请年假日期
  var njDays = 0;
  //循环明细表
  if(document.getElementById("indexnum0")){
      indexnum0 = document.getElementById("indexnum0").value * 1.0 - 1;
      for(var i=0;i<= indexnum0;i++){
        //取请假开始日期
        var startDate = jQuery("#field13107_"+i).val();
        var endDate = jQuery("#field13109_"+i).val();
        var qjType = parseInt(jQuery("#field13106_"+i).val()||0);
        var qjDays = parseInt(jQuery("#field13111_"+i).val()||0);
        //如果请假开始日期小于关账日期，不允许提交并触发alert
        if (startDate < gzDate) {
          alert("请假日期已过考勤关账日期");
          return false;
        }
        //如果请假开始日期不能大于结束日期
        if (startDate > endDate) {
          alert("请假开始日期不能大于请假结束日期");
          return false;
        }
        //如果请假类型为年假，计算年假日期
        if (qjType == -6) {
          njDays += qjDays;
        }

      }

  }

  console.log('年假总天数：'+njDays.toString());
  return false;
}


//手机端
dobeforecheck = function (){
  //明细行请假开始时间控制，必须大于关账日期
  //取出关账日期
  var gzDate = jQuery("#field13497").val();
  //循环明细表
  var rowNum_DT1 = getDetailRownum_m(0);
  for (var i = 0; i < rowNum_DT1; i++) {
    //取请假开始日期
    var startDate = jQuery("#field13107_"+i).val();
    var endDate = jQuery("#field13109_"+i).val();
    //如果请假开始日期小于关账日期，不允许提交并触发alert
    if (startDate < gzDate) {
      alert("请假日期已过考勤关账日期");
      return false;
    }
    //如果请假开始日期不能大于结束日期
    if (startDate > endDate) {
      alert("请假开始日期不能大于请假结束日期");
      return false;
    }
  }

  return true;
}

function getDetailRownum_m(detailNum) {
  var result = jQuery("#nodenum"+detailNum).val();
  return parseInt(result);
}
