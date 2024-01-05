"use strict";
/* -------------------------------------------------------------------------- */
const SKY = "Sky";
const BOARD_SIZE = 14;
const ALIEN_ROW_LENGTH = 8; //8
const ALIEN_ROW_COUNT = 3; //3
var ALIENS_ON_BOARD = ALIEN_ROW_LENGTH * ALIEN_ROW_COUNT;
const HERO = "👆";
const ALIEN = "👾";
const LASER = "🔺";
let score = 0;
var gBoard;
var gGame = {
  isOn: true,
};

/* -------------------------------------------------------------------------- */

function init() {
  // var board = [] //TODO: Check where to implement board resetting
  // gGame.score = 0 //TODO: Check where to implement score resetting
  gBoard = createBoard();
  createHero(gBoard);
  renderBoard(gBoard);
  document.addEventListener("keydown", onKeyDown);
  // score = 0 //TODO: Check where to implement score resetting
  updateScore(0);
}

/* -------------------------------------------------------------------------- */

function createBoard() {
  var board = [];
  for (let i = 0; i < BOARD_SIZE; i++) {
    board[i] = [];
    for (let j = 0; j < BOARD_SIZE; j++) {
      board[i][j] = createCell();
    }
  }
  createAliens(board);
  return board;
}

/* -------------------------------------------------------------------------- */

function renderBoard(board) {
  var boardElement = document.getElementById("gameBoard");
  boardElement.innerHTML = "";

  for (var i = 0; i < board.length; i++) {
    var rowElement = document.createElement("div");
    for (var j = 0; j < board[i].length; j++) {
      var cellElement = document.createElement("div");
      cellElement.classList.add("cell");
      cellElement.dataset.i = i;
      cellElement.dataset.j = j;
      if (board[i][j].gameObject === ALIEN) {
        cellElement.innerHTML = ALIEN;
      }
      if (board[i][j].gameObject === HERO) {
        cellElement.innerHTML = HERO;
      }
      if (board[i][j].gameObject === LASER) {
        // cellElement.classList.add("laser-cell"); //TODO: Check if this line is necessary
        cellElement.innerHTML = LASER;
      }
      rowElement.appendChild(cellElement);
    }
    boardElement.appendChild(rowElement);
  }
}

/* -------------------------------------------------------------------------- */

function createCell(gameObject = null) {
  return { type: SKY, gameObject: gameObject };
}

/* -------------------------------------------------------------------------- */

function updateCell(pos, content) {
  if (pos.i >= 0 && pos.i < BOARD_SIZE && pos.j >= 0 && pos.j < BOARD_SIZE) {
    gBoard[pos.i][pos.j].gameObject = content; // Update the game board
    renderCell(pos, content); // Update the HTML display
  }
}

/* -------------------------------------------------------------------------- */

function updateScore(diff) {
  const elScore = document.querySelector("h2 span");

  if (diff === 0) {
    gGame.score = 0;
  }
  // Model
  gGame.score += diff;
  // DOM
  elScore.innerText = gGame.score;
}

/* -------------------------------------------------------------------------- */

function gameOver(isVictory) {
  console.log("Game Over");
  showGameOver();
  const elMsgSpan = document.querySelector(".game-over .msg");
  elMsgSpan.innerText = isVictory ? "VICTORY" : "GAME OVER";
  gGame.isOn = false;
}

/* -------------------------------------------------------------------------- */

function showGameOver() {
  showElement(".game-over");
}

/* -------------------------------------------------------------------------- */

function showElement(selector) {
  const el = document.querySelector(selector);
  el.classList.remove("hide");
}

/* -------------------------------------------------------------------------- */

function hideElement(selector) {
  const el = document.querySelector(selector);
  el.classList.add("hide");
}

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

//! OLD LOOP AND INTERVAL FUNCTIONS, CAN DELETE

// function gameLoop() {
//   shiftBoardRight(gBoard); // Move aliens
//   // renderBoard(gBoard);     // Then render the board
// }

// function shiftingRight() {
//   shiftBoardRight(gBoard); // Move aliens
//   // renderBoard(gBoard);     // Then render the board
// }
// function shiftingDown() {
//   shiftBoardDown(gBoard); // Move aliens
//   // renderBoard(gBoard);     // Then render the board
// }
// function shiftingLeft() {
//   shiftBoardLeft(gBoard); // Move aliens
//   // renderBoard(gBoard);     // Then render the board
// }

// setInterval(gameLoop, 100);
// setInterval(shiftingRight, 100); //! Original first shifting function
// setInterval(shiftingDown, 100);
// setInterval(shiftingLeft, 100);

// switch (movingDirection){
// case "left":

// }
// shiftingRight()
// shiftBoardRight(gBoard)
