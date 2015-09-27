var Questioner = function() {
	return {
		addQuestion: function(num, question, answer){
			var answers = document.querySelectorAll('.answer');
			if (answers.length === 0) {
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
