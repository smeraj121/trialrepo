function myfunction(myvar){
  alert(window.location.href.slice(window.location.href.indexOf('?') + 1));
  var urls = window.location.search;
  alert(urls);
  var myurls = window.location.href.split("?");
  alert(myurls[1])
}

//jQuery(function ($) {}); //to avoi noconflict 
$(document).ready(function(){
$('#dropdown').attr('size', '3');
})
function popupselect()
{
alert("Selected Value is of dropdown2: "+$('#dropdown2s').val());
$("#dropdown").click();
} 
showDropdown = function () {
    //var event;
    //event = document.createEvent('MouseEvents');
    //event.initMouseEvent('mousedown', true, true, window);
    //$('#dropdown').dispatchEvent(event);
	$('#dropdown').attr('size', '3');
	//$('#dropdown2').show().focus().click();
};
closeDropdown=function(){
$('#dropdown').attr('size', '1');
}
$('select').on('change', function() {
  alert( this.value );
})
change=function(){
alert("Selected Value is: "+$('#dropdown').val());
};