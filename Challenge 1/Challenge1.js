// challenge 1: Age in Days (age in years x 365 --> current year-birthyear)

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

