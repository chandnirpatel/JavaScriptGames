var Complimentor = function() {
	return {
		splitSentence: function(sentence){
			return sentence.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'').split(' ');
		}
	};
}