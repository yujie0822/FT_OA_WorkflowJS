function checkCustomize(){
  var canSubmit = true;
  var x = 0;
  var reason = 0;
  var detail = wfDetail.doGet(1); // 得到第 1 个明细的数据
  var datas = detail.datas; // 获取明细数据
  for (var i=0;i<datas.length;i++){
    if ((datas[i].wdfield7407 != "") && (parseInt(datas[i].wdfield7551) > 0) ) {
      if (!checkDateGreaterThanToday(datas[i].wdfield7406)) {
        canSubmit = false;
        x=i;
        reason = 2;
        break;
      }
    }
  }
  if (!canSubmit) {
    if (reason == 2) {
      window.top.Dialog.alert("第"+(x+1).toString()+"行行预计回款日期不能小于今日日期,请重新填写承诺回款日期。");
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
