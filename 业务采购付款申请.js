//改写读取事件
jQuery(document).ready(function(){
  hideTqdh();
  jQuery("#field15907").bindPropertyChange(function () {
    hideTqdh();
  });
});

function hideTqdh() {
  //如果勾选了供应商提前到货，显示提前到货天数
  var v_tqdh = parseInt(jQuery("#field15907").val()||-1);
  if (v_tqdh == 3) {
    jQuery(".tqdh").removeClass("edesign_hide");
  }else {
    jQuery(".tqdh").addClass("edesign_hide");
  }
}
