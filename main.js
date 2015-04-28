// Quote Constructor
var Quote = function (quote, author) {
  this.quote = quote;
  this.author = author;
  this.render();
};
// Quote Render prototype
Quote.prototype.render = function () {
  if(!this.el){
    this.el = $('#quote-tpl')
  .clone()
  .attr('id', null);
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
// Static QuoteBank for Themes
var staticQuoteBank = [obstacleList,moneyList,loveList];
// Static Lists for Themes
var obstacleList = [{'Difficulties are things that show a person what they are.','Epictetus'},{'Today I escaped from anxiety. Or no, I discarded it, because it was within me, in my own perceptions—not outside.','Marcus Aurelius'},{'Difficulties strengthen the mind, as labor does the body.','Seneca'}];
var moneyList = [{'Wealth consists not in having great possessions, but in having few wants','Epictetus'},{'Associate with people who are likely to improve you','Seneca'},{'Qui mori didicit servire dedidicit.','Seneca'},{'Remember to act always as if you were at a symposium. When the food or drink comes around, reach out and take some politely; if it passes you by don\'t try pulling it back. And if it has not reached you yet, don\'t let your desire run ahead of you, be patient until your turn comes. Adopt a similar attitude with regard to children, wife, wealth and status, and in time, you will be entitled to dine with the gods. Go further and decline these goods even when they are on offer and you will have a share in the gods\' power as well as their company. That is how Diogenes, Heraclitus and philosophers like them came to be called, and considered, divine.','Epictetus'}];
var loveList = [{'The key is to keep company only with people who uplift you, whose presence calls forth your best', 'Epictetus'}, {'It takes more than just a good looking body. You\'ve got to have the heart and soul to go with it.','Epictetus'}, {'Conversation has a kind of charm about it, an insinuating and insidious something that elicits secrets just like love or liquor','Seneca'}];




$(document).on('ready', function() {

});