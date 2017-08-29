jQuery(document).ready(function(){
  jQuery("#field9584").bindPropertyChange(function () {
    if (parseInt(jQuery("#field9584").val())==1) {
      jQuery("#field7229").val("");
      jQuery("#field7230").val("");
    }
  });

  jQuery("#field9586").bindPropertyChange(function () {
    jQuery("#field7238").val("");
    jQuery("#field7239").val("");
  });
});
