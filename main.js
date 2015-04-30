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
    .text(this.name)
    .attr('id', null)
    .attr('btn_', this.name)
    .addClass(this.name);
    var original = this;
    this.buttonel.on('click', function() {
      console.log(original);
      original.render();
    });
  }
    return this.buttonel;
};
// Render method added to QuoteLibrary class
QuoteLibrary.prototype.render = function() {
  this.el = $('#quoteBox');
  // this.el.find('.quote-wording').text(this.quote);
  // this.el.find('.quote-author').text(this.author);
  return this.el;
};





// Quote Class & Constructor
var Quote = function (quote, author, theme, rating) {
  this.quote = quote;
  this.author = author;
  this.theme = theme;
  this.rating = 0;
};
// Add a render function to the Quote class
// Quote.prototype.render = function() {
//   this.el = $('#quoteBox');
//   this.el.find('.quote-wording').text(this.quote);
//   this.el.find('.quote-author').text(this.author);
//   return this.el;
//
// Add a click handler for theme button clicks
$('#scroller').on('click', function() {
console.log('click!');
this.name

});
// var tempLibrary =
// });



// Loading Quote Information Into App
var stressQuote1 = new Quote('Difficulties are things that show a person what they are.','Epictetus','Stress',1);
var stressQuote2 = new Quote('Today I escaped from anxiety. Or no, I discarded it, because it was within me, in my own perceptions—not outside.', 'Marcus Aurelius', 'Stress', 2);
var stressQuote3 = new Quote('Difficulties strengthen the mind, as labor does the body.', 'Seneca', 'Stress', 3);
var stress = new QuoteLibrary('stress');
stress.addQuote(stressQuote1);
stress.addQuote(stressQuote2);
stress.addQuote(stressQuote3);


var moneyQuote1 = new Quote('Wealth consists not in having great possessions, but in having few wants', 'Epictetus', 'Money', 1);
var moneyQuote2 = new Quote('Associate with people who are likely to improve you', 'Seneca', 'Money', 2);
var moneyQuote3 = new Quote('Qui mori didicit servire dedidicit.', 'Seneca','Money', 3);
var money = new QuoteLibrary('money');
money.addQuote(moneyQuote1);
money.addQuote(moneyQuote2);
money.addQuote(moneyQuote3);


var loveQuote1 = new Quote('Remember to act always as if you were at a symposium. That is how Diogenes, Heraclitus and philosophers like them came to be called, and considered, divine.', 'Epictetus', 'Love', 1);
var loveQuote2 = new Quote('The key is to keep company only with people who uplift you, whose presence calls forth your best','Epictetus','Love', 2);
var loveQuote3 = new Quote('It takes more than just a good looking body. You\'ve got to have the heart and soul to go with it.', 'Epictetus', 'Love', 3);
var loveQuote4 = new Quote('Conversation has a kind of charm about it, an insinuating and insidious something that elicits secrets just like love or liquor', 'Seneca','Love', 4);

var love = new QuoteLibrary('love');
love.addQuote(loveQuote1);
love.addQuote(loveQuote2);
love.addQuote(loveQuote3);
love.addQuote(loveQuote4);


var myApp = new QuoteApp();
myApp.addLibrary(stress);
myApp.addLibrary(money);
myApp.addLibrary(love);

//Last Step
$('body').append(myApp.render());
console.dir(money);
console.dir(love);
console.dir(stress);
