function checkCustomize(){
  var canSubmit = true;
  var x = 0;
  var reason = 0;
  var detail = wfDetail.doGet(0); // 得到第 1 个明细的数据
  var datas = detail.datas; // 获取明细数据
  for (var i=0;i<datas.length;i++){
    if (parseInt(datas[i].wdfield7949)>0) {
      if (!checkDateGreaterThanToday(datas[i].wdfield7950)) {
        canSubmit = false;
        x=i;
        reason = 2;
        break;
      }
      if (datas[i].wdfield7951 != "") {
        if (datas[i].wdfield7953 == "") {
          canSubmit = false;
          x = i;
          reason = 1;
          break;
        }
      }
    }

  }
  if (!canSubmit) {
    if (reason == 1) {
      window.top.Dialog.alert("请填写第"+(x+1).toString()+"行逾期客户的逾期原因");
      return false;
    }else if (reason == 2) {
      window.top.Dialog.alert("第"+(x+1).toString()+"行行预计回款日期不能小于今日日期");
      return false;
    }
  }
  return true;
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
  }else if (c_Year>t_Year) {
    return true;
  }else if (c_Month<t_Month) {
    return false;
  }else if (c_Month>t_Month) {
    return true;
  }else if (c_Day<t_Day) {
    return false;
  }else {
    return true;
  }
}



//手机


//逾期天数7951
//承诺回款日期7950
//逾期原因7953
//原因9375


function checkCustomize(){
  var rowNum_Dt0 = getDetailRownum_m(0);
  // console.log("row0:"+rowNum_Dt0);
  // console.log("---StartLoop1---");
  for (var i = 0; i < rowNum_Dt0; i++) {
    // console.log("Loop:"+i);
    var hqDate = trim(getDetailValue_m(0,7950,i));
    // console.log("hqDate:"+hqDate);
    if (hqDate == "") {
      alert("请输入第"+(i+1)+"行预计回款日期");
      return false;
    }else if (!checkDateGreaterThanToday(hqDate)) {
      alert("第"+(i+1)+"行预计回款日期不能小于今日日期");
      return false;
    }
    var yqts = trim(getDetailValue_m(0,7951,i));
    var yqyy = trim(getDetailFieldValue_m(0,7953,i));
    if ((yqts != "") && (yqyy == "")){
      alert("请输入第"+(i+1)+"行逾期应收原因");
      return false;
    }
  }
  // console.log("End Loop1");
  var rowNum_DT1 = getDetailRownum_m(1);
  // console.log("row1:"+rowNum_DT1);
  // console.log("StartLoop2");
  for (var i = 0; i < rowNum_DT1; i++) {
    var yy = trim(getDetailValue_m(1,9375,i));
    // console.log("原因:"+yy);
    if (yy == "") {
      alert("请输入第"+(i+1)+"行逾期库存原因");
      return false;
    }
  }
  return true;
}

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
  }else if (c_Year>t_Year) {
    return true;
  }else if (c_Month<t_Month) {
    return false;
  }else if (c_Month>t_Month) {
    return true;
  }else if (c_Day<t_Day) {
    return false;
  }else {
    return true;
  }
}


function trim(str){
  return str.replace(/(^\s*)|(\s*$)/g,"");
}
