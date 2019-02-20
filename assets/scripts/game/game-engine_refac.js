'use strict'

const storage = require('../store.js')
const ui = require('./ui.js')

// Refactoring

// store game object
storage.gameObject = {
  game: [],
  id: null,
  currentPlayer: 'X',
  playerChoice: null,
  over: false
}

storage.data = {

}
// switches players
const nextTurn = () => {
  storage.gameObject.currentPlayer === 'O' ? storage.gameObject.currentPlayer = 'X' : storage.gameObject.currentPlayer = 'O'
  $('#user-feedback').text(`${storage.gameObject.currentPlayer}'s turn!'`)
}

// check game for remaining turns and return amount
const remainingTurns = () => {
  const emptySpaces = storage.gameObject.game.filter(space => space === '')

  return emptySpaces.length
}
const gameProgress = (responseData) => {
  storage.gameObject.game = responseData.game.cells
  console.log(responseData.game.cells)
}
// check for winner
const checkForWinner = () => {
  const player = storage.gameObject.currentPlayer
  if (
    (storage.gameObject.game[0] === 'X' && storage.gameObject.game[1] === 'X' && storage.gameObject.game[2] === 'X') ||
    (storage.gameObject.game[0] === 'O' && storage.gameObject.game[1] === 'O' && storage.gameObject.game[2] === 'O')
  ) {
    // pass true to newGame object over
    storage.gameObject.over = true
    ui.gameProgress('#user-feedback', `${player} is the winner!`)
    // turn off event listener
    ui.removeListener('.game-space')
  } else if (
    (storage.gameObject.game[3] === 'X' && storage.gameObject.game[4] === 'X' && storage.gameObject.game[5] === 'X') ||
    (storage.gameObject.game[3] === 'O' && storage.gameObject.game[4] === 'O' && storage.gameObject.game[5] === 'O')
  ) {
    storage.gameObject.over = true
    ui.gameProgress('#user-feedback', `${player} is the winner!`)
    ui.removeListener('.game-space')
  } else if (
    (storage.gameObject.game[6] === 'X' && storage.gameObject.game[7] === 'X' && storage.gameObject.game[8] === 'X') ||
    (storage.gameObject.game[6] === 'O' && storage.gameObject.game[7] === 'O' && storage.gameObject.game[8] === 'O')
  ) {
    storage.gameObject.over = true
    ui.gameProgress('#user-feedback', `${player} is the winner!`)
    ui.removeListener('.game-space')
  } else if (
    (storage.gameObject.game[0] === 'X' && storage.gameObject.game[3] === 'X' && storage.gameObject.game[6] === 'X') ||
    (storage.gameObject.game[0] === 'O' && storage.gameObject.game[3] === 'O' && storage.gameObject.game[6] === 'O')
  ) {
    storage.gameObject.over = true
    ui.gameProgress('#user-feedback', `${player} is the winner!`)
    ui.removeListener('.game-space')
  } else if (
    (storage.gameObject.game[1] === 'X' && storage.gameObject.game[4] === 'X' && storage.gameObject.game[7] === 'X') ||
    (storage.gameObject.game[1] === 'O' && storage.gameObject.game[4] === 'O' && storage.gameObject.game[7] === 'O')
  ) {
    storage.gameObject.over = true
    ui.gameProgress('#user-feedback', `${player} is the winner!`)
    ui.removeListener('.game-space')
  } else if (
    (storage.gameObject.game[2] === 'X' && storage.gameObject.game[5] === 'X' && storage.gameObject.game[8] === 'X') ||
    (storage.gameObject.game[2] === 'O' && storage.gameObject.game[5] === 'O' && storage.gameObject.game[8] === 'O')
  ) {
    storage.gameObject.over = true
    ui.gameProgress('#user-feedback', `${player} is the winner!`)
    ui.removeListener('.game-space')
  } else if (
    (storage.gameObject.game[0] === 'X' && storage.gameObject.game[4] === 'X' && storage.gameObject.game[8] === 'X') ||
    (storage.gameObject.game[0] === 'O' && storage.gameObject.game[4] === 'O' && storage.gameObject.game[8] === 'O')
  ) {
    storage.gameObject.over = true
    ui.gameProgress('#user-feedback', `${player} is the winner!`)
    ui.removeListener('.game-space')
  } else if (
    (storage.gameObject.game[2] === 'X' && storage.gameObject.game[4] === 'X' && storage.gameObject.game[6] === 'X') ||
    (storage.gameObject.game[2] === 'O' && storage.gameObject.game[4] === 'O' && storage.gameObject.game[6] === 'O')
  ) {
    storage.gameObject.over = true
    ui.gameProgress('#user-feedback', `${player} is the winner!`)
    ui.removeListener('.game-space')
  } else {
  }
}
// Refactoring

module.exports = {
  nextTurn,
  remainingTurns,
  checkForWinner,
  gameProgress
}
