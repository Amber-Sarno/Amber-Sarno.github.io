// Challenge 4: Change the Color of All Buttons (combine challenges 1-4)

//Challenge 1: Age in Days
function ageInDays() {
    var birthYear = prompt("what year were you born, good friend?");
    var ageInDayss = (2021-birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are '+ ageInDayss + ' days Old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);   
}
function reset() {
    document.getElementById('ageInDays').remove();
}
//Challenge 2: Cat Generator

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
    }
//Challenge 3:Rock Paper Scissors

function rpsGame(yourChoice) { 
    console.log(yourChoice);  
    const humanChoice = yourChoice.id;
    // humanChoice = yourChoice.id;

    const botChoice = numberToChoice(randToRpsInt());
    //alert(botChoice);
    //console.log(computerChoice, botChoice);

    results = decideWinner(humanChoice, botChoice); //[0,1] human lost| bot won 
    console.log(results);

    message = finalMessage(results) ; // { 'message': 'You won!', 'color': 'green'} 
    //console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message); 
}
function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}
function numberToChoice (number) {
    return ['rock', 'paper', 'scissors'][number];
    }
function decideWinner (yourChoice, computerChoice) {
    var rpsDatabase = { 
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}, 
    }
    var     yourScore = rpsDatabase [    yourChoice][computerChoice]
    var computerScore = rpsDatabase [computerChoice][    yourChoice];

    return [yourScore, computerScore];
}
function finalMessage( [ yourScore, computerScore] ){
    const link = ' <a href="Challenge4.html" id="reset_link">Play Again </a>'; //Select this id in your css file to style.//
    if (yourScore === 0) {
        return {'message': 'You lost!'+link, 'color': 'red'};
    } else if (yourScore === 0.5) { 
        return { 'message': 'You tied!'+link, 'color': 'yellow'};
    } else { 
        return { 'message': 'You won!'+link, 'color': 'green'};  
    }
}
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = { 
     'rock':     document.getElementById('rock'    ).src,
     'paper':    document.getElementById('paper'   ).src,
     'scissors': document.getElementById('scissors').src
    }

    //let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv   = document.createElement('div');
    var botDiv     = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv  .innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>" 
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage ['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage ['message'] + "</h1>"
    botDiv    .innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50 px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    
}

//Challenge 4: Change the Color of All Buttons

var all_buttons = document.getElementsByTagName('button');
console.log("all ")
console.log(all_buttons);

var copyAllButtons = [];
for (let i=0; i< all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}

console.log ('copy');
console.log (copyAllButtons);

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') { 
        buttonsRed ();
    } else if (buttonThingy.value === 'green') {
        buttonsGreen();
    } else if (buttonThingy.value === 'reset') {
        buttonColorReset();
    } else if (buttonThingy.value === 'random') {
      randomColors(); 
    }
}

function buttonsRed() {
    for (let i=0; i< all_buttons.length; i++) {
        let currentColor = all_buttons[i].classList[1]; // Find the current color of button 'i' in its class list.
        all_buttons[i].classList.remove(currentColor);  // Remove that current color from the class list of the button.
        all_buttons[i].classList.add('btn-danger');     // Now add the new color (red).
    }
}

function buttonsGreen() {
    for (let i=0; i< all_buttons.length; i++) {
        let currentColor = all_buttons[i].classList[1];
        all_buttons[i].classList.remove(currentColor);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset () {
    for (let i=0; i < all_buttons.length; i++) {
        let currentColor = all_buttons[i].classList[1];
      all_buttons[i].classList.remove(currentColor);
      all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
    var choices = [ 'btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

    for (let i=0; i < all_buttons.length; i++) {
        var randomNumber = Math.floor(Math.random() * 4);
        console.log(randomNumber)
        let currentColor = all_buttons[i].classList[1];
        all_buttons[i].classList.remove(currentColor);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}
