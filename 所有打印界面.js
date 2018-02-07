jQuery(document).ready(function(){
  var btnArea = document.getElementById("btnArea");
  insertBSCSS();
  btnArea.innerHTML = "<a href='javascript:openBip()' class='btn btn-default btn-xs' role='button'>打印付款申请单</a>"
});
function openBip() {
  var requestid = jQuery("input[name='requestid']").val();
  window.open("http://192.168.0.169:9704/xmlpserver/FT_SUPPLYCHAIN/060.PayAppFormPrint_WF/060.PayAppFormPrint_WF.xdo?id=ftbip001&passwd=ftbip001&_xmode=1&P_DOCO="+requestid,"PrintWindow","location=no,status=no,scrollvars=no");
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


//差旅费
jQuery(document).ready(function(){
  var btnArea = document.getElementById("btnArea");
  insertBSCSS();
  btnArea.innerHTML = "<a href='javascript:openBip()' class='btn btn-default btn-xs' role='button'>打印付款申请单</a>"
});
function openBip() {
  var requestid = jQuery("input[name='requestid']").val();
  window.open("http://192.168.0.169:9704/xmlpserver/FT_OA/010.%E5%B7%AE%E6%97%85%E8%B4%B9%E6%8A%A5%E9%94%80%E5%8D%95/010.%E5%B7%AE%E6%97%85%E8%B4%B9%E6%8A%A5%E9%94%80%E5%8D%95.xdo?id=ftbip001&passwd=ftbip001&_xmode=1&P_DOCO="+requestid,"PrintWindow","location=no,status=no,scrollvars=no");
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


//业务招待费
jQuery(document).ready(function(){
  var btnArea = document.getElementById("btnArea");
  insertBSCSS();
  btnArea.innerHTML = "<a href='javascript:openBip()' class='btn btn-default btn-xs' role='button'>打印付款申请单</a>"
});
function openBip() {
  var requestid = jQuery("input[name='requestid']").val();
  window.open("http://192.168.0.169:9704/xmlpserver/FT_OA/011.%E4%B8%9A%E5%8A%A1%E6%8B%9B%E5%BE%85%E8%B4%B9/011.%E4%B8%9A%E5%8A%A1%E6%8B%9B%E5%BE%85%E8%B4%B9.xdo?id=ftbip001&passwd=ftbip001&_xmode=1&P_DOCO="+requestid,"PrintWindow","location=no,status=no,scrollvars=no");
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


//个人直接费用
jQuery(document).ready(function(){
  var btnArea = document.getElementById("btnArea");
  insertBSCSS();
  btnArea.innerHTML = "<a href='javascript:openBip()' class='btn btn-default btn-xs' role='button'>打印付款申请单</a>"
});
function openBip() {
  var requestid = jQuery("input[name='requestid']").val();
  window.open("http://192.168.0.169:9704/xmlpserver/FT_OA/012.%E4%B8%AA%E4%BA%BA%E7%9B%B4%E6%8E%A5%E8%B4%B9%E7%94%A8/012.%E4%B8%AA%E4%BA%BA%E7%9B%B4%E6%8E%A5%E8%B4%B9%E7%94%A8.xdo?id=ftbip001&passwd=ftbip001&_xmode=1&P_DOCO="+requestid,"PrintWindow","location=no,status=no,scrollvars=no");
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


//修改系统自带打印
jQuery(document).ready(function(){
  jQuery("[title= '打印']").attr("onclick","openBip();");
});

function openBip() {
  var requestid = jQuery("input[name='requestid']").val();
  window.open("http://192.168.0.169:9704/xmlpserver/FT_OA/012.%E4%B8%AA%E4%BA%BA%E7%9B%B4%E6%8E%A5%E8%B4%B9%E7%94%A8/012.%E4%B8%AA%E4%BA%BA%E7%9B%B4%E6%8E%A5%E8%B4%B9%E7%94%A8.xdo?id=ftbip001&passwd=ftbip001&_xmode=1&P_DOCO="+requestid,"PrintWindow","location=no,status=no,scrollvars=no");
}


//业务采购付款申请
jQuery(document).ready(function(){
  var btnArea = document.getElementById("btnArea");
  insertBSCSS();
  btnArea.innerHTML = "<a href='javascript:openBip()' class='btn btn-default btn-xs' role='button'>打印付款申请单</a>"
});
function openBip() {
  var requestid = jQuery("input[name='requestid']").val();
  var doco = jQuery("#field15018").val();
  window.open("http://192.168.0.169:9704/xmlpserver/FT_SUPPLYCHAIN/061.付款申请单打印(OA)/061.付款申请单打印(OA).xdo?id=ftbip001&passwd=ftbip001&_xmode=1&DOCO="+doco+"&DCTO=PA&REQUESTID="+requestid,"PrintWindow","location=no,status=no,scrollvars=no");
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

//预付款付款申请
jQuery(document).ready(function(){
  var btnArea = document.getElementById("btnArea");
  insertBSCSS();
  btnArea.innerHTML = "<a href='javascript:openBip()' class='btn btn-default btn-xs' role='button'>打印付款申请单</a>"
});
function openBip() {
  var requestid = jQuery("input[name='requestid']").val();
  var doco = jQuery("#field15019").val();
  window.open("http://192.168.0.169:9704/xmlpserver/FT_SUPPLYCHAIN/062.%E9%A2%84%E4%BB%98%E6%AC%BE%E7%94%B3%E8%AF%B7%E5%8D%95%E6%89%93%E5%8D%B0%28OA%29/062.%E9%A2%84%E4%BB%98%E6%AC%BE%E7%94%B3%E8%AF%B7%E5%8D%95%E6%89%93%E5%8D%B0%28OA%29.xdo?id=ftbip001&passwd=ftbip001&_xmode=1&DOCO="+doco+"&DCTO=PA&REQUESTID="+requestid,"PrintWindow","location=no,status=no,scrollvars=no");
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


jQuery(document).ready(function(){
  var btnArea = document.getElementById("btnArea");
  var btnArea2 = document.getElementById("btnArea2");
  insertBSCSS();
  btnArea.innerHTML = "<a href='javascript:openBip()' class='btn btn-default btn-xs' role='button'>打印付款申请单</a>";
  btnArea2.innerHTML = "<a href='javascript:openBip2()' class='btn btn-default btn-xs' role='button'>打印出票明细</a>";
});
function openBip() {
  var requestid = jQuery("input[name='requestid']").val();
 window.open("http://192.168.0.169:9704/xmlpserver/FT_OA/013.%E8%A1%8C%E6%94%BF%E9%87%87%E8%B4%AD%E6%9C%BA%E7%A5%A8%E4%BB%98%E6%AC%BE%E7%94%B3%E8%AF%B7/013.%E8%A1%8C%E6%94%BF%E9%87%87%E8%B4%AD%E6%9C%BA%E7%A5%A8%E4%BB%98%E6%AC%BE%E7%94%B3%E8%AF%B7.xdo?id=ftbip001&passwd=ftbip001&_xmode=1&REQUESTID="+requestid,"PrintWindow","location=no,status=no,scrollvars=no");
}
function openBip2() {
  var requestid = jQuery("input[name='requestid']").val();
  var doco = jQuery("#field15018").val();
 window.open("http://192.168.0.116:7001/xmlpserver/FT_OA/017.%E5%87%BA%E7%A5%A8%E4%BF%A1%E6%81%AF%E6%98%8E%E7%BB%86.xdo?id=ftbip001&passwd=ftbip001&_xmode=1&REQUESTID="+requestid,"PrintWindow","location=no,status=no,scrollvars=no");
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


jQuery(document).ready(function(){
  var btnArea = document.getElementById("btnArea");
  insertBSCSS();
  btnArea.innerHTML = "<a href='javascript:openBip()' class='btn btn-default btn-xs' role='button'>导出付款明细</a>"
});
function openBip() {
  var requestid = jQuery("input[name='requestid']").val();
  window.open("http://192.168.0.116:7001/xmlpserver/FT_OA/018.%E4%B8%AA%E4%BA%BA%E8%B4%B9%E7%94%A8%E6%8A%A5%E9%94%80%E4%BB%98%E6%AC%BE%E6%98%8E%E7%BB%86.xdo?id=ftbip001&passwd=ftbip001&_xf=html&_xmode=1&REQUESTID="+requestid,"PrintWindow","location=no,status=no,scrollvars=no");
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


jQuery(document).ready(function(){

jQuery("span[class^='span_mc mc_1']").find("input[type='checkbox']").each(function(o){
var _group = jQuery($(this).parent("span").parent("span")).attr("_group");
var checked = $(this).attr("checked");
hindContent(_group, checked);
$(this).click(function(){
var _group = jQuery($(this).parent("span").parent("span")).attr("_group");
var checked = $(this).attr("checked");
hindContent(_group, checked);
});
})
})
function hindContent(_group, checked) {
if (checked) {
jQuery("div[group='"+_group+"']").each(function(o){
   jQuery($(this).parent("td").parent("tr")).css("display","");
});
} else {
jQuery("div[group='"+_group+"']").each(function(o){
   jQuery($(this).parent("td").parent("tr")).css("display","none");
});
}
}
