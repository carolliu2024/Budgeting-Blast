onEvent("role1", "click", function( ) {
	console.log("role1 clicked!");
	setScreen("NPC1");
});
var dialogueCount = 0;
var dialogue = ["First of all, what are needs?", 
	                "Needs are items essential to survival, as shown above.", 
	                "Once you've got the idea, let's do your first task!"];
onEvent("next", "click", function( ) {
	console.log("next clicked!");
	setText("npcText1", dialogue[dialogueCount]);
	if (dialogueCount == 0) {
	  showElement("needsSlide");
	}
	if (dialogueCount != dialogue.length-1) {
	  dialogueCount = dialogueCount + 1;
	} else {
	  hideElement("next");
	  showElement("next2", "Next");
	  dialogueCount = 0;
	}
});
onEvent("next2", "click", function( ) {
	console.log("next2 clicked!");
	setScreen("minigame1");
});
onEvent("back", "click", function( ) {
	console.log("back clicked!");
	setScreen("NPC1");
});
onEvent("start1", "click", function( ) {
	console.log("start1 clicked!");
	var hide1 = ["instructions1", "txtBackground2", "back", "start1"];
	var show1 = ["nonNeed1", "nonNeedLabel1","nonNeed2","nonNeedLabel2","need1","needLabel1"];
	for (var i = 0; i < hide1.length; i++) {
	  hideElement(hide1[i]);
	}
	for (var j = 0; j < show1.length; j++) {
	  showElement(show1[j]);
	}
});
var left = 2;
onEvent("nonNeed1", "click", function( ) {
	console.log("nonNeed1 clicked!");
	hideElement("nonNeed1");
	hideElement("nonNeedLabel1");
	left--;
	if (left == 0) {
	  setScreen("postMinigame1");
	  left = 2;
	}
	setText("score1", "Non-needs left: " + left);
});
onEvent("nonNeedLabel1", "click", function( ) {
	console.log("nonNeedLabel1 clicked!");
	hideElement("nonNeed1");
	hideElement("nonNeedLabel1");
	left--;
	if (left == 0) {
	  setScreen("postMinigame1");
	  left = 2;
	}
	setText("score1", "Non-needs left: " + left);
});
onEvent("nonNeed2", "click", function( ) {
	console.log("nonNeed2 clicked!");
	hideElement("nonNeed2");
	hideElement("nonNeedLabel2");
	left--;
	if (left == 0) {
	  setScreen("postMinigame1");
	  left = 2;
	}
	setText("score1", "Non-needs left: " + left);
});
onEvent("nonNeedLabel2", "click", function( ) {
	console.log("nonNeedLabel2 clicked!");
	hideElement("nonNeed2");
	hideElement("nonNeedLabel2");
	left--;
	if (left == 0) {
	  setScreen("postMinigame1");
	  left = 2;
	}
	setText("score1", "Non-needs left: " + left);
});
onEvent("need1", "click", function( ) {
	console.log("need1 clicked!");
	showElement("wrong1");
	setTimeout(function() {
	  hideElement("wrong1");
	}, 2000);
});
var clickCount = 0;
onEvent("next3", "click", function( ) {
	console.log("next3 clicked!");
	clickCount++;
	if (clickCount <= 1) {
	  setText("npcText2", "Let's take a look at your 'stats' next!");
	} else {
	  setScreen("charStats");
	  clickCount = 0;
	}
});
onEvent("next4", "click", function( ) {
	console.log("next4 clicked!");
	clickCount++;
	if (clickCount == 1) {
	  setText("label26", "Eventually, you will build a rough budgeting plan. The more optimal your budget plan, the more likely you are to increase savings over time.");
	} else if (clickCount == 2) {
	  setText("label26", "Later, you will learn what might be an 'optimal' budget plan; for example, it may adhere closely to the 50/30/20 budgeting rule.");
	} else {
	  setScreen("shopping");
	}
});
onEvent("next6", "click", function( ) {
	console.log("next6 clicked!");
	setScreen("city");
	clickCount = 0;
});
onEvent("next5", "click", function( ) {
	console.log("next6 clicked!");
	if (clickCount == 0) {
	  setText("label30", "You may still be able to stay on track when it comes to savings, even with unexpected costs. The way you save and budget can help you prepare for them. In addition, failure to land a job the first time should not stop you from trying again!");
	  clickCount++;
	} else {
	  setScreen("screen9");
	}
});
onEvent("leaderboards", "click", function( ) {
	console.log("leaderboards clicked!");
	setScreen("Leaderboards");
});
onEvent("back2", "click", function( ) {
	console.log("back2 clicked!");
	setScreen("charStats");
});
onEvent("start", "click", function( ) {
	console.log("start clicked!");
	setScreen("rolePick");
});
