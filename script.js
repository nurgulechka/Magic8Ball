const possibleAnswers = [
    "Yes.",
    "No.",
    "Maybe.",
    "Ask again later.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Most likely.",
    "Outlook not so good.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Better not tell you now.",
    "My sources say no.",
    "Very doubtful.",
    "It is certain.",
    "Without a doubt.",
    "As I see it, yes.",
    "You may rely on it.",
    "Don't count on it.",
    "It is decidedly so.",
    "My reply is no."
];

//variables
const magic8ballForm = document.getElementById("magic8ball-form");
const question = document.getElementById("question");
const answer = document.getElementById("answer");

magic8ballForm.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent reloading
    const i = Math.floor(Math.random() * possibleAnswers.length); //random index
    const randAnswer = possibleAnswers[i]; //answer from list using ranfom index
    answer.textContent = randAnswer; //placing the text into answer element into our html
    question.value = ""; // Clear the input field
});