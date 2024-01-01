"use strict";

const LASER_SPEED = 80;
function createHero(board) {
  var gHero = { pos: { i: 12, j: 5 }, isShoot: false };
  board[gHero.pos.i][gHero.pos.j].gameObject = HERO;
}

function onKeyDown(ev) {
  // Key handling code
}

function moveHero(dir) {
  // Hero movement code
}

function shoot() {
  // Shooting code
}

function blinkLaser(pos) {
  // Laser blinking code
}
