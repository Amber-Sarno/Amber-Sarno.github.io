//Challenge 5: Blackjack
let blackjackGame = {
    'you':{ 'scoreSpan': '#your-blackjack-result', 'div': '#your-box','score': 0},
    'dealer':{'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('sounds/swish.m4a');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

function blackjackHit() {
   showCard();  
}

function showCard() {
let cardImage = document.createElement('img');
    cardImage.src='images/Q.png';
    document.querySelector(YOU['div']).appendChild(cardImage);
    hitSound.play();
{