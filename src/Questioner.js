var Questioner = function() {
	return {
		addQuestion: function(num, question, answer){
			var answerP2 = document.querySelector('.answer');
			answerP2.insertAdjacentHTML('afterend', '<h3>Problem 2.5:</h3><p class="question">'+question+'</p><p class="answer">'+answer+'</p>');
		}
	};
}