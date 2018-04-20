//
//
// Functions
//
//

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

function createCard() {
  var card = document.createElement('div');
  card.className = "col-sm-2";
  card.innerHTML = "<div class='card my-2'></div>";
  return card;
}

function addCards() {
  var boardGame = document.getElementById("boardGame");
  for (var i = 0; i < 12; i++) {
    var card = createCard();
    boardGame.appendChild(card);
  }
}

function changeCardColor(card, color) {
  card.style.background = color;
}


function addClickOnCards(colors, score) {
    var isWaiting = false;
    var userAnswers = [];
    var clickedCards = [];
    var cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", function(){
        if(!isWaiting) {
          changeCardColor(this, colors[i]);

          if(userAnswers.length < 2 && clickedCards.length < 2) {
            userAnswers.push(colors[i]);
            clickedCards.push(this);

            if(userAnswers.length === 2 && clickedCards.length === 2) {
              if(userAnswers[0] !== userAnswers[1]) {
                setTimeout(function(){
                  changeCardColor(clickedCards[0], "black");
                  changeCardColor(clickedCards[1], "black");
                  userAnswers = [];
                  clickedCards = [];
                  isWaiting = false;
                }, 1500);
                isWaiting = true;
              }
              else {
                score ++;
                if(score === 6) {
                  alert("vous avez gagné !");
                  location.reload();
                }
                userAnswers = [];
                clickedCards = [];
              }

            }
          }
        }
      });
  }
}

function startGame() {
  addCards();
  var colors = randomizeColors();
  var score = 0;
  addClickOnCards(colors, score);
}

//
//
// Code logic
//
//
startGame();
