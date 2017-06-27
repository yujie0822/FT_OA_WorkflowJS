jQuery(document).ready(function(){
  insertBSCSS();
  var btnArea = document.getElementById("btnArea");
  btnArea.innerHTML = "<input type='button' class = 'btn btn-default btn-xs' value='预测审批路径' id='updateBtn' onclick = 'ycRoute()' />";
});

function checkCustomize(){
  var plineTh = jQuery("#field8576").val();
   if (plineTh == 0) {
     window.top.Dialog.alert("产品线无审批阈值，请联系IT");
     return false;
   }
   return true;

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
  var safeTag = jQuery("#field8230").val();

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
  if (usdAmount>=th_4) {
    routeArr += ("-->董事长");
  }

  if ((vType == 1) || (vType == 2) || (vType == 4)) {
    routeArr += ("-->物控专员确认采购订单回签");
  }
  routeArr += ("-->物控经理盖章-->结束");
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
