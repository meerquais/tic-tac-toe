let win = document.querySelector(".winner");
let cnt = document.querySelector(".container");
let tie = document.querySelector(".tie");
let grid = document.querySelector(".grid");
let currentPlayer = "X";

let arr = Array(9).fill(null);
console.log(arr);

function winner() {
  if (
    (arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2]) ||
    (arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5]) ||
    (arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8]) ||
    (arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6]) ||
    (arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7]) ||
    (arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8]) ||
    (arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8]) ||
    (arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6])
  ) {
    grid.style.display = "none";
    win.style.display = "block";
    alert("Player " + currentPlayer + " wins!");
    return;
  }
  if (!arr.includes(null)) {
    grid.style.display = "none";
    tie.style.display = "block";
    alert("It's a tie!");
  }
}

function handleClick(e) {
  let id = Number(e.id);
  if (arr[id] !== null) return;
  arr[id] = currentPlayer;
  e.innerText = currentPlayer;
  winner();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function startGame() {
  let playerXName = document.getElementById("playerX").value;
  let playerOName = document.getElementById("playerO").value;

  // Validate player names
  if (playerXName.trim() === "" || playerOName.trim() === "") {
    alert("Please enter both player names.");
    return;
  }

  // Display player names in alerts
  let message = "Let the game begin!\n";
  message += "Player X: " + playerXName + "\n";
  message += "Player O: " + playerOName;
  alert(message);

  // Clear input fields and show game grid
  document.getElementById("playerX").value = "";
  document.getElementById("playerO").value = "";
  document.querySelector("button").disabled = true;
  document.querySelector("button").innerText = "Game in progress";
  grid.style.display = "grid";
}
