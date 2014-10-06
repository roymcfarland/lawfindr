$(document).on('ready', function() {
	$(".username").val("roy_mcfarland")
	$(".password").val("************")
  
	$('#login').click(function(e){
		e.preventDefault;
		console.log('hey');
		window.location.replace('page2.html');
	});

});