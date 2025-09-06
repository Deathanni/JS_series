console.log("Now we will play a GUESSING GAME");
console.log("You have to guess the random number");

let number = 25;
let result = parseInt(prompt("Enter your number:"));

while (result !== number) {
    result = parseInt(prompt("Nope! Wrong guess, try again:"));
}

console.log("Congratulations! You win 🎉");
