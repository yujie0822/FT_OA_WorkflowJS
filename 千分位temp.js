//改写读取事件
jQuery(document).ready(function(){
  changeSpanNumberWithCommas_M(15866);
  changeSpanNumberWithCommas_M(15868);
  changeSpanNumberWithCommas_M(15621);
  changeDetailSpanNumberWithCommas_M(15787,2);
  changeDetailSpanNumberWithCommas_M(15789,2);
  changeDetailSpanNumberWithCommas_M(15790,2);
});

function getDetailRownum_m(detailNum) {
  var result = jQuery("#nodenum"+detailNum).val();
  return parseInt(result);
}

function changeSpanNumberWithCommas_M(fieldNum) {
  var fieldVal = parseFloat(jQuery("#field"+fieldNum).val()||0);
  var fieldStr = fieldVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (document.getElementById("field"+fieldNum+"_span")) {
    jQuery("#field"+fieldNum+"_span").text(fieldStr);
  }
  if (document.getElementById("field"+fieldNum+"span")) {
    jQuery("#field"+fieldNum+"span").text(fieldStr);
  }
  if (document.getElementById("field"+fieldNum+"span_format")) {
    document.getElementById("field"+fieldNum+"span_format").innerHTML = fieldStr;
  }
}

function changeDetailSpanNumberWithCommas_M(fieldNum,DetailTableNum){
  var indexNum = (DetailTableNum-1).toString();
  var fieldVal = 0;
  var fieldStr = "";

  var rowNum_DT1 = getDetailRownum_m(DetailTableNum-1);
  for (var i = 0; i < rowNum_DT1; i++) {
    if (document.getElementById("isshow"+indexNum+"_"+i+"_"+fieldNum)) {
      fieldVal = parseFloat(jQuery("#field"+fieldNum+"_"+i).val()||0);
      fieldStr = fieldVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      document.getElementById("isshow"+indexNum+"_"+i+"_"+fieldNum).innerHTML = fieldStr;
    }
  }
}
