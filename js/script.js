/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
* 7 quotes provided from the game Final Fantasy VII
* Besides quote and source split up objects to show a bit of diversity needed for project.
***/
const quotes = [
  { quote:"No one lives in the slums because they want to. It's like this train. It can only go where the tracks take it",
  source:'Cloud Strife',
  citation:'Final Fantasy VII',
  year:'1997'},

  { quote:"But you gotta  understand that there ain’t no gettin’ offa this train we on, not till we get to the end of the line.",
  source:"Barret Wallace",
  year:'1997'},

  { quote:"Hey, why don’t we make a promise?  Umm, if you get really famous and I’m ever in a bind…you come save me, alright?",
  source:"Tifa Lockhart",
  citation:'Final Fantasy VII'
  },

  { quote:"I don't like two-legged things.",
  source:'Red XIII / Nanaki',
  system:'Playstation'
  },

  {quote:"I always thought this planet was so huge. But lookin' at it from space, I realized it's so small. We're just floatin' in the dark. ......kinda makes you feel powerless. On top of that it's got Sephiroth festerin' inside it like a sickness. That's why I say this planet's still a kid. A little kid sick and trembling in the middle of this huge universe. Someone's gotta protect it. Ya follow me? That someone is us.",
  source:"Cid Higwind",
  year:'1997',
  system:'Playstation'},

  {quote:"Cloud...sign this. It's a contract that says when the war is over, all the materia will belong to me.",
  source:"Yuffie Kisaragi",
  citation:'Final Fantasy VII'
  },

  {quote:"These Hands Are A Little Too Stained To Carry Her Anymore",
  source:"Dyne"
  }
]


/***
* RGB function based off the refractor challenge from the Java Loop Lesson.
***/
const randomValue = () => Math.floor(Math.random() * 256);

function randomRGB(value) {
  const color = `rgb(${randomValue()}, ${randomValue()}, ${randomValue()} )`;
  return color;
}

/***
 * Function based on random number function used throughout the Unit 1 course
***/


function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length)
  return randomNumber
}
getRandomQuote()

/***
 * Used getRandomQuote function to choose a random quote from quotes array.
 * Also included if statements to create a string to display in HTML using the assigned classes.
***/

function printQuote() {
  let randomQuote = getRandomQuote()
  let displayQuote = `<p class="quote">${quotes[randomQuote].quote}`
  displayQuote += `<p class="source">${quotes[randomQuote].source}`
  if ('citation' in quotes[randomQuote]) {
    displayQuote += `<span class="citation">${quotes[randomQuote].citation}</span>`
  }
  if ('year' in quotes[randomQuote]) {
    displayQuote += `<span class="year">${quotes[randomQuote].year}</span>`
  }
  if ('system' in quotes[randomQuote]) {
    displayQuote += `<span class="system">, ${quotes[randomQuote].system}</span>`
  }
  displayQuote += `</p>`
  document.getElementById('quote-box').innerHTML = displayQuote;
  document.body.style.background = randomRGB(randomValue)
}

/***
 * Code proivded by project that cannot be changed.
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/***
 * Interval timer to run the function printQuote() automatically every 10 seconds on its own.
***/
setInterval(printQuote,10000);
