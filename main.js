///////////////////////////////////////////////
////////////// GLOBAL VARIABLES ///////////////
///////////////////////////////////////////////

var elementsOfMurder = '<div class="row level1">' +
	'<div class="col-xs-2 elements"><span class="label label-success">Elements:</span></div>' +
	'<div class="col-xs-2" id="action"><button type="button" class="btn btn-default">Action</button></div>' +
	'<div class="col-xs-2" id="intent"><button type="button" class="btn btn-default">Intent</button></div>' +
	'<div class="col-xs-2" id="causation"><button type="button" class="btn btn-default">Causation</button></div>' +
	'<div class="col-xs-2"><button type="button" class="btn btn-default popover-btn" data-container="body" data-toggle="popover" data-placement="top" data-content="The act must cause the death of an actual living person, which can include a fetus in certain states.">Person</button></div>' +
	'<div class="col-xs-1"><button type="button" class="btn btn-default">Harm</button></div>' +
	'<div class="col-xs-1"><span class="glyphicon glyphicon-remove removeButton"></span></div>'
	'</div>';

var actionResult = '<div class="row level1">' +
	'<div class="col-xs-2 elements"></div>' +
	'<div class="col-xs-2">Involuntary Action</div>' +
	'<div class="col-xs-2">Voluntary Action</div>' +
	'<div class="col-xs-2">Failure to Act</div>' +
	'<div class="col-xs-2"></div>' +
	'<div class="col-xs-1"></div>' +
	'<div class="col-xs-1"><span class="glyphicon glyphicon-remove removeButton"></span></div>'
	'</div>';

var intentResult = '<div class="row level2">' +
	'<div class="col-xs-2"></div>' +
	'<div class="col-xs-2">Intent to Kill</div>' +
	'<div class="col-xs-2" id="target2">Intent to Cause Serious Bodily Injury</div>' +
	'<div class="col-xs-2">Depraved Heart</div>' +
	'<div class="col-xs-2">Felony Murder</div>' +
	'<div class="col-xs-1"></div>' +
	'<div class="col-xs-1"><span class="glyphicon glyphicon-remove removeButton"></span></div>'
	'</div>';

var thirdResult = '<div class="row level3">' +
	'<div class="col-xs-2"></div>' +
	'<a href="http://scholar.google.com/scholar_case?case=15035002282262379891" target="_blank"><div class="col-xs-2">Jones v. United States <br> 526 US 227 (1999)</div></a>' +
	'<a href="http://scholar.google.com/scholar_case?case=1379329779334955251" target="_blank"><div class="col-xs-2">United States v. Bailey <br> 444 US 394 (1980)</div></a>' +
	'<a href="http://scholar.google.com/scholar_case?case=8614464154510334483" target="_blank"><div class="col-xs-2">Holloway v. United States <br> 526 US 1 (1999)</div></a>' +
	'<div class="col-xs-2"></div>' +
	'<div class="col-xs-1"></div>' +
	'<div class="col-xs-1"><span class="glyphicon glyphicon-remove removeButton"></span></div>'
	'</div>';



$(document).on('ready', function() {
	
///////////////////////////////////////////////
//////////// INTRASITE NAVIGATION /////////////
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
//////////////// EVENT HANDLERS ///////////////
///////////////////////////////////////////////

/**
 * Opt-in to popover actions
 * @return {popover} when button is clicked
 */
	$(document).on('click', '.popover-btn', function(e) {
		e.preventDefault();
		$('[data-toggle=popover]').popover();
	});

/**
 * Appends research results to DOM
 * @return {constituent elements} of murder
 */
	$(document).on('click', '#searchButton', function(){
		$('#searchText').val('');
		// $('#searchInstructions').remove();
		$('#resultSpace').append(elementsOfMurder);
	});

/**
 * Appends research results to DOM
 * @return {types} of actions that can be murderous
 */	
	$(document).on('click', '#action', function(){
		$('#resultSpace').append(actionResult);
	});

/**
 * Renders research results to DOM
 * @return {types} of intent that can be murderous
 */
	$(document).on('click', '#intent', function(){
    	$('#resultSpace').append(intentResult);
	});

/**
 * Renders research results to DOM
 * @return {cases} pertaining to murderous intent
 */
	$(document).on('click', '#target2', function(){
    	$('#resultSpace').append(thirdResult);
	});

/**
 * Used to remove specific row of results from DOM
 * @return {delete} when a row's removeButton is clicked
 */
	$(document).on('click', '.removeButton', function(){
		$(this).closest('.row').remove();
	});

});