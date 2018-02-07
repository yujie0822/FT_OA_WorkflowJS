function checkCustomize(){
  var amount = 0;
  var onepacking = 0;
  var jh_date = "";
  var so_date = "";
  var detail = wfDetail.doGet(0); // 得到第 1 个明细的数据
  var datas = detail.datas; // 获取明细数据
  for (var i=0;i<datas.length;i++){
    //控制1: 备货数量必须满足一层包装数量
    //备货数量
    amount = parseInt(datas[i].wdfield13655);
    //一层包装数量
    onepacking = parseInt(datas[i].wdfield13658);
    if (amount%onepacking != 0) {
      window.top.Dialog.alert("第"+(i+1).toString()+"行备货数量必须满足一层包装");
      return false;
    }
    //控制2: 要求交货日必须大于预计订单日期
    jh_date = datas[i].wdfield13660;
    so_date = datas[i].wdfield13661;

    if (jh_date < so_date) {
      window.top.Dialog.alert("第"+(i+1).toString()+"行要求交货日必须晚于预计订单日期");
      return false;
    }
  }
  return true;
}
