jQuery(document).ready(function(){
  var btnArea = document.getElementById("btnArea");
  insertBSCSS();
  btnArea.innerHTML = "<a href='javascript:openBip()' class='btn btn-default btn-xs' role='button'>打印补充协议</a>"
});
function openBip() {
  var requestid = jQuery("input[name='requestid']").val();
  window.open("http://192.168.0.116:7001/xmlpserver/FT_OA/003.%E8%AE%A2%E5%8D%95%E8%A1%A5%E5%85%85%E5%8D%8F%E8%AE%AE.xdo?id=ftbip001&passwd=ftbip001&_xf=pdf&_xmode=2&REQUESTID="+requestid,"PrintWindow","location=no,status=no,scrollvars=no");
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
