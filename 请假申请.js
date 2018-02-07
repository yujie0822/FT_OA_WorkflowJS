//改写提交事件
function checkCustomize(){

  //明细行请假开始时间控制，必须大于关账日期
  //取出关账日期
  var gzDate = jQuery("#field13497").val();
  //本次申请年假天数
  var appliedAv = 0;
  //本次申请二季度后年假天数
  var appliedAv2 = 0;
  //当年已释放年假天数
  var thisYearReleasedAv = parseInt(jQuery("#field13505").val()||0);
  //上年结转可用年假天数
  var lastYearAvailabledAv = parseInt(jQuery("#field13506").val()||0);
  //当年已经申请年假天数
  var thisYearUsedAv = parseInt(jQuery("#field13507").val()||0);
  //循环明细表
  if(document.getElementById("indexnum0")){
      indexnum0 = document.getElementById("indexnum0").value * 1.0 - 1;
      for(var i=0;i<= indexnum0;i++){
        //取请假开始日期
        var startDate = jQuery("#field13107_"+i).val();
        var endDate = jQuery("#field13109_"+i).val();
        var startTime = jQuery("#field13108_"+i).val();
        var endTime = jQuery("#field13110_"+i).val();
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

        //跨月申请控制，每一行的开始日期与结束日期都必须在同一月份
        if (startDate.substring(0,7) != endDate.substring(0,7)) {
          alert("不同月份的请假申请请拆分成不同行申请");
          return false;
        }

        //如果请假类型为年假，计算年假日期
        if (qjType == -6) {
          appliedAv += qjDays;
          //如果日期在二季度，累加二季度天数
          if (startDate.substring(5,7)>='04') {
            appliedAv2 += qjDays;
          }
        }
      }
  }

  console.log("本年申请年假天数:"+appliedAv.toString());
  console.log("本年第二季度后申请年假天数:"+appliedAv2.toString());

  //年假申请控制，如果 当年已释放年假天数 + 上年结转可用年假天数 - 当年已经申请年假天数 - 本次申请年假天数 < 0 时，无法申请年假
  if ((thisYearReleasedAv + lastYearAvailabledAv - thisYearUsedAv - appliedAv < 0 )||(appliedAv2 > thisYearReleasedAv) ) {
    alert("您无法申请更多的年假");
    return false;
  }

  return true;
}


//手机端
dobeforecheck = function (){
  //明细行请假开始时间控制，必须大于关账日期
  //取出关账日期
  var gzDate = jQuery("#field13497").val();
  //本次申请年假天数
  var appliedAv = 0;
  //当年已释放年假天数
  var thisYearReleasedAv = parseInt(jQuery("#field13505").val()||0);
  //上年结转可用年假天数
  var lastYearAvailabledAv = parseInt(jQuery("#field13506").val()||0);
  //当年已经申请年假天数
  var thisYearUsedAv = parseInt(jQuery("#field13507").val()||0);
  //循环明细表
  var rowNum_DT1 = getDetailRownum_m(0);
  for (var i = 0; i < rowNum_DT1; i++) {
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
      appliedAv += qjDays;
    }
  }
  //年假申请控制，如果 当年已释放年假天数 + 上年结转可用年假天数 - 当年已经申请年假天数 - 本次申请年假天数 < 0 时，无法申请年假
  if (thisYearReleasedAv + lastYearAvailabledAv - thisYearUsedAv - appliedAv < 0 ) {
    alert("您无法申请更多的年假");
    return false;
  }

  return true;
}

function getDetailRownum_m(detailNum) {
  var result = jQuery("#nodenum"+detailNum).val();
  return parseInt(result);
}
