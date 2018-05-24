//$().button("dispose"); --> Save this for later - bootstrap allow to dispose button when used https://getbootstrap.com/docs/4.0/components/buttons/ or this method too $().button('toggle')
let atlHistory200 = {
  category: "Atlanta History",
  clue: "What was Atlanta originally named?",
  wrong: ["Atlantis", "Peachtree City"],
  correct: "Terminus and Marthasville",
  points: 200,
  source:
    "http://mentalfloss.com/article/54883/25-things-you-might-not-know-about-atlanta"
};

let atlHistory400 = {
  category: "Atlanta History",
  clue: "How many streets contain Peachtree in its name?",
  wrong: ["over 100", "over 75"],
  correct: "Over 55",
  points: 400,
  source:
    "http://mentalfloss.com/article/54883/25-things-you-might-not-know-about-atlanta"
};


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


let atlHistory800 = {
  category: "Atlanta History",
  clue: "This was once illegal in Atlanta",
  wrong: ["Walk barefoot", "Sing while in public"],
  correct: "Put icecream in your back pocket",
  points: 800,
  source:
    "http://mentalfloss.com/article/54883/25-things-you-might-not-know-about-atlanta"
};
// Clue: ATL History 200
//Question
const newLocal = $("#qOne200").html(atlHistory200.clue);
// clue 200 answers
console.log(atlHistory200.correct);
const newLocal_1 = $("#answer1").html(atlHistory200.correct);
console.log(atlHistory200.wrong[0]);
$("#answer2").html(atlHistory200.wrong[0]);
console.log(atlHistory200.wrong[1]);
$("#answer3").html(atlHistory200.wrong[1]);

//let correct = $(atlHistory200.correct)

$('#answer1').click(function () { 
    $(this).data('clicked', true)
 })

 if (jQuery("#answer1").data("clicked")) {
   alert("Correct!");
 } else if (jQuery("#answer2").data("clicked")) {
   alert("Wrong answer!");
 } else if (jQuery("#answer3").data("clicked")) {
     alert("Wrong answer!");
 }
// Atlanta Hipster Category
let atlHipster200 = {
  category: "Atlanta Hipster",
  clue: "A trail that will get you to Alabama riding your bike",
  wrong: ["The beltline", "Airportal trail system"],
  correct: "Silver Comet Trail starting in Smyrna",
  points: 200,
  source:
    "http://mentalfloss.com/article/54883/25-things-you-might-not-know-about-atlanta"
};

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

$("#c2qOne200").html(atlHipster200.clue);

console.log(atlHipster200.wrong[1]);
$("#btn1-c2").html(atlHipster200.wrong[1]);

console.log(atlHipster200.wrong[0]);
$("#btn2-c2").html(atlHipster200.wrong[0]);

console.log(atlHipster200.correct);
$("#btn3-c2").html(atlHipster200.correct);

// Atlanta Turism Catergory
let atlTour200 = {
  category: "Atlanta Tourism",
  clue: "The number one ranked park in Atlanta",
  wrong: ["Centennial Olympic Park", "Stone Mountain Park"],
  correct: "Piedmont Park",
  points: 200,
  source:
    "https://www.10best.com/destinations/georgia/atlanta/attractions/parks/"
};
$("#c3qOne200").html(atlTour200.clue);

console.log(atlTour200.wrong[1]);
$("#btn1-c3").html(atlTour200.wrong[1]);
console.log(atlTour200.wrong[0]);
$("#btn2-c3").html(atlTour200.wrong[0]);

console.log(atlTour200.correct);
$("#btn3-c3").html(atlTour200.correct);



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

// Headers
$("#atlHistHeader").html(atlHistory200.category);
$("#atlHipsterHeader").html(atlHipster200.category);
$("#atlTourHeader").html(atlTour200.category);

//End of clue header

$(document).ready(function () {
    $("button").click(function () {
        $(this).hide();
    });
});

$(document).ready(function() {
  $("button").click(function() {
    $(this).hide();
  });
});

$(document).ready(function () {
    $("")
})

function pointsCalculator() {
    if (this.correct === 'clicked') {
        
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
