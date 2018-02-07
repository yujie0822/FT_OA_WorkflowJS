<script type="text/javascript">
jQuery(document).ready(function(){
  insertBSCSS();
  //信用额度
  hlLabelField(7856,7857,"field7857","New",true);
  //付款方式
  hlLabelField(7845,9592,"field9592","New",true);
//ACT账期
  hlLabelField(7223,7227,"field7227","New",true);
  hlLabelField(7224,7228,"field7228","New",true);
  hlLabelField(7225,7229,"field7229","New",true);
  hlLabelField(7226,7230,"field7230","New",true);
  hlLabelField(9583,9584,"field9584","New",false);
//PAS账期
  hlLabelField(7232,7236,"field7236","New",true);
  hlLabelField(7233,7237,"field7237","New",true);
  hlLabelField(7234,7238,"field7238","New",true);
  hlLabelField(7235,7239,"field7239","New",true);
  hlLabelField(9585,9586,"field9586","New",false);

//千分位
  changeSpanNumberWithCommas(7847);
  changeDetailSpanNumberWithCommas(7848,1);

 });

/*
比较2个field值，改变id所在区域的背景色
用法：highlightField(field1数字,field2数字,改变的ID名,高亮颜色(不填默认为#FFD2D2));
例如：highlightField(6666,6667,"cus_id1","red");
*/

function highlightField(field1,field2,fieldId,highlightColour) {
  var highlightColour = arguments[3]?arguments[3]:"#FFD2D2"
  var var1 = jQuery("#field"+field1.toString()).val();
  var var2 = jQuery("#field"+field2.toString()).val();

  if (var1 != var2) {
    document.getElementById(fieldId).style.backgroundColor=highlightColour;
  }
}


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
function changeSpanNumberWithCommas(fieldNum) {
  var fieldVal = parseInt(jQuery("#field"+fieldNum).val()||0);
  var fieldStr = fieldVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  jQuery("#field"+fieldNum+"span").text(fieldStr);
  if (document.getElementById("field"+fieldNum+"span_format")) {
    document.getElementById("field"+fieldNum+"span_format").innerHTML = fieldStr;
  }
}

function changeDetailSpanNumberWithCommas(fieldNum,DetailTableNum){
  var indexNum = "indexnum"+(DetailTableNum-1).toString();
  var fieldVal = 0;
  var fieldStr = "";
  if(document.getElementById(indexNum)){
    indexLen = document.getElementById(indexNum).value * 1.0 - 1;
    for(var i=0;i<= indexLen;i++){
      if (document.getElementById("field"+fieldNum+"_"+i+"span")) {
        fieldVal = parseInt(jQuery("#field"+fieldNum+"_"+i).val()||0);
        fieldStr = fieldVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById("field"+fieldNum+"_"+i+"span").innerHTML = fieldStr;
      }
      if (document.getElementById("field"+fieldNum+"_"+i+"span_format")) {
        fieldVal = parseInt(jQuery("#field"+fieldNum+"_"+i).val()||0);
        fieldStr = fieldVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById("field"+fieldNum+"_"+i+"span_format").innerHTML = fieldStr;
      }
    }
  }
}
</script>
