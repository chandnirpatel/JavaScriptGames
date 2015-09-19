var Questioner = function() {
	return {
		addQuestion: function(num, question, answer){
			var answers = document.querySelectorAll('.answer');
			var lastAnswer = answers[answers.length-1];

			lastAnswer.insertAdjacentHTML('afterend', '<h3>Problem 2.5:</h3><p class="question">'+question+'</p><p class="answer">'+answer+'</p>');
		}
	};
}