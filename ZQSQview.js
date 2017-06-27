jQuery(document).ready(function(){
  highlightField(7856,7857,"edHl1");
  highlightField(7845,9592,"edHl2");
  highlightField(7223,7227,"actHl1");
  highlightField(7224,7228,"actHl2");
  highlightField(7225,7229,"actHl3");
  highlightField(7226,7230,"actHl4");
  highlightField(9583,9584,"actHl5");

  highlightField(7232,7236,"pasHl1");
  highlightField(7233,7237,"pasHl2");
  highlightField(7234,7238,"pasHl3");
  highlightField(7235,7239,"pasHl4");
  highlightField(9585,9586,"pasHl4");
  highlightField(9585,9586,"pasHl5");
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
