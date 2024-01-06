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
  // var count = 0;
  for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
    if (i < 0 || i >= board.length) continue;

    for (var j = colIdx - 1; j <= colIdx + 1; j++) {
      if (i === rowIdx && j === colIdx) continue;
      if (j < 0 || j >= board[i].length) continue;

      var pos = { i, j }; // Create position object
      handleAlienHit(pos); // Use this position to check for an alien hit
    }
  }
  return count;
}

/* -------------------------------------------------------------------------- */
