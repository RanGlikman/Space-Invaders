"use strict";
/* -------------------------------------------------------------------------- */

function createCell(gameObject = null) {
  return { type: SKY, gameObject: gameObject };
}

/* -------------------------------------------------------------------------- */

function getElCell(pos) {
  return document.querySelector(`[data-i='${pos.i}'][data-j='${pos.j}']`);
}

/* -------------------------------------------------------------------------- */

function blowUpNeighbors(board, rowIdx, colIdx) {
  var count = 0;
  for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
    if (i < 0 || i >= board.length) continue;
    for (var j = colIdx - 1; j <= colIdx + 1; j++) {
      if (i === rowIdx && j === colIdx) continue;
      if (j < 0 || j >= board[i].length) continue;
      var pos = { i, j }; // Create position object
      count++;
    }
    console.log(count);
  }
  handleAlienHit(pos);
  console.log("Total neighbors processed: " + count);
  return;
}

/* -------------------------------------------------------------------------- */

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* -------------------------------------------------------------------------- */

function getRandomColor() {
  const colors = ["red", "green", "purple", "orange", "pink"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
