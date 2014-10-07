$(document).on('ready', function() {
	
	// Inserts username / password into login box
	$(".username").val("roy_mcfarland")
	$(".password").val("************")
  
	$(document).on('click', '#myLogin', function(e){
		e.preventDefault();
		window.location.replace('file:///Users/student/projects/week5/midterm/research-portal.html');
	});

});