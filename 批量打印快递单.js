<script type="text/javascript">
jQuery(document).ready(function(){
  insertBSCSS();
  var btnArea1 = document.getElementById("btnArea1");
  var mobanArr = getColValFromIndex(0,10177);
  for (var i = 0; i < mobanArr.length; i++) {
    if(mobanArr[i] == 0){
      btnArea1.innerHTML += "<a href='javascript:openBip1()' class='btn btn-default btn-xs' role='button'>打印快递单(全一)</a>"
    }else if (mobanArr[i] == 1) {
      btnArea1.innerHTML += "<a href='javascript:openBip2()' class='btn btn-default btn-xs' role='button'>打印快递单(顺丰红单)</a>"
    }else if (mobanArr[i] ==2) {
      btnArea1.innerHTML += "<a href='javascript:openBip3()' class='btn btn-default btn-xs' role='button'>打印快递单(顺丰国际灰单)</a>"
    }else{
      console.log("模板未找到");
    }
  }
});

function openBip1() {
  var requestid = jQuery("input[name='requestid']").val();
  window.open("http://192.168.0.116:7001/xmlpserver/FT_LOG/031.%E5%BF%AB%E9%80%92%E5%8D%95%E6%89%B9%E9%87%8F%E6%89%93%E5%8D%B0-%E5%85%A8%E4%B8%80%E5%B8%A6%E5%85%AC%E5%BC%8F.xdo?id=ftbip001&passwd=ftbip001&_xf=pdf&_xmode=2&REQUESTID="+requestid,"PrintWindow","location=no,status=no,scrollvars=no");
}
function openBip2() {
  var requestid = jQuery("input[name='requestid']").val();
  window.open("http://192.168.0.116:7001/xmlpserver/FT_LOG/030.%E5%BF%AB%E9%80%92%E5%8D%95%E6%89%B9%E9%87%8F%E6%89%93%E5%8D%B0-%E9%A1%BA%E4%B8%B0%EF%BC%88%E7%BA%A2%E5%8D%95%E7%89%88%EF%BC%89.xdo?id=ftbip001&passwd=ftbip001&_xf=pdf&_xmode=2&REQUESTID="+requestid,"PrintWindow","location=no,status=no,scrollvars=no");
}
function openBip3() {
  var requestid = jQuery("input[name='requestid']").val();
  window.open("http://192.168.0.116:7001/xmlpserver/FT_LOG/032.%E5%BF%AB%E9%80%92%E5%8D%95%E6%89%B9%E9%87%8F%E6%89%93%E5%8D%B0-%E9%A1%BA%E4%B8%B0+%28%E5%9B%BD%E9%99%85%E7%81%B0%E5%8D%95%E7%89%88%29.xdo?id=ftbip001&passwd=ftbip001&_xf=pdf&_xmode=2&REQUESTID="+requestid,"PrintWindow","location=no,status=no,scrollvars=no");
}

//取明细表中某列的唯一值，返回Array
function getColValFromIndex(indexNum,fieldNum) {
  var resultArr = new Array();
  if(document.getElementById("indexnum"+indexNum.toString())){
      indexnum1 = document.getElementById("indexnum"+indexNum.toString()).value * 1.0 - 1;
      for(var i=0;i<= indexnum1;i++){
        var temp = parseInt(jQuery("#field"+fieldNum.toString()+"_"+i.toString()).val());
        if (!findEleInArray(resultArr,temp)) {
          resultArr.push(temp);
        }
      }
  }
  return resultArr
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


</script>
