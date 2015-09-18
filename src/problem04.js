var answerProblem04 = function(list) {
	var outputElement = document.getElementById('compliment');
	outputElement.innerHTML = randomItemFromList(list);
};

var randomItemFromList = function(list) {
	var randomNumberInRange = Math.random()*list.length;
	var randomIndex = Math.round(randomNumberInRange);
	return list[randomIndex];
};