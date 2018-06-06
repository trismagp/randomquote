var previousQuoteIndex = 0;
var colorIndex = 0;
var colors = ['#15682E','#008828','#36B55C','#680B0A','#B53736'];
var quotes = [
  {
    quote:'You can do anything but not everything',
    source: 'David Allen',
    citation: 'Making It All Work',
    year: 2009,
    tags:['business', 'wisdom']
  },
  {
    quote:'The only way to do great work is to love what you do',
    source: 'Steve Jobs',
    tags: ['IT', 'innovation','business']
  },
  {
    quote:'I\'ll be back',
    source: 'Arnold Schwarzenegger',
    citation: 'Terminator',
    year: 1984,
    tags: ['movie','humour']
  },
  {
    quote:'Feel The Fear And Do It Anyway',
    source: 'Susan Jeffers',
    year: 1987,
    tags:['motivation']
  },
  {
    quote:'If you do what you\'ve always done, you\'ll get what you\'ve always gotten.',
    source: 'Tony Robbins',
    tags:['PNL', 'motivation']
  },
  {
    quote:'A dream you dream alone is only a dream. A dream you dream together is reality.',
    source: 'John Lennon',
    tags:['love', 'peace']
  }
];


// This function calculates a random quote position from 0 to nb quotes
// then returns the related quote.
//
// In order to display a new quote every time the button is clicked
// and if there is more than one quote in the quotes array
// this function loops until the new random position is different from
// the previous quote position.
function getRandomQuote(){
  var randomIndex = 0;
  if(quotes.length > 1){
    do{
        randomIndex = Math.floor(Math.random() * quotes.length);
    }while(previousQuoteIndex === randomIndex);
    previousQuoteIndex = randomIndex;
  }
  return quotes[randomIndex];
}

// increment the color index and return the related color
function getColor(){
  colorIndex = ( colorIndex + 1 ) % colors.length;
  return colors[colorIndex];
}


// fade out
function fadeOut(el){
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

// fade in
function fadeIn(el, display){
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}


// this function get a random quote from the quotes array
// and prints it on the webpage and change the background color
// each time the quote is updated
function printQuote(){

  document.body.style.backgroundColor = getColor();
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
  if(quote.tags){
    quoteString += '<ul class="tag"><li>';
    quoteString += quote.tags.join('</li><li>');
    quoteString += '</li></ul>';
  }
  var el = document.getElementById('quote-box');
  // fadeOut the quote before update
  fadeOut(el);
  el.innerHTML = quoteString;
  // fadeIn the quote after update
  fadeIn(el);
  fadeIn(el, "inline-block");
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// the quote and background color change every 7000ms
var x = setInterval(function(){printQuote()},7000);
