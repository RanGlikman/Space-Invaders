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

function handleAlienHit(pos) {}

function shiftBoardRight(board, fromI, toI) {}

function shiftBoardLeft(board, fromI, toI) {}

function shiftBoardDown(board, fromI, toI) {}

function moveAliens() {}
