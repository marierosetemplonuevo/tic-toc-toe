const xClass = "x";
const oClass = "o";
const currentTurn = document.getElementById("turn");
const header = document.getElementById("header");
// const winnerMessage = currentClass + "'s wins";
const cells = document.querySelectorAll("[data-cell]");

const winnerPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let playersTurn;

cells.forEach(cell => {
  cell.addEventListener("click", turn, { once: true });
});

function turn(e) {
  const cell = e.target;
  const currentClass = playersTurn ? oClass : xClass;
  placeMark(cell, currentClass);
  if (checkWinner(currentClass)) {
    header.innerHTML = "The winner is " + currentClass;
    // alert("The winner is " + currentClass);
  }
  swapTurns();
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
  currentTurn.classList.add(currentClass);
}

function swapTurns() {
  playersTurn = !playersTurn;
}

function checkWinner(currentClass) {
  return winnerPattern.some(combination => {
    return combination.every(index => {
      return cells[index].classList.contains(currentClass);
    });
  });
}
