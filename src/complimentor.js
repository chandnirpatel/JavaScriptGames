var Complimentor = function(sentences) {
	return {
		splitSentence: function(sentence){
			return sentence.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'').split(' ');
		},
		chooseFirst: function(){
			return this.splitSentence(sentences[0])[0];
		}
	};
}