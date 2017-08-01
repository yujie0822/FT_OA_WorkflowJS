//改写提交事件
function checkCustomize(){
  var xyzt = parseInt(jQuery("#field10589").val());
  if (xyzt>540) {
    alert("已发货单据无法申请临时账期");
    return false;
  }else {
    return true;
  }
}
