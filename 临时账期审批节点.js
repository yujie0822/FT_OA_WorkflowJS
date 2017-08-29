jQuery(document).ready(function(){
  insertBSCSS();
  hlLabelField(7856,7857,"field7857","New");
  hlLabelField(7845,9592,"field9592","New");


  hlLabelField(7223,7227,"field7227","New");
  hlLabelField(7224,7228,"field7228","New");
  hlLabelField(7225,7229,"field7229","New");
  hlLabelField(7226,7230,"field7230","New");
  hlLabelField(9583,9584,"field9584","New");

  hlLabelField(7232,7236,"field7236","New");
  hlLabelField(7233,7237,"field7237","New");
  hlLabelField(7234,7238,"field7238","New");
  hlLabelField(7235,7239,"field7239","New");
  hlLabelField(9585,9586,"field9586","New");

 });

function hlLabelField(field1,field2,fieldId,labelVal,changeTag) {
  var labelVal = arguments[3]?arguments[3]:"New";
  var cgTag = arguments[4]?arguments[4]:false;
  var var1 = jQuery("#field"+field1.toString()).val();
  var var2 = jQuery("#field"+field2.toString()).val();
  if (cgTag) {
    if (var1 == ""){
      var1 = "0";
    }
    if (var2 == "") {
      var2 = "0";
    }
  }
  if (var1 != var2) {
    var tempSpan = document.createElement("span");
    tempSpan.className = "label label-danger label-xs";
    tempSpan.style = "color:white!important";
    tempSpan.innerHTML = labelVal;
    document.getElementById(fieldId).parentNode.appendChild(tempSpan);
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
