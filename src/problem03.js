// Chandni: Why is there no problem 3?  :)  More easy problems please!
// Can you teach me how to add html into different parts of everything.html using JS only?
// I would like to add the comment Steven is awesome after problem two's answer

// Steven: Notice how I classes to the HTML to find the correct place to insert this answer.

var answerProblem03 = function() {
	var answerP2 = document.querySelector('.answer.p2');
	answerP2.insertAdjacentHTML('afterend', '<h3>Problem 2.5:</h3><p>Steven is awesome.</p>');
}
