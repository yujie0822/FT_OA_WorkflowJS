jQuery(document).ready(function(){
       jQuery.ajax({
			url : "/zx/getDetaildata.jsp",
			type : "post",
			processData : false,
			data : "operation=getUser",
			dataType : "text",
			success: function do4Success(data){
				var userids = data.trim();
                if (userids) {
				       jQuery("input[id^=field7664_]").each(function(){
					           var userid = ","+jQuery(this).val()+",";
					           if (userids.indexOf(userid) == -1) {
								     jQuery(this).parent("td").parent("tr").css("display","none");
					           }
					   });
                }
			},
			error: function do4Error(msg) {

			}
          });
});
