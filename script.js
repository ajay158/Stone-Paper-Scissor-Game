let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
  // rock, paper, scissors
};

const drawGame = () => {
  //console.log("game was draw.");
  msg.innerText = "Game was Draw, Play again.";
  msg.style.backgroundColor = "#191919";
};

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    // console.log("You win!");
    msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "#004225";
  } else {
    computerScore++;
    computerScorePara.innerText = computerScore;
    // console.log("You lose!");
    msg.innerText = `You lose! ${computerChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "#C70039";
  }
};

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  // Generate computer choice - modular way of programming
  const computerChoice = genComputerChoice();
  console.log("comuter choice = ", computerChoice);

  if (userChoice === computerChoice) {
    // Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors, paper
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = computerChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, computerChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
