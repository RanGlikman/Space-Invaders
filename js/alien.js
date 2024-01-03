"use strict";

const ALIEN_SPEED = 500;
var gIntervalAliens;
var gAliensTopRowIdx;
var gAliensBottomRowIdx;
var gIsAlienFreeze = true;

function createAliens(board) {
  for (let i = 0; i < ALIEN_ROW_COUNT; i++) {
    for (let j = 0; j < ALIEN_ROW_LENGTH; j++) {
      board[i][j].gameObject = ALIEN;
    }
  }
}

function handleAlienHit(pos) {
  // מוריד חייזר מהלוח
  gBoard[pos.i][pos.j].gameObject = null;
  updateCell(pos, null); // מחליף חייזר בתא ריק
  score += 10;
  ALIENS_ON_BOARD--
  updateScoreDisplay();
  if (ALIENS_ON_BOARD === 0) {
    alert('victory')
    gGame.victory = true
    gameOver(true)
}
}


function shiftBoardRight(board, fromI, toI) {}

function shiftBoardLeft(board, fromI, toI) {}

function shiftBoardDown(board, fromI, toI) {}

function moveAliens() {}
