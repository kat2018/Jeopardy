//pointsCard module will define the function for opening each card on click event

//$().button("dispose"); --> Save this for later - bootstrap allow to dispose button when used https://getbootstrap.com/docs/4.0/components/buttons/ or this method too $().button('toggle')


$(document).ready();

function atlHistory200F() {
    alert("You win")
}

let atlHistory200 = {
  category: "Atlanta History",
  clue: "How was Atlanta originally named?",
  wrong: ["Atlantis", "Peachtree City"],
  correct: "Terminus and Marthasville",
  points: 200,
  source:
    "http://mentalfloss.com/article/54883/25-things-you-might-not-know-about-atlanta"
};



console.log(atlHistory200.correct);
console.log(atlHistory200.wrong[0]);
console.log(atlHistory200.wrong[1]);

let atlHistory400 = {
  category: "Atlanta History",
  clue: "How many streets contain Peachtree in its name?",
  wrong: ["over 100", "over 75"],
  correct: "Over 55",
  points: 400,
  source:
    "http://mentalfloss.com/article/54883/25-things-you-might-not-know-about-atlanta"
};
console.log(atlHistory400.wrong[1]);
console.log(atlHistory400.correct);
console.log(atlHistory400.wrong[0]);

let atlHistory600 = {
  category: "Atlanta History",
  clue: "Why is Atlanta's symbol a Phoenix?",
  wrong: [
    "Because we started from the bottom now we're here",
    "Because birds are awesome"
  ],
  correct: "Because the city was once burned to the ground",
  points: 600,
  source:
    "http://mentalfloss.com/article/54883/25-things-you-might-not-know-about-atlanta"
};
console.log(atlHistory600.wrong[1]);
console.log(atlHistory600.wrong[0]);
console.log(atlHistory600.correct);

let atlHistory800 = {
  category: "Atlanta History",
  clue: "This was once illegal in Atlanta",
  wrong: ["Walk barefoot", "Sing while in public"],
  correct: "Put icecream in your back pocket",
  points: 800,
  source:
    "http://mentalfloss.com/article/54883/25-things-you-might-not-know-about-atlanta"
};
console.log(atlHistory800.wrong[1]);
console.log(atlHistory800.wrong[0]);
console.log(atlHistory800.correct);

let atlHipster200 = {
  category: "Atlanta Hipster",
  clue: "A trail that will get you to Alabama riding your bike",
  wrong: ["The beltline", "The airportal trail system"],
  correct: "Silver Comet Trail starting in Smyrna",
  points: 200,
  source:
    "http://mentalfloss.com/article/54883/25-things-you-might-not-know-about-atlanta"
};
console.log(atlHipster200.wrong[1]);
console.log(atlHipster200.wrong[0]);
console.log(atlHipster200.correct);

let atlHipster400 = {
  category: "Atlanta Hipster",
  clue:
    "Atlanta was ranked one of the top hipster cities in the world (based on the # of cafes and yoga studios*).",
  wrong: [
    "Ranked #5 after Lisbon, Portugal",
    "Ranked #9 after Spokane, Washington"
  ],
  correct: "Ranked #14 after Minneapolis",
  points: 400,
  source:
    "https://www.ajc.com/news/local/how-hipster-atlanta-city-ranks-among-top-the-world-study-finds/RXHX0iZh5P6INbEcXU8C0O/"
};
console.log(atlHipster400.wrong[1]);
console.log(atlHipster400.wrong[0]);
console.log(atlHipster400.correct);

//
//a.
//b.  (coorect)
//c.

let atlHipster600 = {
  category: "Atlanta Hipster",
  clue: "The most hipster neighborhood in Atlanta",
  wrong: ["Decatur", "Old Fourth Ward"],
  correct: "Atlantic Station",
  points: 600,
  source:
    "https://www.ajc.com/news/local/how-hipster-atlanta-city-ranks-among-top-the-world-study-finds/RXHX0iZh5P6INbEcXU8C0O/"
};
console.log(atlHipster600.wrong[1]);
console.log(atlHipster600.wrong[0]);
console.log(atlHipster600.correct);

let atlTour200 = {
  category: "Atlanta Tourism",
  clue: "The number one ranked park in Atlanta",
  wrong: ["Centennial Olympic Park", "Stone Mountain Park"],
  correct: "Piedmont Park",
  points: 200,
  source:
    "https://www.10best.com/destinations/georgia/atlanta/attractions/parks/"
};
console.log(atlTour200.wrong[1]);
console.log(atlTour200.wrong[0]);
console.log(atlTour200.correct);

let atlTour400 = {
  category: "Atlanta Tourism",
  clue: "The most visited attraction in Atlanta",
  wrong: ["CNN Center", "World of Coca-Cola"],
  correct: "The Georgia Aquarium",
  points: 400,
  source: "http://www.touropia.com/tourist-attractions-in-atlanta/"
};
console.log(atlTour400.wrong[1]);
console.log(atlTour400.wrong[0]);
console.log(atlTour400.correct);

//
//a.
//b.
//c.
//source:

let atlTour600 = {
  category: "Atlanta Tourism",
  clue: "The most famous place in Atlanta",
  wrong: [
    "Livings Walls (Street and Art Gallery)",
    "The Varsity (Family Onwed Restaurant opened in 1928)"
  ],
  correct: "Auburn Avenue (the birthplace of the Civil Rights)",
  points: 400,
  source:
    "https://www.atlanta.net/Blog/Have-You-Visited-the-Most-Famous-Places-in-Atlanta-/"
};
console.log(atlTour600.wrong[1]);
console.log(atlTour600.wrong[0]);
console.log(atlTour600.correct);

let atlBonus = {
  category: "Atlanta Bonus Round",
  clue: "You'd go to jail for that in Atlanta",
  wrong: ["Driving Without Your Shoes", "Owning a Tank"],
  correct: "tying a giraffe to a telephone pole",
  points: 1000,
  source: [
    "https://www.urbo.com/content/things-that-arent-illegal-but-probably-should-be/",
    "http://mentalfloss.com/article/54883/25-things-you-might-not-know-about-atlanta"
  ]
};
console.log(atlBonus.correct);
console.log(atlBonus.wrong[0]);
console.log(atlBonus.wrong[1]);

function pointsCalculator() {
    if (condition) {
        
    }



  //if the answer is wrong (false)
  //deduct the X points for that category from player 1
  //highlight the correct answer
  //after X seconds, return to the clueBoard
  //replace the "pointsCard" selected with a blank card
  //if the answer is correct (true)
  //add X points for that category to player 1
  //highlight the correct answer
  //replace the "pointsCard" selected with a blank card
  //run the rounds until reaching X out of X rounds
}
