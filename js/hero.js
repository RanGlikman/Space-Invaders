"use strict";

const LASER_SPEED = 80;
var gHero = { pos: { i: 12, j: 5 }, isShoot: false };
function createHero(board) {
  board[gHero.pos.i][gHero.pos.j].gameObject = HERO;
}

function onKeyDown(ev) {
  const nextLocation = { i: gHero.pos.i, j: gHero.pos.j };
  console.log("Key pressed:", ev.key, "Current location:", nextLocation); //todo remove
  switch (ev.key) {
    case "ArrowLeft":
      if (nextLocation.j > 0) nextLocation.j--;
      break;

    case "ArrowRight":
      if (nextLocation.j < BOARD_SIZE - 1) nextLocation.j++;
      break;

    default:
      return null;
  }
  console.log("Key pressed:", ev.key, "Next location:", nextLocation); //todo remove
  moveHero(nextLocation);
}

function moveHero(nextLocation) {
  console.log("Moving hero to:", nextLocation); //todo remove
  if (!gGame.isOn) return;

  if (nextLocation.i < 0 || nextLocation.i >= BOARD_SIZE ||
      nextLocation.j < 0 || nextLocation.j >= BOARD_SIZE) {
    console.log("Next location is out of bounds.");
    return;
  }

  // Clear old position
  if (gBoard[gHero.pos.i][gHero.pos.j]) {
    gBoard[gHero.pos.i][gHero.pos.j].gameObject = null;
    renderCell(gHero.pos, "");
  }

  // Set new position
  gHero.pos = nextLocation;
  if (gBoard[gHero.pos.i][gHero.pos.j]) {
    gBoard[gHero.pos.i][gHero.pos.j].gameObject = HERO;
    renderCell(gHero.pos, HERO);
  }

  console.log("Hero moved to:", gHero.pos);
}


function renderCell(position, content) {
  // Find the cell element and update its content
  const cellEl = getElCell(position);
  if (cellEl) cellEl.innerHTML = content;
}



function shoot() {

}

function blinkLaser(pos) {

}
