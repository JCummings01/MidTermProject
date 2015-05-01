// Quote App base class
var QuoteApp = function () {
  this.libraries = [];
  this.render();
  };
// Add Library method added to Quote App class
QuoteApp.prototype.addLibrary = function(library) {
  this.libraries.push(library);
  this.render();
};
// Render method added to QuoteApp
QuoteApp.prototype.render = function() {
  var buttonList = this.libraries.map(function(library){
    return library.addButton();
  });
  $('#scroller').append(buttonList);
};




// QuoteLibrary class
var QuoteLibrary = function(name) {
  this.name = name;
  this.quotelist = [];
  this.render();
};
// Add Quote method added to QuoteLibrary class
QuoteLibrary.prototype.addQuote = function(quote) {
  this.quotelist.push(quote);
  this.render();
};
// Button render method added to QuoteLibrary class
QuoteLibrary.prototype.addButton = function() {
  if(this.buttonel === undefined) {
  this.buttonel = $('#template')
    .clone()
    .attr('id', null)
    .attr('btn_', this.name)
    .addClass(this.name);
    var original = this;
    this.buttonel.on('click', function() {
      original.render();
    });
  }
    return this.buttonel;
};
// Render method added to QuoteLibrary class
QuoteLibrary.prototype.render = function() {
  if(this.el === undefined) {
  this.el = $('#quoteBox');
  }
  if (this.quotelist.length > 0) {
  var randIndex = Math.round(Math.random()*(this.quotelist.length-1));
  this.el.find('.quote-wording').text(this.quotelist[randIndex].quote);
  this.el.find('.quote-author').text(this.quotelist[randIndex].author);
}
};




// Quote Class & Constructor
var Quote = function (quote, author, theme, rating) {
  this.quote = quote;
  this.author = author;
  this.theme = theme;
  this.rating = 0;
};




// Loading Quote and Library Information Into App
var stressQuote1 = new Quote('Difficulties are things that show a person what they are.','Epictetus','Stress',1);
var stressQuote2 = new Quote('Today I escaped from anxiety. Or no, I discarded it, because it was within me, in my own perceptions—not outside.', 'Marcus Aurelius', 'Stress', 2);
var stressQuote3 = new Quote('Difficulties strengthen the mind, as labor does the body.', 'Seneca', 'Stress', 3);
var stressQuote4 = new Quote('If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.', 'Marcus Aurelius', 'Stress', 4);
var stressQuote5 = new Quote('The greatest remedy for anger is delay.', 'Seneca', 'Stress', 5);
var stress = new QuoteLibrary('stress');
stress.addQuote(stressQuote1);
stress.addQuote(stressQuote2);
stress.addQuote(stressQuote3);
stress.addQuote(stressQuote4);
stress.addQuote(stressQuote5);

var moneyQuote1 = new Quote('Wealth consists not in having great possessions, but in having few wants', 'Epictetus', 'Money', 1);
var moneyQuote2 = new Quote('If one oversteps the bounds of moderation, the greatest pleasures cease to please', 'Epictetus', 'Money', 2);
var moneyQuote3 = new Quote('Qui mori didicit servire dedidicit.', 'Seneca','Money', 3);
var moneyQuote4 = new Quote('It is not the man who has too little that is poor, but the one who hankers after more.', 'Seneca', 'Money', 4);
var moneyQuote5 = new Quote('Until we have begun to go without them, we fail to realize how unnecessary many things are. We\'ve been using them not because we needed them but because we had them.', 'Seneca', 'Money', 5);
var money = new QuoteLibrary('money');
money.addQuote(moneyQuote1);
money.addQuote(moneyQuote2);
money.addQuote(moneyQuote3);
money.addQuote(moneyQuote4);
money.addQuote(moneyQuote5);

var loveQuote1 = new Quote('Remember to act always as if you were at a symposium. That is how Diogenes, Heraclitus and philosophers like them came to be called, and considered, divine.', 'Epictetus', 'Love', 1);
var loveQuote2 = new Quote('You know yourself what you are worth in your own eyes; and at what price you will sell yourself.', 'Epictetus', 'Love', 1);
var loveQuote3 = new Quote('It takes more than just a good looking body. You\'ve got to have the heart and soul to go with it.', 'Epictetus', 'Love', 3);
var loveQuote4 = new Quote('Conversation has a kind of charm about it, an insinuating and insidious something that elicits secrets just like love or liquor', 'Seneca','Love', 4);

var love = new QuoteLibrary('love');
love.addQuote(loveQuote1);
love.addQuote(loveQuote2);
love.addQuote(loveQuote3);
love.addQuote(loveQuote4);

var sadQuote1 = new Quote('You know yourself what you are worth in your own eyes; and at what price you will sell yourself.', 'Epictetus', 'Sad', 1);
var sadQuote2 = new Quote('The key is to keep company only with people who uplift you, whose presence calls forth your best','Epictetus','Sad', 2);
var sadQuote3 = new Quote('Remembering that the whole world class has to exist will make you more tolerant of its members.', 'Marcus Aurelius', 'Sad', 3);
var sadQuote4 = new Quote('Remember, it is not enough to be hit or insulted to be harmed, you must believe that you are being harmed. If someone succeeds in provoking you, realize that your mind is complicit in the provocation.', 'Epictetus', 'Sad', 4);

var sad = new QuoteLibrary('sad');
sad.addQuote(sadQuote1);
sad.addQuote(sadQuote2);
sad.addQuote(sadQuote3);
sad.addQuote(sadQuote4);

var improveQuote1 = new Quote('If you want to improve, be content to be thought foolish and stupid', 'Epictetus', 'Improve', 1);
var improveQuote2 = new Quote('We must endeavor with all our resources and all our strength to become capable of doctoring ourselves.', 'Cicero', 'Improve', 2);
var improveQuote3 = new Quote('Associate with people who are likely to improve you', 'Seneca', 'Improve', 3);
var improveQuote4 = new Quote('If you apply yourself to study you will avoid all boredom with life, you will not long for night because you are sick of daylight, you will be neither a burden to yourself nor useless to others, you will attract many to become your friends and the finest people will flock about you.', 'Seneca', 'Improve', 4);
var improve = new QuoteLibrary('improve');
improve.addQuote(improveQuote1);
improve.addQuote(improveQuote2);
improve.addQuote(improveQuote3);
improve.addQuote(improveQuote4);

var myApp = new QuoteApp();
myApp.addLibrary(stress);
myApp.addLibrary(money);
myApp.addLibrary(love);
myApp.addLibrary(sad);
myApp.addLibrary(improve);

//Last Step
$('body').append(myApp.render());