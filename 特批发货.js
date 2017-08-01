jQuery(document).ready(function(){
  var img  = "<img align=absMiddle src='/images/BacoError_wev8.gif' />";
  if(document.getElementById("indexnum1")){
      indexnum1 = document.getElementById("indexnum1").value * 1.0 - 1;
      for(var i=0;i<= indexnum1;i++){
           var yqts=parseInt(jQuery("#field7407_"+i.toString()).val());
           var hkrq = jQuery("#field7406_"+i.toString()).val();
           var wjje = parseInt(jQuery("#field7551_"+i.toString()).val());
           if( (yqts>0) && (wjje >0) ){
             jQuery("#field7406_"+i.toString()).attr('viewtype','1');
             if (hkrq == "") {
               jQuery("#field7406_"+i.toString()+"span").html(img);
             }
           }
      }
  }
});

checkCustomize = function (){
  var lineNum = 0;
  var reason = 0;
  var submitFlag = true;
  if(document.getElementById("indexnum1")){
      indexnum1 = document.getElementById("indexnum1").value * 1.0 - 1;
      for(var i=0;i<= indexnum1;i++){
        var hkrq = jQuery("#field7406_"+i.toString()).val();
        if ((hkrq!="")&&(!checkDateGreaterThanToday(hkrq))) {
          submitFlag = false;
          lineNum = i+1;
          reason = 1;
          console.log(hkrq+"Len:"+hkrq.length+"Type:"+typeof(hkrq));
          break;
        }
        var yqts=parseInt(jQuery("#field7407_"+i.toString()).val());
           if(yqts>0){
             if (jQuery("#field7406_"+i.toString()).val()=="") {
               submitFlag = false;
               lineNum = i+1;
               reason = 2;
               break;
             }
           }
      }
  }
  if(!submitFlag){
    if (reason == 1) {
      alert("第"+lineNum+"行预计回款日期不能小于今日日期");
      return false;
    }else if (reason == 2) {
      alert("请填写第"+lineNum+"行预计回款日期");
      return false;
    }

  }else{
      return true;
  }
}

function checkDateGreaterThanToday(dateString) {
  if (dateString.length!=10) {
    console.log("DateError:"+dateString);
    return false;
  }
  var t_Date = new Date();
  var t_Day = t_Date.getDate();
  var t_Month = t_Date.getMonth()+1;
  var t_Year = t_Date.getFullYear();
  var c_Day = parseInt(dateString.substring(8,10));
  var c_Month = parseInt(dateString.substring(5,7));
  var c_Year = parseInt(dateString.substring(0,4));
  if (c_Year<t_Year) {
    return false;
  }else if (c_Year>t_Year) {
    return true;
  }else if (c_Month<t_Month) {
    return false;
  }else if (c_Month>t_Month) {
    return true;
  }else if (c_Day<t_Day) {
    return false;
  }else {
    return true;
  }
}
