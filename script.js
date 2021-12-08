// Rock Paper Scissors
var wins = 0;
var ties = 0;
var losses = 0;

// Random number generator
function getRandomInt(num){
    return Math.floor(Math.random() * num);
}

// Used for play continuation
var continuePlaying = true;

function startGameCycle() {
    do {
        var userInput = prompt("Please enter [R], [P], or [S]");
        // Sets user input to uppercase for easier comparisons
        userInput = userInput.toUpperCase();
        if ((userInput === "R") || (userInput === "P") || (userInput === "S")) {
            // Array filled with the computer's choices (same as user) assigns a random one to the current computerInput
            var computerChoices = ["R", "P", "S"];
            var computerInput = computerChoices[getRandomInt(computerChoices.length)];

            // comparing userInput to computerInput
            if (userInput === computerInput) {
                alert("Both you and the computer chose " + userInput + ", it's a tie!"); // Ties
                ties++;
            } else if ((userInput === "R" && computerInput === "S") || (userInput === "P" && computerInput === "R") || (userInput === "S" && computerInput === "P")) {
                alert("You chose " + userInput + ", and the computer chose " + computerInput + ". You win!"); // Wins
                wins++;
            } else {
                alert("You chose " + userInput + ", and the computer chose " + computerInput + ". You lose."); // Losses
                losses++;
            }
        } else {
        alert("You must choose either R, P, or S"); // Catch statement for if the user inputs something that is not "R" "P" or "S"
    }
    // prompt for choosing to play again
    continuePlaying = confirm("Wins: " + wins + "\n" + "Ties: " + ties + "\n" + "Losses: " + losses + "\n"+ "\n" + "Play again?");
    }
    while (continuePlaying);
}

// Initializes play on page startup
startGameCycle();

// code down here only runs if the user chooses to not play again
// could add statistics and a play again button that either does or does not reset the wins/ties/losses data