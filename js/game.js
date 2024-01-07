"use strict";
/* -------------------------------------------------------------------------- */
const SKY = "Sky";
const BOARD_SIZE = 14;
const ALIEN_ROW_LENGTH = 8; //8
const ALIEN_ROW_COUNT = 3; //3
const STARTING_ALIENS = ALIEN_ROW_LENGTH * ALIEN_ROW_COUNT;
var ALIENS_ON_BOARD = STARTING_ALIENS;
var HERO = "👆";
var ALIEN = "👾";
const LASER = "🔺";
var superModeleft = 3;
var laserPos = { i: -1, j: -1 };
var gBoard;
var gGame = {
  isOn: true,
  alienCount: 0,
};

/* -------------------------------------------------------------------------- */

function init() {
  hideGameOver();
  aliensMoveRight = true;
  gGame.isOn = true;
  gGame.alienCount = 0;
  gGame.score = 0;
  directionAfterShiftingDown = 1;
  superModeleft = 3;
  ALIENS_ON_BOARD = STARTING_ALIENS;
  gBoard = createBoard();
  createHero(gBoard);
  renderBoard(gBoard);
  updateScoreDisplay();
  updateSuperModeleft();
  gIntervalAliens = setInterval(moveAliens, ALIEN_SPEED);
  document.addEventListener("keydown", onKeyDown);
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
        // cellElement.classList.add("laser-cell"); //TODO: Check if necessary
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
  console.log("Aliens killed: " + gGame.alienCount);
  gHero.isShoot = true;
  clearInterval(gIntervalAliens);
  showGameOver();
  const elMsgSpan = document.querySelector(".game-over .msg");
  elMsgSpan.innerText = isVictory ? "VICTORY" : "GAME OVER";
  gGame.isOn = false;
}

/* -------------------------------------------------------------------------- */

function showGameOver() {
  showElement(".game-over");
}

function hideGameOver() {
  hideElement(".game-over");
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

function updateSuperModeleft() {
  const elSuperModeleft = document.querySelector("h3 span");
  elSuperModeleft.innerText = superModeleft;
}
