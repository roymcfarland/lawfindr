///////////////////////////////////////////////
////////////// GLOBAL VARIABLES ///////////////
///////////////////////////////////////////////

var elementsOfMurder = '<div class="row rowBreak">' +
	'<div class="col-xs-2 elements"><span class="label label-success">Elements:</span></div>' +
	'<div class="col-xs-offset-1 col-xs-2" id="action"><button type="button" class="btn btn-default">Action</button></div>' +
	'<div class="col-xs-offset-1 col-xs-2" id="intent"><button type="button" class="btn btn-default">Intent</button></div>' +
	'<div class="col-xs-offset-1 col-xs-2" id="causation"><button type="button" class="btn btn-default">Causation</button></div>' +
	'</div>';

var actionResult = '<div class="row rowBreak">' +
  	'<div class="col-xs-offset-2 col-xs-3">' +
    	'<div class="thumbnail">' +
      		'<img src="images/action1.jpg">' +
      	'<div class="caption">' +
        	'<h3>Voluntary Action</h3>' +
        	'<p>No crime can be committed by bad thoughts alone. Instead, the defendant\'s act must result from his or her conscious choice. The choice need not be the product of thorough deliberation but may stem from an impulse. For example, a person who suddenly slips on a mountain trail and reaches out to grab the arm of a bystander to avoid falling has acted voluntarily because his mind has quickly grasped the situation and dictated a response.</p>' +
        	'<ul id="cases-action1">' +
        		'<li>Case 1:</li>' +
        	'</ul>' +
        	'<p><a href="#" class="btn btn-primary" id="action1" role="button">Cases</a></p>' +
      	'</div>' +
    	'</div>' +
  	'</div>' +
  	 '<div class="col-xs-3">' +
    	'<div class="thumbnail">' +
      		'<img src="images/action2.jpg">' +
      	'<div class="caption">' +
        	'<h3>Involuntary Action</h3>' +
        	'<p>Acts over which a person has no physical or mental control are not voluntary. A muscle reflex driven by the autonomic nervous system, such as a knee jerk, is not considered voluntary under the law. Acts committed during seizures, convulsions, hypnosis, or unconscious mental states also lack sufficient volition and judgment needed to impose criminal liability. For the same reasons, acts committed during episodes of sleepwalking are not considered voluntary.</p>' +
        	'<ul id="cases-action2">' +
        		'<li>California v. Ebanks: the court rejected defendant\'s argument that he acted involuntarily when murder ex-wife because he was drunk and hypnotized. The judge bluntly remarked that \"[t]he law of the United States does not recognize hypnotism.\"</li>' +
        	'</ul>' +
        	'<p><a href="#" class="btn btn-primary" id="action2" role="button">Cases</a></p>' +
      	'</div>' +
    	'</div>' +
  	'</div>' +
  	'<div class="col-xs-3">' +
    	'<div class="thumbnail">' +
      		'<img src="images/action3.jpg">' +
      	'<div class="caption">' +
        	'<h3>Failure to Act</h3>' +
        	'<p>A person who creates a dangerous situation may be under a duty to take reasonable steps to avert that danger. Similarly, there may be a statutory duty to prevent harm when the defendant is acting under a contractual duty or other form of fiduciary responsibility.</p>' +
        	'<ul id="cases-action3">' +
        		'<li>R v. Miller: Defendant was guilty of murder for burning down an apartment building. He fell asleep on his mattress while smoking a cigarette. When he woke, he found that the mattress was smouldering but, instead of calling for help, he simply moved into another room, which allowed the fire to spread.</li>' +
        		'<li>R v. Pittwood: Defendant was convicted of manslaughter after he failed to close the gate on a level crossing as he was contracted to do. This caused a train to collide with a hay cart, and the court ruled that a man \'might\' incur criminal liability from a duty arising out of contract.</li>' +
        	'</ul>' +
        	'<button type="button" class="btn btn-primary" id="action3" role="button">Cases</button>' +
      	'</div>' +
    	'</div>' +
  	'</div>' +
	'<div class="col-xs-1"><span class="glyphicon glyphicon-remove removeButton"></span></div>'
	'</div>';

var intentResult = '<div class="row rowBreak">' +
	'<div class="col-xs-offset-2 col-xs-3">' +
    	'<div class="thumbnail">' +
      		'<img src="images/intent1.png">' +
      	'<div class="caption">' +
        	'<h3>Intent to Kill</h3>' +
        	'<p>A person who creates a dangerous situation may be under a duty to take reasonable steps to avert that danger. Similarly, there may be a statutory duty to prevent harm when the defendant is acting under a contractual duty or other form of fiduciary responsibility.</p>' +
        	'<ul id="cases-intent1">' +
        		'<li></li>' +
        		'<li></li>' +
        	'</ul>' +
        	'<button type="button" class="btn btn-primary" id="intent1" role="button">Cases</button>' +
      	'</div>' +
    	'</div>' +
  	'</div>' +
  	'<div class="col-xs-offset-2 col-xs-3">' +
    	'<div class="thumbnail">' +
      		'<img src="images/intent2.jpg">' +
      	'<div class="caption">' +
        	'<h3>Intent to Cause Serious Injury</h3>' +
        	'<p>If a defendant kills another person unintentionally, he or she can still be guilty of murder if it can be shown that the defendant intended to cause great bodily injury to the victim.</p>' +
        	'<ul id="cases-intent2">' +
        		'<li></li>' +
        		'<li></li>' +
        	'</ul>' +
        	'<button type="button" class="btn btn-primary" id="intent2" role="button">Cases</button>' +
      	'</div>' +
    	'</div>' +
  	'</div>' +
	'<div class="col-xs-offset-1 col-xs-1"><span class="glyphicon glyphicon-remove removeButton"></span></div>' +
	'</div>';

var causationResult = '<div class="row rowBreak">' +
	'<div class="col-xs-offset-2 col-xs-3">' +
    	'<div class="thumbnail">' +
      		'<img src="images/causation1.jpg">' +
      	'<div class="caption">' +
        	'<h3>Cause-in-Fact</h3>' +
        	'<p>But-For Test: The victim\'s death would not have occurred but for the defendant\'s actions.</p>' +
        	'<ul id="cases-causation1">' +
        		'<li></li>' +
        		'<li></li>' +
        	'</ul>' +
        	'<button type="button" class="btn btn-primary" id="causation1" role="button">Cases</button>' +
      	'</div>' +
    	'</div>' +
  	'</div>' +
	'<div class="col-xs-3">' +
    	'<div class="thumbnail">' +
      		'<img src="images/causation2.jpg">' +
      	'<div class="caption">' +
        	'<h3>Proximate Cause</h3>' +
        	'<p>When the victim\'s death was a natural and probable consquence of the defendant\'s conduct, the defendant may be guilty of murder even if he did not foresee the exact chain of events that resulted in the victim\'s death.</p>' +
        	'<ul id="cases-causation2">' +
        		'<li></li>' +
        		'<li></li>' +
        	'</ul>' +
        	'<button type="button" class="btn btn-primary" id="causation2" role="button">Cases</button>' +
      	'</div>' +
    	'</div>' +
  	'</div>' +
	'<div class="col-xs-3">' +
    	'<div class="thumbnail">' +
      		'<img src="images/causation3.jpg">' +
      	'<div class="caption">' +
        	'<h3>Simultaneous Events</h3>' +
        	'<p>When two or more people act simulataneously - yet independently - each may be guilty of murder.</p>' +
        	'<ul id="cases-causation3">' +
        		'<li></li>' +
        		'<li></li>' +
        	'</ul>' +
        	'<button type="button" class="btn btn-primary" id="causation3" role="button">Cases</button>' +
      	'</div>' +
    	'</div>' +
  	'</div>' +
	'<div class="col-xs-1"><span class="glyphicon glyphicon-remove removeButton"></span></div>' +
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
	$(document).on('click', '#search', function(){
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

	$(document).on('click', '#action1', function(){
		$('#cases-action1').slideDown('slow');
	});

	$(document).on('click', '#action2', function(){
		$('#cases-action2').slideDown('slow');
	});

	$(document).on('click', '#action3', function(){
		$('#cases-action3').slideDown('slow');
	});


/**
 * Renders research results to DOM
 * @return {#intent 1-2} that qualify as murderous
 */
	$(document).on('click', '#intent', function(){
    	$('#resultSpace').append(intentResult);
	});

	$(document).on('click', '#intent1', function(){
		$('#cases-intent1').slideDown('slow');
	});

	$(document).on('click', '#intent2', function(){
		$('#cases-intent2').slideDown('slow');
	})


/**
 * Renders research results to DOM
 * @return {#causation 1-3} that qualify as murderous
 */
	$(document).on('click', '#causation', function(){
		$('#resultSpace').append(causationResult);
	});

	$(document).on('click', '#causation1', function(){
		$('#cases-causation1').slideDown('slow');
	});

	$(document).on('click', '#causation2', function(){
		$('#cases-causation2').slideDown('slow');
	});

	$(document).on('click', '#causation3', function(){
		$('#cases-causation3').slideDown('slow');
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