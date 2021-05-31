//Score
let player_score = 0;
let computer_score = 0;

//Reset button
const reset_bttn = document.querySelector("#reset");
reset_bttn.addEventListener("click", function () {
  player_score = 0;
  computer_score = 0;
  document.getElementById(
    "p_score"
  ).innerHTML = `Player Score: ${player_score}  Computer Score: ${computer_score}`;
  document.getElementById("final_score").innerHTML = "";
  document.getElementById("comp_choice").innerHTML = "";
});
//Rock Button
const rock_bttn = document.querySelector("#rock");
rock_bttn.addEventListener("click", function () {
  game("Rock");
});

//Paper Button
const paper_bttn = document.querySelector("#paper");
paper_bttn.addEventListener("click", function () {
  game("Paper");
});

//Scissor Button
const scissor_bttn = document.querySelector("#scissor");
scissor_bttn.addEventListener("click", function () {
  game("Scissor");
});

function game(a) {
  if (player_score < 5 && computer_score < 5) {
    let choices = ["Rock", "Paper", "Scissor"];
    let computerChoice = choices[Math.floor(Math.random() * 3)]; // Computer Randomly Picks Choice
    if (a === "Rock") {
      if (computerChoice === "Scissor") {
        player_score += 1;
      } else if (computerChoice === "Paper") {
        computer_score += 1;
      }
    }
    if (a === "Paper") {
      if (computerChoice === "Rock") {
        player_score += 1;
      } else if (computerChoice === "Scissor") {
        computer_score += 1;
      }
    }
    if (a === "Scissor") {
      if (computerChoice === "Paper") {
        player_score += 1;
      } else if (computerChoice === "Rock") {
        computer_score += 1;
      }
    }
    document.getElementById(
      "comp_choice"
    ).innerHTML = `The computer picked ${computerChoice}`;
    document.getElementById(
      "p_score"
    ).innerHTML = `Player Score: ${player_score}  Computer Score: ${computer_score}`;
  }
  if (player_score > 4 || computer_score > 4) {
    if (player_score > computer_score) {
      document.getElementById("final_score").innerHTML = "You win!";
    } else if (computer_score > player_score) {
      document.getElementById("final_score").innerHTML = "You lose!";
    }
  }
}
