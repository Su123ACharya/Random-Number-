let userInput = document.getElementById("userInput");
const StartButton = document.getElementById("startBox");
const btn = document.getElementById("guessBtn");
const message = document.getElementById("h3");

let randomNumber, score = 0;

function generateRandomNumber(){
    randomNumber = Math.floor(Math.random() * 50) + 1;
}

function resetGame(){
    generateRandomNumber();
    userInput.value="";
    score = 0;
}

StartButton.addEventListener("click", ()=>{
    resetGame();
});

btn.addEventListener("click", ()=>{
    const userGuess = parseInt(userInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 50) {
        message.textContent = "Please enter a valid number between 1 and 50";
        return;
    }
    
    if (userGuess === randomNumber) {
        message.textContent = "Congratulations! You guessed the correct number!";
        document.getElementById("main").style.backgroundColor = "green";
        score++;
    } else if (userGuess < randomNumber) {
        message.textContent = "Your guessed number is too low";
        score--;
    } else {
        message.textContent = "Your guessed number is too high";
        score--;
    }

    document.querySelector("p b").textContent = "Your Score: " + score;
});
