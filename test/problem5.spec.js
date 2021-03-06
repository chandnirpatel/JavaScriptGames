// Let's write a class for adding new quetions and answers to the page
describe('Question Adder', function() {
  var questioner;

  beforeEach(function() {
    document.querySelector('body').innerHTML = '';
    questioner = new Questioner();
  });

  it('should add a question', function() {
      expect(document.querySelectorAll('.answer').length).toBe(0);
      expect(document.querySelectorAll('.question').length).toBe(0);

      var theQuestion = 'Why did the chicken cross the road?';
      var theAnswer = 'To get to the other side.';
      questioner.addQuestion(1, theQuestion, theAnswer);

      // The code currently creates a document with 2 body elements, which is invalid HTML.
      console.log('document: ' + document.documentElement.innerHTML);
      expect(document.querySelectorAll('body').length).toBe(1);

      expect(document.querySelectorAll('.answer').length).toBe(1);
      expect(document.querySelectorAll('.question').length).toBe(1);
      expect(document.querySelectorAll('.answer')[0].innerHTML).toBe(theAnswer);
      expect(document.querySelectorAll('.question')[0].innerHTML).toBe(theQuestion);
      expect(document.querySelectorAll('h3')[0].innerHTML).toBe('Problem 1');
  });

  it('should add a question to the page after the first one', function() {
      expect(document.querySelectorAll('.answer').length).toBe(0);
      expect(document.querySelectorAll('.question').length).toBe(0);
      expect(document.querySelectorAll('body').length).toBe(1);


      var theQuestion = 'Why did the chicken cross the road?'
      var theAnswer = 'To get to the other side.';
      questioner.addQuestion(2, theQuestion, theAnswer);

      expect(document.querySelectorAll('.answer').length).toBe(1);
      expect(document.querySelectorAll('.question').length).toBe(1);
      expect(document.querySelectorAll('.answer')[0].innerHTML).toBe(theAnswer);
      expect(document.querySelectorAll('.question')[0].innerHTML).toBe(theQuestion);
      expect(document.querySelectorAll('h3')[0].innerHTML).toBe('Problem 2');
  });

  it('should add two questions to the page', function() {
      expect(document.querySelectorAll('.answer').length).toBe(0);
      expect(document.querySelectorAll('.question').length).toBe(0);
      expect(document.querySelectorAll('body').length).toBe(1);


      questioner.addQuestion(2, 'Why did the chicken cross the road?', 'To get to the other side.');

      var theQuestion3 = "How many hipster's does it take to screw in a lightbulb?";
      var theAnswer3 = "It's a great little number, but you've probably never heard of it.";
      questioner.addQuestion(3, "How many hipster's does it take to screw in a lightbulb?", theAnswer3);

      expect(document.querySelectorAll('.answer').length).toBe(2);
      expect(document.querySelectorAll('.question').length).toBe(2);
      expect(document.querySelectorAll('.answer')[1].innerHTML).toBe(theAnswer3);
      expect(document.querySelectorAll('.question')[1].innerHTML).toBe(theQuestion3);
      expect(document.querySelectorAll('h3')[1].innerHTML).toBe('Problem 3');
  });
});
