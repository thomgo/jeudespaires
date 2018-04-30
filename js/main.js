//
//
// ~~~~~ Global variables ~~~~~~
//
//

var userAnswers = [];
var clickedCards = [];
var allowClick = true;
var score = 0;

//
//
// ~~~~~~~ Functions ~~~~~~~~
//
//

//
// DOM Functions
//

//Create an array of 12 colors and sorts it randomly
function randomizeColors() {
  var colors = [
    "red",
    "red",
    "green",
    "green",
    "blue",
    "blue",
    "yellow",
    "yellow",
    "purple",
    "purple",
    "salmon",
    "salmon"
  ];
  return colors.sort(function(a, b){
    return 0.5 - Math.random()
  });
}

//Create a card element to be displayed on the screen
function createCard() {
  var card = document.createElement('div');
  card.className = "col-sm-2";
  card.innerHTML = "<div class='card my-2'></div>";
  return card;
}

//Create 12 card elements on the screen
function addCards() {
  var boardGame = document.getElementById("boardGame");
  for (var i = 0; i < 12; i++) {
    var card = createCard();
    boardGame.appendChild(card);
  }
}

//Change a card color
function changeCardColor(card, color) {
  card.style.background = color;
}

//
//Game calculation functions
//

//Store the selected color and the card element in arrays
function registerAnswers(userAnswer, clickedCard) {
  if(userAnswers.length < 2 && clickedCards.length < 2) {
    userAnswers.push(userAnswer);
    clickedCards.push(clickedCard);
  }
}

//Check if the the user answer is correct
function checkAnswers() {
  if(userAnswers[0] !== userAnswers[1]) {
    return false;
  }
  else {
    return true;
  }
}

//Turn the selected cards into black cards
function clearCards() {
  setTimeout(function(){
    changeCardColor(clickedCards[0], "black");
    changeCardColor(clickedCards[1], "black");
  }, 1500);
}

//Clears the arrays containing the user answers and the clicked cards
function clearAnswers(madePoint = false) {
  if(!madePoint){
    setTimeout(function(){
      userAnswers = [];
      clickedCards = [];
      allowClick = true;
    }, 1600);
  }
  else  {
    userAnswers = [];
    clickedCards = [];
    allowClick = true;
  }
}

//Add a point to the user score and restart the game if the user has won
function addPoint() {
  score ++;
  if(score === 6) {
    restartGame();
  }
}

//Restart the game
function restartGame() {
  alert("vous avez gagné !");
  location.reload();
}

//
//
// ~~~~~~ Code logic ~~~~~~~~
//
//

//Initialize the game
function startGame() {
  addCards();

  var colors = randomizeColors();
  var cards = document.getElementsByClassName("card");

  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function(){
      if(allowClick) {
        changeCardColor(this, colors[i]);
        registerAnswers(colors[i], this);
            if(userAnswers.length === 2 && clickedCards.length === 2) {
              allowClick = false;
              if(checkAnswers()){
                addPoint();
                clearAnswers(true);
              }
              else {
                clearCards();
                clearAnswers();
              }
            }
      }
    });
  }

}


startGame();
