// Dumb vars
// TODO: read from file
var ANS = '135713571';
var ansForm = document.getElementById("answers-form");
var ansSubmit = document.getElementById("answers-submit");
var guesses = document.querySelectorAll('.ans-input');
var err = 'err-highlight';

// Callback
ansForm.addEventListener("submit", function(evt) {
	evt.preventDefault();
	checkEm(this);
});

// Highlight bad fields
function checkEm(form) {
	var ansArr = ANS.split('');

	clearHighlights(err);
	for (var i = 0; i < ansArr.length; i++) {
		console.log(guesses[i].value);
		console.log(ansArr[i]);

		if(guesses[i].value !== ansArr[i]) {
			var ulli = document.getElementById('ans' + (i + 1));
			addHighlight(ulli, err);
		}
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