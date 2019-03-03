// Dumb vars
// TODO: read from file
var ANS = ['5','3','4','8','2','8','1','7','9'];
var ansSubmit = document.getElementById("answers-submit");
var ansForm = document.getElementById("answers-form");
var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");
var ans4 = document.getElementById("ans4");
var ans5 = document.getElementById("ans5");
var ans6 = document.getElementById("ans6");
var ans7 = document.getElementById("ans7");
var ans8 = document.getElementById("ans8");
var ans9 = document.getElementById("ans9");
var err = 'err-highlight';

// Callback
ansForm.addEventListener("submit", function(evt) {
	evt.preventDefault();
	checkEm(this);
});

// Highlight bad fields
function checkEm(form) {

	clearHighlights(err);

	// Add loop.
	if(form.ans1.value != ANS[0]) {
		addHighlight(ans1, err);
	}

}

function addHighlight(el, className) {
	if (el.classList)
		el.classList.add(className);
	else
		el.className += ' ' + className;
}

function clearHighlights(className) {
	var els = document.querySelectorAll('ul li');
	for (var i = 0; i < els.length; i++) {
		els[i].classList.remove(className)
	}

}