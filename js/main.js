//
//
// Functions
//
//

function randomizeColors() {

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

//
//
// Code logic
//
//
addCards();
