"use strict";

const SKY = "Sky";
const BOARD_SIZE = 14;
const ALIEN_ROW_LENGTH = 8;
const ALIEN_ROW_COUNT = 3;
const HERO = "♆";
const ALIEN = "👽";
const LASER = "⤊";

var gBoard;
var gGame = {
  isOn: false,
  alienCount: 0,
};

function init() {
  gBoard = createBoard();
  createHero(gBoard)
  renderBoard(gBoard);
}

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

function renderBoard(board) {
  var boardElement = document.getElementById("gameBoard");
  boardElement.innerHTML = "";

  for (var i = 0; i < board.length; i++) {
    var rowElement = document.createElement("div");
    for (var j = 0; j < board[i].length; j++) {
      var cellElement = document.createElement("div");
      cellElement.classList.add("cell");
      if (board[i][j].gameObject === ALIEN) {
        cellElement.innerHTML = ALIEN;
      }
      if (board[i][j].gameObject === HERO) {
        cellElement.innerHTML = HERO;
      }
      // cellElement.innerHTML = ''     //Check if necessary 
      rowElement.appendChild(cellElement);
    }
    boardElement.appendChild(rowElement);
  }
}

function createCell(gameObject = null) {
  return { type: SKY, gameObject: gameObject };
}

function updateCell(pos, gameObject = null) {
  gBoard[pos.i][pos.j].gameObject = gameObject;
  var elCell = getElCell(pos);
  elCell.innerHTML = gameObject || "";
}
