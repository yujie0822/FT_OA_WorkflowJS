
jQuery(document).ready(function(){
  jQuery(".khxx").addClass("detail_hide_col");
  jQuery(".gysxx").addClass("detail_hide_col");
  jQuery("#field7757").bindPropertyChange(function () {
    var jhtype = parseInt(jQuery("#field7757").val()||9);
    if (jhtype == 0) {
        jQuery(".gysxx").addClass("detail_hide_col");
      jQuery(".khxx").removeClass("detail_hide_col");
    }else if (jhtype == 1) {
      jQuery(".khxx").addClass("detail_hide_col");
      jQuery(".gysxx").removeClass("detail_hide_col");
    }else {
      jQuery(".khxx").addClass("detail_hide_col");
      jQuery(".gysxx").addClass("detail_hide_col");
    }
  });
});

//审批节点

jQuery(document).ready(function(){
  var jhtype = parseInt(jQuery("#field7757").val()||9);
  if (jhtype == 0) {
    jQuery(".gysxx").addClass("detail_hide_col");
  }else if (jhtype == 1) {
    jQuery(".khxx").addClass("detail_hide_col");
  }
});

/*
function checkCustomize(o) {
var index;
if (jQuery("input[name^='check_node']") && jQuery("input[name^='check_node']").get(0)) {
index = jQuery("input[name^='check_node']").get(0).value;
}
if (index) {
    jQuery("#field10134").val(jQuery("#field7769_"+index).val()); //产品线
}
return true;
}*/
