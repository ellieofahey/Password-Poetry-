var questionsArray = [
    'Please type your least favorite color',
    'What is your favorite dance move?',
    'What would your alter ego be named?',
    'Who would you like to throw a bowl of pasta at?',
    'How high can you jump vertically?',
    'Which celebrity would be the most fun to skydive with?',
    'What is your lucky number?',
    'Type out your favorite interjection',
    'Write out a random word, but take out the vowels!',
    'Who would play you in a movie?',
    'What is your favorite day of the week?'
];

const rndInt = Math.floor(Math.random() * 3) + 1

var randomNumber = Math.floor(Math.random()*questionsArray.length);

var bit = prompt(questionsArray[randomNumber]);

var bit2 = prompt(questionsArray[randomNumber + (rndInt * 2)]);

var bit3 = prompt(questionsArray[randomNumber - rndInt]);

var sentence = bit + bit2 + bit3;
document.write(sentence);

alert('Click here to make a new password!');



