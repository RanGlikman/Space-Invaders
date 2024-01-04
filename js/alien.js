"use strict";
/* -------------------------------------------------------------------------- */
const ALIEN_SPEED = 500;
var gIntervalAliens;
var gAliensTopRowIdx;
var gAliensBottomRowIdx;
var gIsAlienFreeze = true;
let aliensMove = true;

/* -------------------------------------------------------------------------- */

function createAliens(board) {
  for (let i = 0; i < ALIEN_ROW_COUNT; i++) {
    for (let j = 0; j < ALIEN_ROW_LENGTH; j++) {
      board[i][j].gameObject = ALIEN;
    }
  }
}

/* -------------------------------------------------------------------------- */

function handleAlienHit(pos) {
  // מוריד חייזר מהלוח
  if (pos.i < 0) return;
  gBoard[pos.i][pos.j].gameObject = null;
  updateCell(pos, null); // מחליף חייזר בתא ריק
  score += 10;
  ALIENS_ON_BOARD--;
  console.log("ALIENS_ON_BOARD: " + ALIENS_ON_BOARD);
  updateScoreDisplay();
  if (ALIENS_ON_BOARD === 0) {
    gGame.victory = true;
    gameOver(true);
    // alert('victory')
    // setTimeout(alert('victory'), 3000)
  }
}

/* -------------------------------------------------------------------------- */

// function shiftBoardRight(board, fromI, toI) {
function shiftBoardRight(board) {
  // let aliensMove = true;
  if (!aliensMove) {
    return;
  }
  let reachedEnd = false;

  for (let i = BOARD_SIZE - 1; i >= 0; i--) {
    for (let j = BOARD_SIZE - 1; j >= 0; j--) {
      if (board[i][j].gameObject === ALIEN && j + 1 < board[i].length) {
        board[i][j].gameObject = null;
        board[i][j + 1].gameObject = ALIEN;
        for (let i = 0; i < ALIEN_ROW_COUNT; i++)
          if (board[i][BOARD_SIZE - 1].gameObject === ALIEN) {
            reachedEnd = true;
            // break;
          }
      }
    }
  }
  renderBoard(board);
  if (reachedEnd) {
    console.log("An alien has reached the right border. Start going down...");
    aliensMove = false;
    setTimeout(() => shiftBoardDown(board), ALIEN_SPEED)
  }
}

/* -------------------------------------------------------------------------- */

// function shiftBoardLeft(board, fromI, toI) {}
function shiftBoardLeft(board) {
  console.log("Start moving left")
  let aliensMove = true;
  if (!aliensMove) {
    return;
  }
  let reachedEnd = false;
  // for (let i = BOARD_SIZE - 1; i >= 0; i--) {
    // for (let j = BOARD_SIZE - 1; j >= 0; j--) {
  for (let i = 0; i <= BOARD_SIZE - 1; i++) {
    for (let j = 0; j <= BOARD_SIZE - 1; j++) {
      // if (board[i][j].gameObject === ALIEN && j + 1 < board[i].length) {
      // if (board[i][j].gameObject === ALIEN && j -1 < board[i].length) {
      if (board[i][j].gameObject === ALIEN) {
        board[i][j - 1].gameObject = ALIEN;
        board[i][j].gameObject = null;
        
        // for (let i = 0; i < ALIEN_ROW_COUNT; i++)
          if (board[i][0].gameObject === ALIEN) {
            reachedEnd = true;
            break;
          }
      }
    }
  }
  renderBoard(board);
  if (reachedEnd) {
    console.log("An alien has reached the right border. Start going down...")
    aliensMove = false;
    shiftBoardDown(board);
  }
}

/* -------------------------------------------------------------------------- */

// function shiftBoardDown(board, fromI, toI) {
function shiftBoardDown(board) {
  aliensMove = true;
  if (!aliensMove) {
    return;
  }
  let reachedEnd = false;

  for (let i = BOARD_SIZE - 1; i >= 0; i--) {
    for (let j = BOARD_SIZE - 1; j >= 0; j--) {
      if (board[i][j].gameObject === ALIEN) {
        board[i][j].gameObject = null;
        board[i + 1][j].gameObject = ALIEN;
        reachedEnd = true;
      }
    }
  }
  renderBoard(board);
  if (reachedEnd) {
    console.log("Aliens went down 1 ");
    aliensMove = false;
    // shiftBoardLeft(board);
    setTimeout(() => shiftBoardLeft(board), ALIEN_SPEED)
  }
}

/* -------------------------------------------------------------------------- */

function moveAliens() {}
