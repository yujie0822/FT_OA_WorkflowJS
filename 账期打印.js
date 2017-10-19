jQuery(document).ready(function(){
  //信用额度处理
  var xyed = document.getElementById("xyed");
  var textnode1=document.createTextNode("人民币 ( ");
  var textnode2=document.createTextNode(" ) 元 ");
  xyed.insertBefore(textnode1,xyed.childNodes[0]);
  xyed.appendChild(textnode2);

  //账期处理
  var actZq_O = jQuery("#field7480").val();
  var actZq_N = jQuery("#field8961").val();
  var pasZq_O = jQuery("#field7481").val();
  var pasZq_N = jQuery("#field8962").val();
  var zqDT = "ERROR";
  if ((actZq_O != actZq_N) && (pasZq_O != pasZq_N)) {
    if (actZq_N == pasZq_N) {
      if (parseInt(jQuery("#field9584").val()) == 0 ) {
        zqDT = "月结 ( "+jQuery("#field7227").val()+" ) 天，结账日 ("+jQuery("#field7229").val()+" ) ，付款日 ( " +jQuery("#field7230").val()+ " )";
      }else if (parseInt(jQuery("#field9584").val()) == 1) {
        zqDT = "票后 ( "+jQuery("#field7227").val()+" ) 天";
      }
    }
  }else if (actZq_O != actZq_N) {
    if (parseInt(jQuery("#field9584").val()) == 0 ) {
      zqDT = "月结 ( "+jQuery("#field7227").val()+" ) 天，结账日 ("+jQuery("#field7229").val()+" ) ，付款日 ( " +jQuery("#field7230").val()+ " )";
    }else if (parseInt(jQuery("#field9584").val()) == 1) {
      zqDT = "票后 ( "+jQuery("#field7227").val()+" ) 天";
    }
  }else if (pasZq_O != pasZq_N) {
    if (parseInt(jQuery("#field9586").val()) == 0 ) {
      zqDT = "月结 ( "+jQuery("#field7236").val()+" ) 天，结账日 ("+jQuery("#field7238").val()+" ) ，付款日 ( " +jQuery("#field7239").val()+ " )";
    }else if (parseInt(jQuery("#field9586").val()) == 1) {
      zqDT = "票后 ( "+jQuery("#field7236").val()+" ) 天";
    }
  }
  var zqDetail = document.createTextNode(zqDT);
  document.getElementById("zqDetail").appendChild(zqDetail);
});
