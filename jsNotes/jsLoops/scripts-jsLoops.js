function getRandomNumber(upper) {
    var num = Math.floor( Math.random() * upper) + 1;
    return num;
}

//var upper = 10000;
//var randomNumber = getRandomNumber(upper);
//var guess;
//var attempts = 0;
//
//while (guess !== randomNumber) {
//    guess = getRandomNumber( upper );
//    attempts += 1;
//}
//
//document.write("<p>The random number was: " + randomNumber + "</p>");
//document.write("<p>It took the computer " + attempts + " attempts to get it right.</p>");

//var randomNumber = getRandomNumber(10);
//var guess;
//var guessCount = 0;
//var correctGuess = false;
//
//do {
//    guess = prompt("I am thinking of a number between 1 and 10. What is it?");
//    guessCount += 1;
//    
//    if (parseInt(guess) === randomNumber) {
//        correctGuess = true;
//    }
//} while (! correctGuess) 
//
//document.write("<h1>You guessed the number!</h1>");
//document.write("It took you " + guessCount + " tries to guess the number " + randomNumber);

//*****For Loops*****
//var html = '';
//
//for (i = 0; i <= 10; i += 1 ) {
//    html += '<div>' + i + '</div>';
//}
//
//document.write(html);

//***** break *****
//var randomNumber = getRandomNumber(10);
//var guess;
//var guessCount = 0;
//var correctGuess = false;
//
//while( guessCount < 10 ) {
//    guess = prompt('I am thinking of a number between 1 and 10. What is it?');
//    guessCount += 1;
//    
//    if(parseInt(guess) === randomNumber) {
//        correctGuess = true;
//        break;
//    }    
//}
//
//if ( correctGuess ) {
//    document.write('<h1>You guessed the number!</h1>');
//    document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);
//} else {
//    document.write('<h1>Sorry. You did not guess the number.');
//}



































