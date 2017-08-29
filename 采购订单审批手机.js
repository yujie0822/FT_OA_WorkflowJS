jQuery(document).ready(function(){

  //隐藏订单特殊信息
  var qcaArr = new Array(6000336,6004281);
  var aacArr = new Array(6004307,6004295,6004288,6000560,6004315,6004301,6004310);
  var ktstArr = new Array(6000492,6004321);
  var avxArr = new Array(6000534);
  var v_code = parseInt(jQuery("#field8004").val());
  if (jQuery.inArray(v_code,qcaArr) != -1) {
    showDetailCol(1,5);
    showDetailCol(1,6);
    showDetailCol(1,7);
    showDetailCol(1,8);
    showDetailCol(1,9);
  }else if (jQuery.inArray(v_code,aacArr) != -1) {
    showDetailCol(1,10);
    showDetailCol(1,11);
  }else if (jQuery.inArray(v_code,ktstArr) != -1) {
    showDetailCol(1,12);
  }else if (jQuery.inArray(v_code,ktstArr) != -1) {
    showDetailCol(1,13);
  }else {
    jQuery(".specialInfo").addClass("detail_hide_col");
  }

});

/*  显示明细表的某列
    showDetailCol(detailTableNum,colNum)
    detailTableNum：明细表号（第一张表为0，第二张表为1）
    colNum：明细表列号（第一列为0，第二列为1）
*/
function showDetailCol(detailTableNum,colNum) {
  for (var i = 0; i < 5; i++) {
    if (jQuery(".detail"+detailTableNum.toString()+"_"+i.toString()+"_"+colNum.toString()).length>0) {
      jQuery(".detail"+detailTableNum.toString()+"_"+i.toString()+"_"+colNum.toString()).removeClass("detail_hide_col");
    }
  }
}
