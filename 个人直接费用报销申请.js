<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type="text/javascript">
    var hjbl = "field15751"		//合计比例
	var sfbtMX = "field15910";	//明细行是否必填;
	var yskmMX = "15695"; 		//预算科目（显示字段）（明细表1）
	var cwzje = "12570"; 	//财务审核金额
	var sfje = "12560";          //实付金额
	var syqk = "14989"; 	//剩余欠款
	var bcqk = "12562"; 	//本次还款
	var jiaose = "16068";	//角色
	var sfxg = "16130";	//是否可修改预算归结部门
  var sfcpxbl = "16468";
function sfcs(){
    var cjr = jQuery("#field16138").val();  //创建人
    var sqr = jQuery("#field12549").val();  //申请人
    if(cjr==sqr){
        jQuery("#field16412").val("1");
    }else{
        jQuery("#field16412").val("0");
    }
}

//页面加载触发
jQuery(document).ready(function(){
    //加载完成，执行一次
	sfcs();

    //绑定change事件，如果这个元素，值改变触发sfcs()方法
    jQuery("#field12549").bindPropertyChange(function(){
        sfcs();
	});
});

checkCustomize = function(){

  //如果没有勾选checkbox，则必须填写产品线比例表
  var sycpxbl = cus_getFieldValue("field"+sfcpxbl);
  if (sycpxbl == 0) {
    var hjbl_v = jQuery("#"+hjbl).val();		//合计比例
  	if(hjbl_v!="100"){
  		alert("比例合计必须为100%！");
  		return false;
  	 }
  }else {
    //如果产品线比例表没有记录，则不允许提交
    var cpxbls = parseInt(jQuery("#field16729").val()||-1);
    if (cpxbls == 0) {
      alert("系统中未登记产品线比例表，请联系HR核查");
      return false;
    }
  }
var cwzje_v = jQuery("#field" + cwzje).val();
		var sfje_v = jQuery("#field" + sfje).val();
		var syqk_v = jQuery("#field" + syqk).val();
		var bcqk_v = jQuery("#field" + bcqk).val();
		var num1 = Number(jQuery("#field" + cwzje).val()) - Number(jQuery("#field" + syqk).val()); //财务审核金额-剩余欠款
		var num2 = Number(jQuery("#field" + bcqk).val()) - Number(jQuery("#field" + cwzje).val()) - Number(jQuery("#field" + syqk).val()); //本次还款-财务审核金额-剩余欠款；
		var num3 = Number(jQuery("#field" + bcqk).val()) - Number(jQuery("#field" + cwzje).val()); //本次还款-财务审核金额
		if (num1 > 0) {
			if (num2 > 0) {
				alert("本次还款不能大于欠款总额！");
			}
		} else {
			if (num3 > 0) {
				alert("本次还款不能大于财务审核总金额！");
			}
		}
	return true;
}

jQuery(document).ready(function() {
//alert(jQuery("#field16138").val());
jQuery("#field"+jiaose).bindPropertyChange(function(){
                var jiaose_v = jQuery("#field"+jiaose).val();

		if(jiaose_v==0){
			jQuery("#field"+sfxg).val("1");
		}else{
			jQuery("#field"+sfxg).val("0");
		}
               jQuery("#field"+sfxg).change();
		});

	//原明细行字段加change事件
	var indexnum0 = -1;
	indexnum0 = document.getElementById("indexnum0").value * 1.0;
	for (var i = 0; i < indexnum0; i++) {
		jQuery("#field" + yskmMX + "_" + i).bindPropertyChange(function() {
			checkMX();
		});
	}

	//新增明细行字段加change事件
	jQuery("#indexnum0").bindPropertyChange(function() {
		var indexnum0 = -1;
		indexnum0 = document.getElementById("indexnum0").value * 1.0;
		for (var i = 0; i < indexnum0; i++) {
			jQuery("#field" + yskmMX + "_" + i).bindPropertyChange(function() {
				checkMX();
			});
		}
	});

	//新增明细行字段加change事件
	jQuery("#indexnum1").bindPropertyChange(function() {
		checkMX();
	});

jQuery("#field" + bcqk).bindPropertyChange(function() {
			var cwzje_v = jQuery("#field" + cwzje).val();
			var sfje_v = jQuery("#field" + sfje).val();
			var syqk_v = jQuery("#field" + syqk).val();
			var bcqk_v = jQuery("#field" + bcqk).val();
			var num1 = Number(jQuery("#field" + cwzje).val()) - Number(jQuery("#field" + syqk).val()); //财务审核金额-剩余欠款
			var num2 = Number(jQuery("#field" + bcqk).val()) - Number(jQuery("#field" + cwzje).val()) - Number(jQuery("#field" + syqk).val()); //本次还款-财务审核金额-剩余欠款；
			var num3 = Number(jQuery("#field" + bcqk).val()) - Number(jQuery("#field" + cwzje).val()); //本次还款-财务审核金额
			if (num1 > 0) {
				if (num2 > 0) {
					alert("本次还款不能大于欠款总额！");
				}
			} else {
				if (num3 > 0) {
					alert("本次还款不能大于财务审核总金额！");
				}
			}
		});

  //是否使用产品线比例表CheckBox加change事件
  showCpxblb();
  jQuery("#field"+sfcpxbl).click(function(){
    showCpxblb();
  });

});

//明细行1 字段change事件
function checkMX(){
	var khFlag = false; //客户必填标志
	var xmFlag = false; //项目必填标志

	var yzLv1a = "销售费用"; //验证一级科目的文本 for客户、供应商
	var yzLv1b = "研发费用"; //验证一级科目的文本 for客户、供应商 for项目
	var yzLv2 = "市场推广费用"; //验证二级科目的文本 for客户、供应商
	var indexnum0 = -1;
	indexnum0 = document.getElementById("indexnum2").value * 1.0;
	//alert(indexnum0);
	for (var i = 0; i < indexnum0; i++) {
		//alert(jQuery("#field" + yskmMX + "_" + i + "span").text());
		var yskmID=jQuery("#field" + yskmMX + "_" + i ).val();
		//alert(yskmID);
		if(yskmID=='130' || yskmID=='127' || yskmID=='49' || yskmID=='259'){
			jQuery("#field14539").val("28");
			jQuery("#field14539span").html("<a href='/hrm/company/HrmDepartmentDsp.jsp?id=28' target='_new'>人力资源部</a>");
			jQuery("#field14539_readonlytext").html("<a href='/hrm/company/HrmDepartmentDsp.jsp?id=28' target='_new'>人力资源部</a>");
		}else{
			jQuery("#field14539").val(jQuery("#field16137").val());
			jQuery("#field14539span").html(jQuery("#field16137span").html());
			jQuery("#field14539_readonlytext").html(jQuery("#field16137span").html());
		}

		var ysText = jQuery("#field" + yskmMX + "_" + i + "span").text();
		//alert(ysText );
		var lv1 = ysText.split('，')[0]; //一级科目的文本
		var lv2 = ysText.split('，')[1]; //二级科目的文本
		var lv3 = ysText.split('，')[2]; //三级科目的文本
		//alert("一级："+lv1+" 二级："+lv2+" 三级"+lv3)
		if (lv1 == yzLv1b) {
			xmFlag = true;
		}
		if ((lv1 == yzLv1a || lv1 == yzLv1b) && lv2 == yzLv2) {
			khFlag = true;
		}
	}
	indexnum1 = document.getElementById("indexnum1").value * 1.0;
	//alert(indexnum0);
	if (khFlag) {
		//alert('客户必填');
		for (var i = 0; i < indexnum1; i++) {
			jQuery("#" + sfbtMX + "_" + i).val("0");
			jQuery("#" + sfbtMX + "_" + i).change();
		}
	}
	if (xmFlag) {
		//alert('项目必填');
		for (var i = 0; i < indexnum1; i++) {
			jQuery("#" + sfbtMX + "_" + i).val("2");
			jQuery("#" + sfbtMX + "_" + i).change();
		}
	}
}

function showCpxblb() {
  //是否使用产品线比例表Checkbox取值
  var ifsycpxbl = parseInt(cus_getFieldValue("field16468")||0);
  console.log("ChangeTag:"+ifsycpxbl);
  //如果勾选了，隐藏产品线比例明细表
  if (ifsycpxbl == 1) {
    jQuery(".cpxblb").addClass("edesign_hide");
    jQuery(".cpxblmx").addClass("edesign_hide");

  }else {
    jQuery(".cpxblb").removeClass("edesign_hide");
    jQuery(".cpxblmx").removeClass("edesign_hide");
  }
}

</script>
