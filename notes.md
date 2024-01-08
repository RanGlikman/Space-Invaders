<!-- -------------------------------- TODO --------------------------------- -->

<!-- Set score to 0 after restarting game -->

<!-- Set superModeLeft to 3 after restarting game -->

Use fromI, toI in function shiftBoardLeft/Right/Down(board, fromI, toI)

<!-- Add counter to super mode and display it in DOM -->

<!-- Fix blowUpNeighbors function -->

Add the 8 handleAlienHit function calling into a single blowUpNeighbors function

Add Space Candies randomly to hero's row

Eating Space Candies activates interval for gIsAlienFreeze

Declutter extra lines and functions and clean up code

<!-- -------------------------------- BUGS --------------------------------- -->

<!-- Fix interval not resetting: Needed clearInterval(gIntervalAliens) instead of clearInterval(moveAliens) -->

Laser sometimes kills the alien(s) above it, and only grants 10 points (when aliens move too fast?)

Sometimes aliens moving into lasers won't grant points (when aliens move too fast?)

<!-- Score isn't restarted to 0 after restarting game -->

<!-- superModeLeft isn't restarted to 3 after restarting game -->

Blow Up Neighbors doesn't destroy all aliens when activating after restarting game

<!-- ----------------------------- EXTRA CODE ------------------------------ -->

// gIntervalAliens = setInterval(moveAliens, ALIEN_SPEED);

// board[gHero.pos.i][gHero.pos.j].gameObject = DEAD

// if (board[BOARD_SIZE - 3][j].gameObject === ALIEN) {

// const DEAD = "💀";

<!-- ------------------------------ OLD CODE ------------------------------- -->

    <!-- <body onload="init()" onkeyup="moveHero(event)"> --> <!-- TODO: Check when to call moveHero(event)-->

// var board = [] //TODO: Check where to implement board resetting
// alert(("init function called"))
// alert(gGame.score);

// console.log("Key pressed:", ev.key, "Next location:", nextLocation);
// console.log("Moving hero to:", nextLocation);
// alert("superModeleft: " + superModeleft)

// if (
// gBoard[laserPos.i] &&
// (gBoard[laserPos.i][laserPos.j].gameObject === ALIEN ||
// ALIEN === gBoard[laserPos.i][laserPos.j].gameObject)
// )

    // laserMeetsAlien()

// function laserMeetsAlien(){
// handleAlienHit(laserPos);
// updateCell(laserPos, null); // מוריד לייזר (מחליף אותו בתא ריק)
// clearInterval(blinkInterval);
// clearInterval(moveInterval);
// gHero.isShoot = false;

// return;
// }

// case "N":
// case "n":
// if (gHero.isShoot) {
// console.log(laserPos.i)
// console.log(laserPos.j)
// console.log(gBoard)
// blowUpNeighbors(gBoard, laserPos.i, laserPos.j);
// }
// break;

        // cellElement.classList.add("laser-cell"); //TODO: Check if necessary

<!-- ------------------------------- Cherry ------------------------------- -->

// if (nextCell === CHERRY) {
// updateScore(10)
// }
// if (board[i][j].gameObject === EMPTY) {
// cellElement.innerHTML = EMPTY;
// }
// else{cellElement.innerHTML = EMPTY;}

      // function getEmptyCell() {

// var emptyCells = []

// for (var i = 0; i < gBoard.length; i++) {

// for (var j = 0; j < gBoard[i].length; j++) {
// var currCell = gBoard[i][j]
// if (currCell === EMPTY) {
// emptyCells.push({ i, j })
// }
// console.log(emptyCells)
// }

// }
// if (!emptyCells.length) return null

// var randomIdx = getRandomIntInclusive(0, emptyCells.length - 1)
// return emptyCells[randomIdx]

// }

// /_ -------------------------------------------------------------------------- _/
// function addCherry() {

// var cell = getEmptyCell()
// if (!cell) return
// gBoard[cell.i][cell.j] = CHERRY
// renderCell(cell, CHERRY)
// }

const CHERRY = "🍒";
const EMPTY = ".";

// gCherryInterval = setInterval(addCherry, 15000)

var gCherryInterval;

      if (board[i][j].gameObject === CHERRY) {
        cellElement.innerHTML = CHERRY;
      }


<!-- --------------------------------- css --------------------------------- -->
/* @font-face {
  font-family: "PixelFont";
  src: url("fonts/PixelFont.ttf") format("truetype");
} */

  /*background-color: rgb(30, 30, 30); /*Remove when game is finished*/