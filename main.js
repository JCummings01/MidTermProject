// Library of Quotes
var quoteLibrary = [{
  quote: 'Difficulties are things that show a person what they are.',
  author:  'Epictetus',
  theme: 'Stress'
  },
  {
  quote: 'Today I escaped from anxiety. Or no, I discarded it, because it was within me, in my own perceptions—not outside.',
  author:  'Marcus Aurelius',
  theme: 'Stress'
  },
  {
  quote: 'Difficulties strengthen the mind, as labor does the body.',
  author:  'Seneca',
  theme: 'Stress'
  },
  {
  quote: 'Wealth consists not in having great possessions, but in having few wants',
  author: 'Epictetus',
  theme: 'Money'
  },
  {
  quote:'Associate with people who are likely to improve you',
  author: 'Seneca',
  theme: 'Money'
  },
  {
  quote: 'Qui mori didicit servire dedidicit.',
  author: 'Seneca',
  theme: 'Money'
  },
  {
  quote: 'Remember to act always as if you were at a symposium. When the food or drink comes around, reach out and take some politely; if it passes you by don\'t try pulling it back. And if it has not reached you yet, don\'t let your desire run ahead of you, be patient until your turn comes. Adopt a similar attitude with regard to children, wife, wealth and status, and in time, you will be entitled to dine with the gods. Go further and decline these goods even when they are on offer and you will have a share in the gods\' power as well as their company. That is how Diogenes, Heraclitus and philosophers like them came to be called, and considered, divine.',
  author: 'Epictetus',
  theme: 'Love'
  },
  {
  quote: 'The key is to keep company only with people who uplift you, whose presence calls forth your best',
  author:  'Epictetus',
  theme: 'Love'
  },
  {
  quote: 'It takes more than just a good looking body. You\'ve got to have the heart and soul to go with it.',
  author: 'Epictetus',
  theme: 'Love'
  },
  {
  quote: 'Conversation has a kind of charm about it, an insinuating and insidious something that elicits secrets just like love or liquor',
  author: 'Seneca',
  theme: 'Love'
  },
];

// Quote Constructor
var Quote = function (quote, author) {
  this.quote = quote;
  this.author = author;
  this.render();
};
// Quote Render prototype
Quote.prototype.render = function () {
  if(!this.el){
    this.el = $('#quote-tpl');
  }
  this.el.find('.quote-wording').text(this.quote);
  this.el.find('.quote-author').text(this.author);
  return this.el;
};
// QuoteBank Constructor
var QuoteBank = function (quote) {
  this.quote = quote;
  this.quotes = [];
  this.render();
};
// QuoteBank Add Quote prototype
QuoteBank.prototype.addQuote = function (quote) {
  this.quotes.push(quote);
  this.render();
};
// QuoteBank Form Submit prototype
QuoteBank.prototype.onFormSubmit = function (e) {
  e.preventDefault();
var quoteWording = $(e.currentTarget).find('[name=quote-wording]').val();
var quoteAuthor = $(e.currentTarget).find('[name=quote-author]').val();
var newQuote = new Quote(quoteWording, quoteAuthor);
this.addQuote(newQuote);
};

// Theme Button Click Handlers
$('#obstacleButton').on('click', function() {
  this.quote = staticQuoteBank[0][1].quote;
  this.author = staticQuoteBank[0][1].author;
  var pulledQuote = new Quote(this.quote, this.author);
  pulledQuote.render();
});
$('#moneyButton').on('click', function() {
  this.quote = staticQuoteBank[1][1].quote;
  this.author = staticQuoteBank[1][1].author;
  var pulledQuote = new Quote(this.quote, this.author);
  pulledQuote.render();
});
$('#loveButton').on('click', function() {
  this.quote = staticQuoteBank[1][1].quote;
  this.author = staticQuoteBank[1][1].author;
  var pulledQuote = new Quote(this.quote, this.author);
  pulledQuote.render();
});
// Attempt to make 'Button Click Handler' modular
QuoteBank.prototype.onThemeButtonClick = function() {

  this.addQuote(pullQuote);
};

$( document ).ready(function() {
// render icons for library themes
var
});

