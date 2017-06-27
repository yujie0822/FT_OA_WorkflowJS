function checkCustomize(){
  alert("此流程移动端仍在开发中，请使用PC完成此流程");
  return false;
}


/*
indexnum0 = document.getElementById("indexnum0").value * 1.0 - 1;
for(var i=0;i<= indexnum0;i++){
     var yqts=jQuery("#field9607_"+i.toString()).val();
     if(yqts>0){
        applyEssAttr("7559_"+i.toString());
     }
}*/
if(document.getElementById("indexnum0")){
  alert("存在明细表");
}else {
  alert("不存在明细表");
}
