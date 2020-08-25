//a game of rockPaperScissors 

//get user's choice
const getUserChoice = (userInput) => {
    userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Error');
    }
}

//doesn't affect the game in any way, just testing to see if the function works
console.log(getUserChoice('paper'));

//get computer's choice
// I used the if/else function, could have also used the switch statement
const getComputerChoice = () => {
    let randonNumber = Math.floor(Math.random() * 3);
    if (randonNumber === 0) {
        return 'rock';
    } else if (randonNumber === 1) {
        return 'paper';
    } else if (randonNumber === 2) {
        return 'scissors';
    } else {
        console.log('error input');
    }
}

//doesn't affect the game in any way, just testing to see if the function works
console.log(getComputerChoice());

//determining a winner using these rules
/*    Rules
1. rock destroys scissors
2. scissors cut papaer
3. paper covers rock
*/
const determineWinner = (userChoice, computerChoice) => {
        //if the user inputs bomb, it's a cheat to let you win without any comparison
        if (userChoice === 'bomb') {
            return 'You won';
        }
        if (userChoice === computerChoice) {
            return 'it\'s a tie';
        }
        if (userChoice === 'rock') {
            if (computerChoice === 'paper') {
                return 'Computer won';
            } else {
                return 'You won';
            }
        }
        if (userChoice === 'paper') {
            if (computerChoice === 'scissors') {
                return 'Computer won';
            } else {
                return 'You won';
            }
        }
        if (userChoice === 'scissors') {
            if (computerChoice === 'rock') {
                return 'Computer won';
            } else {
                return 'You won';
            }
        }

    }
    //doesn't affect the game in any way, just testing to see if the function works
let winner = determineWinner('rock', 'scissors'); // just created a variable for it, but I could have logged to the console all alone. as || console.log(determineWinner('rock' , 'scissors')); ||
console.log(winner);

const playGame = () => {
    const userChoice = getUserChoice('rock'); // input your value here! and run the code
    const computerChoice = getComputerChoice(); // the value is random
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
}

playGame();
