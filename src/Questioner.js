var Questioner = function() {
	return {
		addQuestion: function(num, question, answer){
			var answers = document.querySelectorAll('.answer');
			if (answers.length == 0) {
				var lastAnswer = document.body; //should I handle if a body doesn't exist?
			} else {
				var lastAnswer = answers[answers.length-1];
			};

			lastAnswer.insertAdjacentHTML('afterend', '<h3>Problem '+num+'</h3><p class="question">'+question+'</p><p class="answer">'+answer+'</p>');
		}
	};
}