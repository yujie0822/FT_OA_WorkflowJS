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
    hideTab(2);
  }

  //预测路径代码
  insertBSCSS();
  var btnArea = document.getElementById("btnArea");
  btnArea.innerHTML = "<input type='button' class = 'btn btn-default btn-xs' value='预测审批路径' id='updateBtn' onclick = 'ycRoute()' />";
});

function checkCustomize(){
  var plineTh = parseInt(jQuery("#field8576").val());
   if (plineTh == 0) {
     window.top.Dialog.alert("产品线无审批阈值，请联系IT");
     return false;
   }
   return true;

}

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

//取明细表中某列的唯一值，返回string
function getColValFromIndex(indexNum,fieldNum) {
  var resultArr = new Array();
  if(document.getElementById("indexnum"+indexNum.toString())){
      indexnum1 = document.getElementById("indexnum"+indexNum.toString()).value * 1.0 - 1;
      for(var i=0;i<= indexnum1;i++){
        var temp = jQuery("#field"+fieldNum.toString()+"_"+i.toString()).val();
        if (!findEleInArray(resultArr,temp)) {
          resultArr.push(temp);
        }
      }
  }
  return resultArr.toString();
}

//在数组中查找相应的值，返回布尔值
function findEleInArray(arr,val) {
  if(arr.length==0){
    return false;
  }else {
    for (x in arr){
      if (val == arr[x]) {
        return true;
      }
    }
    return false;
  }
}


function ycRoute() {
  var plmName = getColValFromIndex(0,8422);
  var pldName = getColValFromIndex(0,8423);
  var segMng = getColValFromIndex(0,8424);

  var vType = jQuery("#field8005").val();
  var group = jQuery("#field8227").val();
  var pline = jQuery("#field8260").val();
  var safeTag = parseInt(jQuery("#field8230").val());

  var routeArr ="物控提交-->"+plmName;
  var usdAmount = parseFloat(jQuery("#field8219").val());
  var th_2 = parseFloat(jQuery("#field8220").val());
  var th_3 = parseFloat(jQuery("#field8221").val());
  var th_4 = parseFloat(jQuery("#field8222").val());

  if ((group == "PAS") && (pldName!="") && ((usdAmount>=th_2) || ((safeTag==1) && (pline != "SKW")))) {
    routeArr += ("-->"+pldName);
  }
  if ((usdAmount>=th_3) || ((group == "ACT") && (safeTag == 1)) || ((group == "PAS") && (safeTag == 1) && (pline =="SKW"))) {
    routeArr += ("-->"+segMng);
  }
  if (usdAmount>=10000) {
    routeArr += ("-->Frank");
  }
  if (usdAmount>=th_4) {
    routeArr += ("-->董事长");
  }
  routeArr += ("-->物控经理盖章");
  if ((vType == 1) || (vType == 2) || (vType == 4)) {
    routeArr += ("-->物控专员确认采购订单回签");
  }
  routeArr += ("-->结束");

  alert(routeArr);
}

//插入CSS文件
function insertBSCSS(){
  var head = document.getElementsByTagName('head')[0],
    cssURL = '/cus_web/css/bootstrap.min.css',
    linkTag = document.createElement('link');
    linkTag.id = 'dynamic-style';
 linkTag.href = cssURL;
 linkTag.setAttribute('rel','stylesheet');
 linkTag.setAttribute('media','all');
 linkTag.setAttribute('type','text/css');
 head.appendChild(linkTag);
}
