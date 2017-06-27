jQuery(document).ready(function(){
  //属性联动设置
	var num = jQuery("#field6405").val();
	var requestid = jQuery("input[name='requestid']").val();
  //如果补充协议为X，订单NCNR属性设定为是
	if (num == 2){
		jQuery("#field6156").val(1);
	}
  //如果补充协议为X或Y，是否订单原件/补充协议属性设定为是
	if (num == 1 || num == 2){
		jQuery("#field6154").val(1);
	}

	//修改iframe地址
  var docoNum = jQuery("#field6309").val();
  var cusNum = jQuery("#field6310").val();
  jQuery("iframe#cus_iframe1").attr("src","http://192.168.0.248:8001/RedirectPage.asp?ReportName=FT_OA_0001&doco="+docoNum+"&processID="+requestid+"&sdan8="+cusNum);
	jQuery("iframe#cus_iframe2").attr("src","http://192.168.0.248:8001/RedirectPage.asp?ReportName=FT_OA_0002&doco="+docoNum+"&processID="+requestid+"&sdan8="+cusNum);


});

//PAS
jQuery(document).ready(function(){

  // 修改ifame地址
  // var requestid = jQuery("input[name='requestid']").val();
  // var docoNum = jQuery("#field6309").val();
  var cusNum = jQuery("#field6310").val();
  jQuery("iframe#cus_iframe1").attr("src","http://ftoa.fortune-co.com:8002/FTOA_001.asp?sdan8="+cusNum+"&ukid=1");
  jQuery("iframe#cus_iframe2").attr("src","http://ftoa.fortune-co.com:8002/FTOA_001.asp?sdan8="+cusNum+"&ukid=2");
});





//ACT
jQuery(document).ready(function(){
  // var requestid = jQuery("input[name='requestid']").val();
  // var docoNum = jQuery("#field6300").val();
  var cusNum = jQuery("#field6301").val();
  jQuery("iframe#cus_iframe1").attr("src","http://ftoa.fortune-co.com:8002/FTOA_001.asp?sdan8="+cusNum+"&ukid=1");
  jQuery("iframe#cus_iframe2").attr("src","http://ftoa.fortune-co.com:8002/FTOA_001.asp?sdan8="+cusNum+"&ukid=2");

});


jQuery(document).ready(function(){

	//修改iframe地址
  var docoNum = jQuery("#field6792").val();
  jQuery("iframe#cus_iframe1").attr("src","/formmode/search/CustomSearchBySimple.jsp?customid=82&DOCO="+docoNum);
	jQuery("iframe#cus_iframe2").attr("src","/formmode/search/CustomSearchBySimple.jsp?customid=82&DOCO="+docoNum);

});


jQuery(document).ready(function(){
  //给隐藏客户号赋值触发字段联动
  var cusNum = jQuery("#field6825").val();
  jQuery("#field7674").val(cusNum);

  var soType = jQuery("#field7828").val();
  if (soType == 1) {
    document.getElementById("tr_ddyj").style.display = "none";
  }
});


http://ftoa.fortune-co.com:8002/FTOA_001.asp?ukid=1&dbTag=ftoa&processid=$requestid$
http://ftoa.fortune-co.com:8002/FTOA_001.asp?ukid=2&dbTag=ftoa&processid=$requestid$
