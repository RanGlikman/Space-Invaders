//TODO ---------------------------------- TODO ---------------------------------- \*/

//// Set score to 0 after restarting game
//// Set superModeLeft to 3 after restarting game
// Use fromI, toI in function shiftBoardLeft/Right/Down(board, fromI, toI)
//// Add counter to super mode and display it in DOM
// Fix blowUpNeighbors function
// Declutter extra lines and functions and clean up code

//! -------------------------------- BUGS -------------------------------- \*/

////Fix interval not resetting: Needed clearInterval(gIntervalAliens) instead of clearInterval(moveAliens)
// Laser sometimes kills the alien(s) above it, and only grants 10 points (when aliens move too fast?)
// Sometimes aliens moving into lasers won't grant points (when aliens move too fast?)
//// Score isn't restarted to 0 after restarting game
//// superModeLeft isn't restarted to 3 after restarting game

//? ------------------------------- EXTRA CODE ------------------------------- \*/

// gIntervalAliens = setInterval(moveAliens, ALIEN_SPEED);

// board[gHero.pos.i][gHero.pos.j].gameObject = DEAD

// if (board[BOARD_SIZE - 3][j].gameObject === ALIEN) {

// const DEAD = "💀";

// var board = [] //TODO: Check where to implement board resetting
// alert(("init function called"))
// alert(gGame.score);
