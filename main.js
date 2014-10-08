$(document).on('ready', function() {
	
///////////////////////////////////////////////
///////////////// NAVIGATION //////////////////
///////////////////////////////////////////////

	// Inserts static username & password @signIn
	$('.username').val('roy_mcfarland');
	$('.password').val('************');

	// Takes user to research portal  
	$(document).on('click', '#myLogin', function(e){
		e.preventDefault();
		window.location.replace('file:///Users/student/projects/week5/midterm/research-portal.html');
	});

	// Return user to @signIn
	$(document).on('click', '#logout', function() {
		window.location.replace('file:///Users/student/projects/week5/midterm/index.html')
	});

	// Return user to @signIn
	$(document).on('click', '.navbar-brand', function() {
		window.location.replace('file:///Users/student/projects/week5/midterm/index.html')
	});



///////////////////////////////////////////////
////// APPENDING RESEARCH RESULTS TO DOM //////
///////////////////////////////////////////////

/**
 * Renders first level of results to DOM
 * @return {elements} of a crime (i.e., murder)
 */
	$(document).on('click', '#searchButton', function(){
		$('#searchText').val('');
		var firstResult = '<div class="row level1">' +
      		'<span><div class="col-xs-2 elements">Elements:</div></span>' +
      		'<div class="col-xs-2">Actus Reus</div>' +
      		'<div class="col-xs-2" id="target1">Mens Rea</div>' +
      		'<div class="col-xs-2">Concurrence</div>' +
      		'<div class="col-xs-2">Causation</div>' +
      		'<div class="col-xs-1">Harm</div>' +
      		'</div>';
		$('#resultSpace').append(firstResult);
	});

/**
 * Renders second level of results to DOM
 * @return {distinctions} of intent (i.e., mens rea)
 */
	$(document).on('click', '#target1', function(){
		var secondResult = '<div class="row level2">' +
      		'<div class="col-xs-2"></div>' +
      		'<div class="col-xs-2">Intent to Kill</div>' +
      		'<div class="col-xs-2" id="target2">Intent to Cause Serious Bodily Injury</div>' +
      		'<div class="col-xs-2">Depraved Heart</div>' +
      		'<div class="col-xs-2">Felony Murder</div>' +
    		'</div>';
    	$('#resultSpace').append(secondResult);
	});

/**
 * Renders third level of results to DOM
 * @return {cases} pertaining to murderous intent
 */
	$(document).on('click', '#target2', function(){
		var thirdResult = '<div class="row level3">' +
      		'<div class="col-xs-2"></div>' +
      		'<a href="http://scholar.google.com/scholar_case?case=15035002282262379891" target="_blank"><div class="col-xs-2">Jones v. United States <br> 526 US 227 (1999)</div></a>' +
      		'<a href="http://scholar.google.com/scholar_case?case=1379329779334955251" target="_blank"><div class="col-xs-2">United States v. Bailey <br> 444 US 394 (1980)</div></a>' +
      		'<a href="http://scholar.google.com/scholar_case?case=8614464154510334483" target="_blank"><div class="col-xs-2">Holloway v. United States <br> 526 US 1 (1999)</div></a>' +
      		'<div class="col-xs-2"></div>' +
    		'</div>';
    	$('#resultSpace').append(thirdResult);
	});	

});