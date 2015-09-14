

  // Comments in Javascript look like this

  // For now our javascript code will go here

  var thisIsAFunction = function(parameter) {
    // In javascript, functions are the most important things.
  };

  var thisIsAnObjectLiteral = {
    thisIsAProperty: 'some string',
    anotherProperty: true
  };

  var chandniIsAwesome = function() {
    return thisIsAnObjectLiteral.anotherProperty;
  };

  // This code is executed as soon as it is loaded by the browser

  if (chandniIsAwesome() === true) {
    // This is us, manipulating the DOM
    var outputElement = document.getElementById('ouput');
    outputElement.innerHTML = 'Of course.';
  }

  updateColors(colors);

  var selectCompliment = function(list) {
    return list[Math.round(Math.random(0, list.length - 1))];
  }

  if (chandniIsAwesome() === true) {
      var outputCompliment = document.getElementById('compliment');
  outputCompliment.innerHTML =  compliments[Math.round(Math.random()*compliments.length)];
  //selectCompliment(compliments);
  }


