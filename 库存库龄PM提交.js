function checkCustomize(){
  var detail1 = wfDetail.doGet(0); // 得到第 1 个明细的数据
  var datas1 = detail1.datas; // 获取明细数据

  var detail2 = wfDetail.doGet(1); // 得到第 2 个明细的数据
  var datas2 = detail2.datas; // 获取明细数据

  //PM提交控制，明细表1中如果料号标记不为空，且PLM补充为空，则不允许提交
  for (var i = 0; i < datas1.length; i++){
    if ( (datas1[i].wdfield15106 == "") && (datas1[i].wdfield15101 != "") ) {
      alert("Slow Moving明细表中第"+(i+1).toString()+"行PLM补充未填写");
      return false;
    }
  }

  for (var i = 0; i < datas2.length; i++) {
    if ((datas2[i].wdfield15128 == "") && (datas2[i].wdfield15123 != "")) {
      alert("Dead Stock明细表中第"+(i+1).toString()+"行PLM补充未填写");
      return false;
    }
  }

  return true;
}
