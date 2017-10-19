jQuery(document).ready(function(){
  var indexnum0 = -1;
  if(document.getElementById("indexnum0")){
    indexnum0 = document.getElementById("indexnum0").value * 1.0;
  }
  for(var i = 0 ; i < indexnum0;i++){
    jQuery("#field8087_"+i).bindPropertyChange(function () {
      getFieldLengthTo("field8087_"+i,"field7618_"+i);
    });
  }

  jQuery("#indexnum0").bindPropertyChange(function(){
    var indexnum0 = -1;
    if(document.getElementById("indexnum0")){
      indexnum0 = document.getElementById("indexnum0").value * 1.0;
    }
    for(var i = 0 ; i < indexnum0;i++){
      console.log(i);
      jQuery("#field8087_"+i).bindPropertyChange(function () {
        getFieldLengthTo(("field8087_"+i),("field7618_"+i));
      });
    }
  });
});

function getFieldLengthTo(field1,field2) {
  var field1Len =(jQuery("#" +field1).val()).length;
  console.log(field1+" LEN: "+field1Len.toString());
  jQuery("#"+field2).val(field1Len);
  jQuery("#"+field2+"span").text(field1Len);
}

function checkCustomize(){
  var detail = wfDetail.doGet(0); // 得到第 1 个明细的数据
  var datas = detail.datas; // 获取明细数据
  for (var i=0;i<datas.length;i++){
    console.log(datas[i].wdfield8087);
    jQuery.ajax({
      url : "/cus_web/jsp/litmCheck.jsp",
			type : "post",
			processData : false,
			data : "litm="+datas[i].wdfield8087,
			dataType : "text",
      success: function do4Success(data){
				var res = data.trim();
        console.log(data);
        console.log(res);
			},
			error: function do4Error(msg) {
			}

    });
  }
  return true;
}
