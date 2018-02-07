<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type="text/javascript">
jQuery(document).ready(function(){

  //隐藏订单特殊信息
  var qcaArr = new Array(6000336,6004281);
  var aacArr = new Array(6004307,6004295,6004288,6000560,6004315,6004301,6004310);
  var ktstArr = new Array(6000492,6004321);
  var avxArr = new Array(6000534);
  var v_code = parseInt(jQuery("#field12320").val());
  if (jQuery.inArray(v_code,qcaArr) != -1) {
    showDetailCol(1,5);
    showDetailCol(7,5);
    showDetailCol(1,6);
    showDetailCol(7,6);
    showDetailCol(1,7);
    showDetailCol(7,7);
    showDetailCol(1,8);
    showDetailCol(7,8);
    showDetailCol(1,9);
    showDetailCol(7,9);
  }else if (jQuery.inArray(v_code,aacArr) != -1) {
    showDetailCol(1,10);
    showDetailCol(7,10);
    showDetailCol(1,11);
    showDetailCol(7,11);
  }else if (jQuery.inArray(v_code,ktstArr) != -1) {
    showDetailCol(1,12);
    showDetailCol(7,12);
  }else if (jQuery.inArray(v_code,ktstArr) != -1) {
    showDetailCol(1,13);
    showDetailCol(7,13);
  }else {
    hideTab(2);
    hideTab(8);
  }

  var hqCode = parseInt(jQuery("#field12347").val()||-1);
  if (hqCode == 2) {
    alert("采购订单回签代码为P");
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

/*
    隐藏tab页
    hideTab(tabNum)
    tabNum:tab号：(第一张tab为1，第二张tab为2)
*/
function hideTab(tabNum) {
  jQuery("#tab_"+tabNum.toString()).addClass("detail_hide_col");
}

</script>
