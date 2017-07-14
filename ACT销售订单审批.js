jQuery(document).ready(function(){
	var num = parseInt(jQuery("#field6402").val());
  //如果补充协议为X或Y，是否订单原件/补充协议属性设定为是
	if (num == 1 || num == 2){
		jQuery("#field6201").val(1);
	}else {
		jQuery("#field6201").val(0);
	}

  var soType = parseInt(jQuery("#field7828").val());
  if (soType == 1) {
    jQuery("#field6201").val(1);
    document.getElementById("field6201").parentNode.parentNode.parentNode.style.display = "none";
  }
});









  /*
  预测审批路径
  (*^__^*)
  author:Jimmy Yu
  function:output a route string to a text field



  //字符串
  var csNode = new String("CS");
  var cszgNode = new String("-->CS主管");
  var fwNode = new String("(抄送法务)");
  var plmNode = new String("-->产品线经理");
  var pldNode = new String("-->产品线总监");
  var qyManagerNode = new String("-->区域销售经理");
  var qyDirectorNode = new String("-->区域销售总监");
  var qyVpNode = new String("-->区域副总(Segment负责人)");
  var cwManagerNode = new String("-->财务经理");
  var cwDirectorNode = new String("-->财务总监");
  var dszNode = new String("-->董事长");
  var end = new String("-->结束");

  //判断条件

  //订单金额(CNY)
  var cnyAmount = jQuery("#field6327").val();
  //补货金额
  var bhAmount = jQuery("#field6205").val();
  //NCNR超额度
  var ncnrAmount = jQuery("#field6292").val();
  //订单NCNR条款
  var isSoNcn = jQuery("#field6203").val();
  //Relabel
  var isRelabel = jQuery("#field6295").val();
  //应收逾期
  var maxArDay = jQuery("#field6328").val();
  //逾期库存
  var maxStockDay = jQuery("#field6329").val();
  //2年内是否有交易
  var oldCus = jQuery("#field6393").val();
  //是否全是备货转订单
  var isSxToSo = jQuery("#field7829").val();

  var plmCon = false;
  var pldCon = false;
  var qyVpCon = false;
  var cwManagerCon = false;
  var cwDirectorCon = false;
  var dszCon = false;
  var fwCon = false;

  //判断规则
  if (cnyAmount>=1000000) {
    dszCon = true;
  }
  if (bhAmount>0) {
    plmCon = true;
    cwManagerCon = true;
    cwDirectorCon = true;
  }
  if (bhAmount>=2000) {
    dszCon = true;
  }
  if(isRelabel == 1){
    plmCon = true;
  }
  if ((ncnrAmount==1)&&(isSoNcn==0)) {
    dszCon = true;
  }
  if (maxArDay>=60) {
    dszCon = true;
  }
  if (maxStockDay>=60) {
    dszCon = true;
  }
  if (oldCus == 0){
    fwCon = true;
  }

  var result = csNode+cszgNode;
  if (fwCon) {
    result+=fwNode;
  }
  if (plmCon) {
    result+=plmNode;
  }
  result+=(qyManagerNode+qyVpNode);
  if (cwManagerCon) {
    result+=cwManagerNode;
  }
  if (cwDirectorCon) {
    result+=cwDirectorNode;
  }
  if (dszCon) {
    result+=dszNode;
  }
  result+=end;

  if (isSxToSo ==1) {
    result = "销售备货单转订单，只需审批至CS主管";
  }

  cus_setInputFieldValue("field7461",result);
*/
