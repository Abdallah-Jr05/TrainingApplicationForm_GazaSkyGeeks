let player = {
  name: "Abdallah",
  chips: 540,
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;

let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");

let playerEl = document.querySelector("#player-el");
playerEl.textContent = `${player.name}: $${player.chips}`;
function getRandomNumber() {
  //return Math.floor(Math.random() * 10) + 2; //1-10  //2-11
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}
console.log(getRandomNumber());
function startGame() {
  isAlive = true;
  let firstCard = getRandomNumber();
  let secondCard = getRandomNumber();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}
function renderGame() {
  cardsEl.textContent = `Cards: `;
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += `${cards[i]} `;
  }
  sumEl.textContent = `Sum: ${sum}`;
  if (sum <= 20) {
    message = "Do you want to draw new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!!!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game..";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive && hasBlackJack === false) {
    let card = getRandomNumber();
    cards.push(card);
    sum += card;
    renderGame();
  }
}
