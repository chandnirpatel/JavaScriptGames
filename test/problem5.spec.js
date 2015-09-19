// Let's write a class for adding new quetions and answers to the page
describe('Question Adder', function() {
  var questioner;

  beforeEach(function() {
    document.querySelector('body').innerHTML = '<h3>Problem 1</h3><p class="answer">the first answer.</p>';
    questioner = new Questioner();
  });

  it('should add a question to the page after the first one', function() {
      expect(document.querySelectorAll('.answer').length).toBe(1);

      var theAnswer = 'To get to the other side.';
      questioner.addQuestion(2, 'Why did the chicken cross the road?', theAnswer);

      expect(document.querySelectorAll('.answer').length).toBe(2);
      expect(document.querySelectorAll('.answer')[1].innerHTML).toBe(theAnswer);
  });

  xit('should add two questions to the page', function() {
      expect(document.querySelectorAll('.answer').length).toBe(1);

      questioner.addQuestion(2, 'Why did the chicken cross the road?', 'To get to the other side.');

      var theAnswer3 = "It's a great little number, but you've probably never heard of it.";
      questioner.addQuestion(3, "How many hipster's does it take to screw in a lightbulb?", theAnswer3);

      expect(document.querySelectorAll('.answer').length).toBe(3);
      expect(document.querySelectorAll('.answer')[2].innerHTML).toBe(theAnswer3);
  });
});
