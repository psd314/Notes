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

var person = {
    name : 'Sarah',
    country : 'US',
    age : 35,
    treehouseStudent : true,
    skills : ['JavaScript', 'HTML', 'CSS']
    };
    
function print(message) {
    var div = document.getElementById('output');
    div.innerHTML = message;
}

//var message = '<p>Hello. My name is ' + person.name + '</p>';
//message += '<p>I live in the ' + person.country + '</p>';
//person.name = 'Rainbow Dash';
//message += '<p>But, I wish my name was ' + person.name + '</p>';
//person.age += 1;
//message += '<p>My age is now ' + person.age + '</p>';
//message += '<p>I have ' + person.skills.length + ' skills: ';
//message += person.skills.join(', ') + '</p>';
//
//
//print(message);

//for ( key in person) {
//    console.log(key, ': ', person[key]);
//}

var questions = [
    {
        question: 'How many states are in the US?',
        answer: 50
    },
    {
        question: 'How many continents are there?',
        answer: 7
    },
    {
        question: 'How many legs does an insect have?',
        answer: 6
    }
];

var correctAnswers = 0;
var question;
var answer;
var response;

for (var i = 0; i < questions.length; i += 1) {
    question = questions[i].question;
    answer = questions[i].answer;
    response = prompt(question);
    response = parseInt(response);
    if (response === answer) {
        correctAnswers += 1;
    }
}

html = "You got " + correctAnswers + " questions(s) right.";
print(html);




































