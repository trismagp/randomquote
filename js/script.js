var previousQuotePosition = 0;
var quotes = [
  {
    quote:'You can do anything but not everything',
    source: 'David Allen',
    citation: 'Making It All Work',
    year: 2009
  },
  {
    quote:'The only way to do great work is to love what you do',
    source: 'Steve Jobs'
  },
  {
    quote:'I\'ll be back',
    source: 'Arnold Schwarzenegger',
    citation: 'Terminator',
    year: 1984
  },
  {
    quote:'Feel The Fear And Do It Anyway',
    source: 'Susan Jeffers',
    year: 1987
  },
  {
    quote:'If you do what you\'ve always done, you\'ll get what you\'ve always gotten.',
    source: 'Tony Robbins'
  },
  {
    quote:'A dream you dream alone is only a dream. A dream you dream together is reality.',
    source: 'John Lennon'
  }
];


// This function calculates a random quote position from 0 to nb quotes
// then returns the specific quote.
//
// In order to display a new quote every time the button is clicked
// and if there is more than one quote in the quotes array
// this function loops until the new random position is different from
// the previous quote position.
function getRandomQuote(){
  var randomPosition = 0;
  if(quotes.length > 1){
    do{
        randomPosition = Math.floor(Math.random() * quotes.length);
    }while(previousQuotePosition === randomPosition);
    previousQuotePosition = randomPosition;
  }
  return quotes[randomPosition];
}


// this function get a random quote from the quotes array
// and prints it on the webpage 
function printQuote(){
  var quote = getRandomQuote();

  var quoteString = '<p class="quote">' +  quote.quote + '</p>';
  quoteString += '<p class="source">' + quote.source;
  if(quote.citation){
    quoteString += '<span class="citation">' + quote.citation + '</span>';
  }
  if(quote.year){
    quoteString += '<span class="year">' + quote.year + '</span>';
  }
  quoteString += '</p>';

  document.getElementById('quote-box').innerHTML = quoteString;
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
