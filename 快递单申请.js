jQuery(document).ready(function(){
  var btnArea = document.getElementById("btnArea");
  var linkStr = 'http://192.168.0.116:7001/xmlpserver/FT_LOG/029.%E5%BF%AB%E9%80%92%E5%8D%95%E6%89%93%E5%8D%B0.xdo?id=ftbip001&passwd=ftbip001&_xf=pdf&_xmode=2&_xt=全一带公式'+'&REQUESTID='+requestid;
  insertBSCSS();
  btnArea.innerHTML = "<a href='javascript:openBip()' class='btn btn-default btn-xs' role='button'>打印快递单</a>"
});
function openBip() {
  var requestid = jQuery("input[name='requestid']").val();
  var moban = parseInt(jQuery("#field10059").val());
  if (moban == 0) {
    var mobanStr = "全一带公式";
  }else if (moban == 1) {
    var mobanStr = "顺丰（红单版）";
  }else if (moban == 2) {
    var mobanStr = "顺丰（国际灰单版）";
  }else {
    var mobanStr = "全一带公式";
  }
  window.open("http://192.168.0.116:7001/xmlpserver/FT_LOG/029.%E5%BF%AB%E9%80%92%E5%8D%95%E6%89%93%E5%8D%B0.xdo?id=ftbip001&passwd=ftbip001&_xf=pdf&_xmode=2&_xt=全一带公式&REQUESTID="+requestid,"PrintWindow","location=no,status=no,scrollvars=no");
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
