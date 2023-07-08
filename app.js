let win = document.querySelector(".winner");
let cnt = document.querySelector(".container");
let tie = document.querySelector(".tie");
let grid = document.querySelector(".grid");
let currentPlayer = "X";

let arr = Array(9).fill(null);
console.log(arr);

function winner() {
  if ((arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) || (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) || (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) || (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) || (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) || (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) || (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) || (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])) {
    // document.write("winner is ", currentPlayer);
    grid.style.display = "none";
    win.style.display = "block";
    return;
  }
  if (!arr.some((e) => e === null)) {
    grid.style.display = "none";
    tie.style.display = "block";
  }
}
function handleClick(e) {
  let id = Number(e.id);
  if (arr[id] !== null) return;
  arr[id] = currentPlayer;
  e.innerText = currentPlayer;
  winner();
  currentPlayer = currentPlayer === "X" ? "0" : "X";
}
