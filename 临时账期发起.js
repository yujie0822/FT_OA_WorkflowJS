//改写提交事件
function checkCustomize(){
  var actFktj = parseInt(jQuery("#field9584").val()||-1);
  var pasFktj = parseInt(jQuery("#field7236").val()||-1);

  if (actFktj == -1 and pasFktj == -1) {
    alert("请至少申请1个Segment的账期");
    return false;
  }
  return true;
}
