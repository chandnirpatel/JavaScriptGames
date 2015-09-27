var Questioner = function() {
	return {
		addQuestion: function(num, question, answer){
			var answers = document.querySelectorAll('.answer');
			if (answers.length === 0) {
				// Q: should I handle if a body doesn't exist?
				// A: In most regards Javascript code usually assumes a valid HTML document, which must always have a body element.
				var questionHeader = document.createElement("h3");
				var questionHeaderText = document.createTextNode("Problem " +num);
				questionHeader.appendChild(questionHeaderText);
				document.body.appendChild(questionHeader);
				questionHeader.insertAdjacentHTML('afterend', '<p class="question">'+question+'</p><p class="answer">'+answer+'</p>');
			} else {
				answers[answers.length-1].insertAdjacentHTML('afterend', '<h3>Problem '+num+'</h3><p class="question">'+question+'</p><p class="answer">'+answer+'</p>');
			};

		}
	};
}
