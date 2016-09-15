//This is my edit for testing of creating a new branch in GitHub

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
//document.getElementById('loadQuote').addEventListener("click", printQuote, false);


//document.getElementById('loadQuote').addEventListener("click", getRandomColor, false);


//sets a variable called 'randomNumber'
var randomNumber;
var quoteUsed = [ ];

//Quotes Array
var quotes = [
	{
		quote: "Focus on what you can do to help your team win. Everything else goes from there.",
		source: "Kobe Bryant",
		
	}, 

	{
		quote: "He ugly. He too slow. He fight like a sissy....The world champ should be pretty like me.",
		source: "Muhammad Ali",
		
		year: 1974
	}, 

	{
		quote: "Everybody is different. Everbody has different styles. Just do it the best way you know how.",
		source: "Vince Carter",
		
	},

	{
		quote: "The best learning experience is going through the actual experience.",
		source: "Paul Pierce",
		
		year: 2014
	},

	{
		quote: "I want to look in the mirror and say I did it my way.",
		source: "Allen Iverson",
		
	},

	{
		quote: "Sport has the power to change the world",
		source: "Nelson Mandela",
		
		year: 2006
	},

	{
		quote: "One good thing about music, when it hits you feel no pain.",
		source: "Bob Marley",
		
	},
	
	{
		quote: "Take the good with the bad. Love what you got. Remember what you had. Always forgive, but never forget. Learn from mistakes, but never regret.",
		source: "John \"Fabolous\" Jackson",
		
		year: 2011
	}
]

// selects a random quote object from the quotes array
// returns the randomly selected quote object
function getRandomQuote ( ) {

	while (true) {


	//generates a random quote from the Quotes Array
	randomNumber = Math.floor(Math.random() * quotes.length);
	//if the quote has already been used or not
	if (quoteUsed.length < quotes.length ) {
		//prevent displaying the quote twice
		if (quoteUsed.indexOf(randomNumber === -1) ) {
			//add the random number to the end of the quoteUsed array
			quoteUsed.push(randomNumber);
			//return random number to be used in printQuote function
			return randomNumber;
		}

	} else {
		break;
	}
}
}



//printQuote calls the getRandomQuote function and stores the returned quote object in a variable

//creating a variable to house the printQuote function and adding the quotes array as a parameter of that function
var printQuote = function printQuote ( quotes ) {

//variable to store the final quote
var finalQuote;

//when quote, source, citation, and year are present display this
if ( quotes.quote && quotes.source && quotes.citation && quotes.year ) {
	finalQuote = '<p class="quote"> + quotes.quote + </p> <p class="source"> + quotes.source + <span class="citation"> + quote.citation + </span> <span class="year"> + quote.year + </span> </p>';
}
//when quote, source, and citation are present display this
else if ( quotes.quote && quotes.source && quotes.citation ) {
	finalQuote = '<p class="quote"> + quotes.quote + </p> <p class="source"> + quotes.source + <span class="citation"> + quote.citation + </span> </p>';
}
//when quote and source are present display this
else if ( quotes.quote && quotes.source ) {
	finalQuote = '<p class="quote"> + quotes.quote + </p> <p class="source"> + quotes.source </p>';
}
//when only quote is present display this
else {
finalQuote = '<p class="quote"> + quotes.quote + </p>';
}

	//displays the final HTML string to the page
	document.getElementById('quote-box').innerHTML = finalQuote;
}

/*
//generates RandomColor for body background
function getRandomColor() {
        return 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
        }
//set the background color
 document.body.style.backgroundColor = getRandomColor();
 */

