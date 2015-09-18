var answerProblem02 = function() {
	updateColors(colors);
};

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// A method to assign the correct color names to the correct <span> elements
var updateColors = function(colors) {
	for (var i = 0; i < colors.length; i++) {
		var outputElement = document.getElementById('color'+(i+1));
    	outputElement.innerHTML = colors[i];
	};
};


