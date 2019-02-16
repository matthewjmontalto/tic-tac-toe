'use strict'

const storage = require('../store.js')

const drawTurn = function (playerChoice) {
  $(playerChoice).html(storage.store.currentTurn)
}

const gameProgress = function (selector, text) {
  $(selector).text(text)

  setTimeout(() => $(selector).text(''), 3000)
}

const removeListener = function (selector) {
  $(selector).off('click')
}

module.exports = {
  drawTurn: drawTurn,
  gameProgress: gameProgress,
  removeListener: removeListener
}
