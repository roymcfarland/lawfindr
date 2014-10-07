$(document).on('ready', function() {
	
	// Inserts static username & password @signIn
	$(".username").val("roy_mcfarland")
	$(".password").val("************")



	// Takes user to research portal  
	$(document).on('click', '#myLogin', function(e){
		e.preventDefault();
		window.location.replace('file:///Users/student/projects/week5/midterm/research-portal.html');
	});

});