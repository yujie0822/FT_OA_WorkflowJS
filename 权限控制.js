jQuery(document).ready(function(){
   jQuery.ajax({
  url : "/zx/getDetaildata.jsp",
  type : "post",
  processData : false,
  data : "operation=getPLM",
  dataType : "text",
  success: function do4Success(data){
    var plineids = data.trim();
    jQuery("input[id^=field8622_]").each(function(){
      var pline = ","+jQuery(this).val()+",";
      if (plineids.indexOf(pline) == -1) {
        jQuery(this).parent("td").parent("tr").css("display","none");
      }
    });
  },
  error: function do4Error(msg) {

  }
      });
});
