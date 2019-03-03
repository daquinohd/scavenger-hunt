			var ansSubmit = document.getElementById("answers-submit");
			var ansForm = document.getElementById("answers-form");

			ansForm.addEventListener("submit", function(evt) {
				evt.preventDefault();
				fillArray();
			});

			function fillArray() {
				alert('**** me');
			}