///////////////////////////////////////////////
////////////// GLOBAL VARIABLES ///////////////
///////////////////////////////////////////////

var elementsOfMurder = '<div class="row rowBreak">' +
	'<div class="col-xs-2 elements"><span class="label label-success">Elements:</span></div>' +
	'<div class="col-xs-2" id="action"><button type="button" class="btn btn-default">Action</button></div>' +
	'<div class="col-xs-2" id="intent"><button type="button" class="btn btn-default">Intent</button></div>' +
	'<div class="col-xs-2" id="causation"><button type="button" class="btn btn-default">Causation</button></div>' +
	'<div class="col-xs-2"><button type="button" class="btn btn-default popover-btn" data-container="body" data-toggle="popover" data-placement="top" data-content="The victim must be an actual living person. In certain states, this includes a fetus.">Victim*</button></div>' +
	'<div class="col-xs-1"><button type="button" class="btn btn-default popover-btn" data-container="body" data-toggle="popover" data-placement="top" data-content="In most jurisdictions, the victim must die within one year of the defendant\'s actions.">Timing*</button></div>' +
	'</div>';

var actionResult = '<div class="row rowBreak">' +
	'<div class="col-xs-offset-2 col-xs-2"><button type="button" class="btn btn-default" id="action1">Voluntary Action</button></div>' +
	'<div class="col-xs-offset-1 col-xs-2"><button type="button" class="btn btn-default" id="action2">Involuntary Action</button></div>' +
	'<div class="col-xs-offset-1 col-xs-2"><button type="button" class="btn btn-default" id="action3">Failure to Act</button></div>' +
	'<div class="col-xs-offset-1 col-xs-1"><span class="glyphicon glyphicon-remove removeButton"></span></div>'
	'</div>';

var intentResult = '<div class="row rowBreak">' +
	'<div class="col-xs-offset-2 col-xs-2" id="intent1"><button type="button" class="btn btn-default">Intent to Kill</button></div>' +
	'<div class="col-xs-2" id="intent2"><button type="button" class="btn btn-default">Intent to Cause Serious Injury</button></div>' +
	'<div class="col-xs-offset-1 col-xs-2" id="intent3"><button type="button" class="btn btn-default">Depraved Heart</button></div>' +
	'<div class="col-xs-2" id="intent4"><button class="btn btn-default" data-toggle="modal" data-target=".bs-example-modal-lg">Doctrine of Felony Murder</button></div>' +
		'<div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">' +
  		'<div class="modal-dialog modal-lg">' +
    	'<div class="modal-content">' +
      		'<h3 class="modal-header">Doctrine of Felony Murder</h3>' +
      		'<ul><b>Definition:</b> An unintentional killing caused during the commission or attempted commission of a serious or inherently dangerous felony.</ul>' +
      		'<ul><b>Limitations:</b> Several limitations have been placed on the scope of this rule.</ul>' +
      		'<ul>(1) <em>Independence:</em> The underlying felony must be independent of the act causing the death. Therefore, where the underlying felony is murder, manslaughter, or aggravated assault, the defendant cannot be guily of felony murder.</ul>' +
      		'<ul>(2) <em>Inherently Dangerous Felony:</em> The underlying felony must be an inherently dangerous one - such as buglary, arson, robbery, rape, or kidnapping.</ul>' +
      		'<ul>(3) <em>Foreseeability:</em> The resulting death must be a foreseeable outgrowth of the defendant\'s actions. Most courts have generally been very liberal at applying the foreseeability requirement. Therefore, most deaths are considered foreseeable for purposes of felony murder.</ul>' +
      		'<ul>(4) <em>Timing:</em> The resulting death must occur during the commission of the felony. If a killing occurs while the defendant is fleeing from the scene of a felony, he may still be guilty of felony murder. However, if he has reached a place of temporary safety, the felony is deemed to have terminated and the defendant can no longer be found guilt of felony murder.</ul>' +
      		'<ul>(5) <em>Defenses:</em> Any defense to the underlying felony negates the felony murder.</ul>' +
      		'<ul>(6) <em>Redline Limitation:</em> A co-felon is not guilty of felony murder when the killing constitutes a justifiable or excusable homicide. For example, when the police or the victim shoot one of the co-felons but not when the killing is done by one of the felons.</ul>' +
    	'</div>' +
  		'</div>' +
		'</div>' +
	'<div class="col-xs-1"><span class="glyphicon glyphicon-remove removeButton"></span></div>'
	'</div>';

var causationResult = '<div class="row rowBreak">' +
	'<div class="col-xs-offset-2 col-xs-2" id="causation1"><button type="button" class="btn btn-default popover-btn" data-container="body" data-toggle="popover" data-placement="top" data-content="But-For Test: The victim\'s death would not have occurred but for the defendant\'s actions.">Cause-in-Fact*</button></div>' +
	'<div class="col-xs-2" id="causation2"><button type="button" class="btn btn-default popover-btn" data-container="body" data-toggle="popover" data-placement="top" data-content="When the victim\'s death was a natural and probable consquence of the defendant\'s conduct, the defendant may be guilty of murder even if he did not foresee the exact chain of events that resulted in the victim\'s death.">Proximate Cause*</button></div>' +
	'<div class="col-xs-2" id="causation3"><button type="button" class="btn btn-default popover-btn" data-container="body" data-toggle="popover" data-placement="top" data-content="When two or more people act simulataneously - yet independently - each may be guilty of murder.">Simultaneous Acts*</button></div>' +
	'<div class="col-xs-2" id="causation4"><button type="button" class="btn btn-default popover-btn" data-container="body" data-toggle="popover" data-placement="top" data-content="Unusual health conditions do not affect criminal liability.">Pre-Existing Condition*</button></div>' +
	'<div class="col-xs-offset-1 col-xs-1"><span class="glyphicon glyphicon-remove removeButton"></span></div>'
	'</div>';

var cases = '<div class="row rowBreak">' +
	'<div class="col-xs-offset-2 col-xs-2"><button type="button" class="btn btn-default" id="case1">Jones v. United States <br> 526 US 227 (1999)</button></div>' +
	'<div class="col-xs-offset-1 col-xs-2"><button type="button" class="btn btn-default" id="case2">United States v. Bailey <br> 444 US 394 (1980)</button></div>' +
	'<div class="col-xs-offset-1 col-xs-2"><button type="button" class="btn btn-default" id="case3">Holloway v. United States <br> 526 US 1 (1999)</button></div>' +
	'<div class="col-xs-offset-1 col-xs-1"><span class="glyphicon glyphicon-remove removeButton"></span></div>'
	'</div>';



$(document).on('ready', function() {
	
///////////////////////////////////////////////
//////////// INTRASITE NAVIGATION /////////////
///////////////////////////////////////////////

	// Inserts static username & password @ signIn
	$('.username').val('roy_mcfarland');
	$('.password').val('************');

	// Takes user @ Research Portal  
	$(document).on('click', '#myLogin', function(e){
		e.preventDefault();
		window.location.replace('file:///Users/student/projects/week5/midterm/research-portal.html');
	});

	// Returns user @ signIn
	$(document).on('click', '#logout', function() {
		window.location.replace('file:///Users/student/projects/week5/midterm/index.html')
	});

	// Returns user @ signIn
	$(document).on('click', '.navbar-brand', function() {
		window.location.replace('file:///Users/student/projects/week5/midterm/index.html')
	});

	// Takes user @ Research Portal  
	$(document).on('click', '#case1', function(){
		window.location.replace('http://scholar.google.com/scholar_case?case=15035002282262379891');
	});

	// Takes user @ Research Portal  
	$(document).on('click', '#case2', function(){
		window.location.replace('http://scholar.google.com/scholar_case?case=1379329779334955251');
	});

	// Takes user @ Research Portal  
	$(document).on('click', '#case3', function(){
		window.location.replace('http://scholar.google.com/scholar_case?case=8614464154510334483');
	});



///////////////////////////////////////////////
//////////////// EVENT HANDLERS ///////////////
///////////////////////////////////////////////

/**
 * Opt-in to popover actions in Bootstrap
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
 * @return {#action 1-3} that qualify as murderous
 */	
	$(document).on('click', '#action', function(){
		$('#resultSpace').append(actionResult);
	});

/**
 * Renders research results to DOM
 * @return {#intent 1-4} that qualify as murderous
 */
	$(document).on('click', '#intent', function(){
    	$('#resultSpace').append(intentResult);
	});

/**
 * Renders research results to DOM
 * @return {#causation 1-4} that qualify as murderous
 */
	$(document).on('click', '#causation', function(){
		$('#resultSpace').append(causationResult);
	});

/**
 * Renders research results to DOM
 * @return {#cases} pertaining to murderous intent
 */
	$(document).on('click', '#intent2', function(){
    	$('#resultSpace').append(cases);
	});

/**
 * Used to remove a specific row of results from DOM
 * @return {} when button is clicked
 */
	$(document).on('click', '.removeButton', function(){
		$(this).closest('.row').remove();
	});

});