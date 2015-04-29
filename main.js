// Library of Quotes
var allQuotes = [stressQuotes, moneyQuotes, loveQuotes];
var stressQuotes = [{
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
  }];
var moneyQuotes = [{
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
  }];
var loveQuotes = [{
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
  }];
var buttons = [{
  theme: 'stress',
  icon: 'glyphicon glyphicon-warning-sign'
  },
  {
  theme: 'money',
  icon: 'glyphicon glyphicon-usd'
  },
  {
  theme:'love',
  icon: 'glyphicon glyphicon-heart'
  },
  {
  theme: 'add',
  icon: 'glyphicon glyphicon-plus-sign'
  }];



  // QuoteApp base class
  var QuoteApp = function () {
    this.libraries = [];
    this.render();
    };
  QuoteApp.prototype.render = function() {
    QuoteLibrary.render();
    QuoteLibrary.renderButton();
    QuoteLibrary.renderViewBlock();
    };
  //
  //
  //
  // QuoteLibrary class
  var QuoteLibrary = function(name) {
    this.name = name;
    this.quotelist = [];
    this.render();
    };
  QuoteLibrary.prototype.render = function () {
    Quote.render();
    };
  // Add render method to QuoteLibrary class
  QuoteLibrary.prototype.renderViewBlock = function() {
  // render a viewblock
    this.el = $('#quote-tpl');
    this.el.find('.quote-wording').text(this.quote);
    this.el.find('.quote-author').text(this.author);
    return this.el;
    };
  QuoteLibrary.prototype.renderButton = function() {
    // render a button
    $('<button/>')
      .text(name)
      .attr('btn_', name);
      //addClass();
      onClick = function () { alert('hi');
      };
      };
  //QuoteLibrary.prototype.loader = function() {
    //I DONT KNOW WHAT GOES HERE

  //
  //
  //
  // Quote Class & Constructor
  var Quote = function (quote, author) {
    this.quote = quote;
    this.author = author;
    this.render();
    };
  Quote.prototype.render = function() {
    var quote = $(e.currentTarget).find('[name=quote-wording]').val();
    var author = $(e.currentTarget).find('[name=quote-author]').val();
    var newQuote = new Quote(quote, author);
    };



    // TRYING TO ENTER STATIC INFORMATION
  var stressLibrary = function() {
    for (var i = 0; i >= stressQuotes.length; i++) {
      var addQuote = stressQuotes[i].quote;
      var addAuthor = stressQuotes[i].author;
      var quoteAndAuthor = new Quote(addQuote, addAuthor);
      quotelist.push(quoteAndAuthor);
    }
  };
  var moneyLibrary = function() {
    for (var i = 0; i >= moneyQuotes.length; i++) {
      var addQuote = moneyQuotes[i].quote;
      var addAuthor = moneyQuotes[i].author;
      var quoteAndAuthor = new Quote(addQuote, addAuthor);
      quotelist.push(quoteAndAuthor);
    }
  };
  var loveLibrary = function() {
    for (var i = 0; i >= loveQuotes.length; i++) {
      var addQuote = loveQuotes[i].quote;
      var addAuthor = loveQuotes[i].author;
      var quoteAndAuthor = new Quote(addQuote, addAuthor);
      quotelist.push(quoteAndAuthor);
    }
  };


  $('body').append(QuoteApp.render());

$( document ).ready(function() {
});
