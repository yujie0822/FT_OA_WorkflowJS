jQuery(document).ready(function(){

});
//改写提交事件
function checkCustomize(){
  wjNum = parseInt(jQuery("#field10454").val());
  if (wjNum > 0) {
    alert("当前仍有未结快递单申请，填写完快递单号提交后才能申请新快递单。您可以保存此表单，填写完毕未结快递单申请后再次尝试提交。");
    return false;
  }else {
    return true;
  }
}
