$(function() {

	// Custom JS
	/*
	$("input, select, textarea").jqBootstrapValidation();
	*/
	$("input,select,textarea").jqBootstrapValidation(); 

	$('#loginId').click(function(){
  $('#reg-block').hide('slow', function() {
    $('#login-block').show();
  });
});

	$('#createId').click(function(){
  $('#login-block').hide('slow', function() {
    $('#reg-block').show();
  });
});

$('.popup .close_window, .overlay').click(function (){
$('.popup, .overlay').css({'opacity': 0, 'visibility': 'hidden'});
});
$('#open_window').click(function (e){
$('.popup, .overlay').css({'opacity': 1, 'visibility': 'visible'});
e.preventDefault();
});




});
