describe('Complimentor', function() {

  // For this you will have to create a new file in src.  Call it Complimentor.js
  // It will automatically get loaded by the test because of the fileset in karma.conf.js
  // There are a few different ways of defining objects in Javascript.
  // Pass this test and we will talk about the other options.
  it('should instantiate', function() {
    var complimentor = new Complimentor([]);

    expect(typeof complimentor).toEqual('object');
    expect(typeof complimentor.splitSentence).toEqual('function');
  });
  // Below here are more tests, so that you can see where we are going.
  // They are disabled for now.
  describe('sentence splitter should', function() {
    it('split a sentence into individual words', function() {
      var sentence = 'Roses are red';

      var complimentor = new Complimentor([]);

      expect(complimentor.splitSentence(sentence)).toEqual(['Roses', 'are', 'red']);
    });

    it('ignore punctuation (for now)', function() {
      var sentence = 'Roses, they are red.';

      var complimentor = new Complimentor([]);

      expect(complimentor.splitSentence(sentence)).toEqual(['Roses', 'they', 'are', 'red']);
    });
  });

  xit('should choose a likely word after the first two', function() {
    var sentence1 = 'Roses are red.';
    var sentence2 = 'Violets are blue.';

    var complimentor = new Complimentor([sentence1, sentence2]);

    var firstWord = complimentor.chooseFirst();
    expect(firstWord === 'Roses' || firstWord === 'Violets').toBe(true);
  });

  xit('should choose a likely word after the first two', function() {
    var sentence1 = 'This is a sentence.'
    var sentence2 = 'This is a similar sentence.';

    var complimentor = new Complimentor([sentence1, sentence2]);

    expect(complimentor.chooseNext('This', 'is')).toEqual('a');
  });
});
