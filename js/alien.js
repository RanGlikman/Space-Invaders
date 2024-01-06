"use strict"; //?
//TODO: When aliens hit hero, call gameOver function with !isVictory
/* -------------------------------------------------------------------------- */
const ALIEN_SPEED = 1;
var gIntervalAliens;
var gAliensTopRowIdx;
var gAliensBottomRowIdx;
var gIsAlienFreeze = false; // Change to true for debugging
var aliensMoveRight = true;
var aliensMoveDown = true;
var aliensMoveLeft = true;
var directionAfterShiftingDown = 1;

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
  gGame.score += 10;
  ALIENS_ON_BOARD--;
  gGame.alienCount++;
  console.log("ALIENS_ON_BOARD: " + ALIENS_ON_BOARD);
  updateScoreDisplay();
  if (ALIENS_ON_BOARD === 0) {
    gGame.victory = true;
    gameOver(true);
  }
}

/* -------------------------------------------------------------------------- */

// function shiftBoardRight(board, fromI, toI) { //TODO: Add fromI & toI
function shiftBoardRight(board) {
  console.log("Executing shiftBoardRight");
  if (!aliensMoveRight || gIsAlienFreeze) {
    return;
  }
  let reachedEnd = false;
  for (let i = BOARD_SIZE - 1; i >= 0; i--) {
    for (let j = BOARD_SIZE - 1; j >= 0; j--) {
      if (board[BOARD_SIZE - 2][j].gameObject === ALIEN) {
        alienTouchingHero();
      } //!!!!!
      if (board[i][j].gameObject === ALIEN) {
        board[i][j].gameObject = null;
        board[i][j + 1].gameObject = ALIEN;
        for (let i = 0; i < ALIEN_ROW_COUNT; i++) renderBoard(board);
        if (board[i][BOARD_SIZE - 1].gameObject === ALIEN) {
          reachedEnd = true;
        }
      }
    }
  }
  renderBoard(board);
  if (reachedEnd) {
    console.log("An alien has reached the right border. Start going down...");
    aliensMoveRight = false;
    aliensMoveLeft = false;
    aliensMoveDown = true;
  }
}

/* -------------------------------------------------------------------------- */

// function shiftBoardLeft(board, fromI, toI) { //TODO: Add fromI & toI
function shiftBoardLeft(board) {
  console.log("Executing shiftBoardLeft");
  if (!aliensMoveLeft || gIsAlienFreeze) {
    return;
  }
  let reachedEnd = false;
  for (let i = 0; i <= BOARD_SIZE - 1; i++) {
    for (let j = 0; j <= BOARD_SIZE - 1; j++) {
      if (board[BOARD_SIZE - 2][j].gameObject === ALIEN) {
        alienTouchingHero();
      } //!!!!!
      if (board[i][j].gameObject === ALIEN) {
        board[i][j - 1].gameObject = ALIEN;
        board[i][j].gameObject = null;
        console.log("moved left");
        renderBoard(board);
        for (let i = 0; i < ALIEN_ROW_COUNT; i++) renderBoard(board);
        if (board[i][0].gameObject === ALIEN) {
          console.log("Reached left end?");
          reachedEnd = true;
        }
      }
    }
  }
  renderBoard(board);
  if (reachedEnd) {
    console.log("An alien has reached the right border. Start going down...");
    aliensMoveLeft = false;
    aliensMoveDown = false;
    aliensMoveDown = true;
  }
}

/* -------------------------------------------------------------------------- */

// function shiftBoardDown(board, fromI, toI) { //TODO: Add fromI & toI
function shiftBoardDown(board) {
  console.log("Executing shiftBoardDown");
  if (!aliensMoveDown || gIsAlienFreeze) {
    return;
  }
  let reachedEnd = false;
  for (let i = BOARD_SIZE - 1; i >= 0; i--) {
    for (let j = 0; j <= BOARD_SIZE - 1; j++) {
      if (board[BOARD_SIZE - 2][j].gameObject === ALIEN) {
        alienTouchingHero();
      } //!!!!!
      if (board[i][j].gameObject === ALIEN) {
        board[i][j].gameObject = null;
        board[i + 1][j].gameObject = ALIEN;
        reachedEnd = true;
        console.log("Aliens went down 1 row");
        renderBoard(board);
      }
    }
  }
  if (reachedEnd) {
    aliensMoveDown = false;
    directionAfterShiftingDown *= -1;
    if (directionAfterShiftingDown === -1) {
      aliensMoveLeft = true;
    } else {
      aliensMoveRight = true;
    }
  }
}

/* -------------------------------------------------------------------------- */

function moveAliens() {
  if (aliensMoveRight) {
    shiftBoardRight(gBoard);
  } else if (aliensMoveLeft) {
    shiftBoardLeft(gBoard);
  } else if (aliensMoveDown) {
    shiftBoardDown(gBoard);
  }
}

function alienTouchingHero() {
  gIsAlienFreeze;
  aliensMoveLeft = false;
  aliensMoveDown = false;
  aliensMoveDown = false;
  clearInterval(gIntervalAliens);
  console.log("The aliens have reached planet earth!");
  var isLoss;
  gameOver(isLoss);
  // break;
}

/* -------------------------------------------------------------------------- */
