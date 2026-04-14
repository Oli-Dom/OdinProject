const getMachineChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const determineWinner = (userChoice, machineChoice) => {
  if (userChoice === machineChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && machineChoice === "scissors") ||
    (userChoice === "paper" && machineChoice === "rock") ||
    (userChoice === "scissors" && machineChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Machine wins!";
  }
};

const playButton = document.getElementsByClassName("play-button");
playButton[0].addEventListener("click", () => {
  const userChoice = document.querySelector(
    'input[name="choice"]:checked',
  )?.value;

  const machineChoice = getMachineChoice();

  const result = determineWinner(userChoice, machineChoice);

  if (result === "You win!") {
    let board = document.getElementById("human-score");
    board.innerHTML = parseInt(board.innerHTML) + 1;
  } else if (result === "Machine wins!") {
    let board = document.getElementById("machine-score");
    board.innerHTML = parseInt(board.innerHTML) + 1;
  }
});
