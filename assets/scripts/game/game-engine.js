const storage = require('../store.js')
const ui = require('./ui.js')

const turnCounter = (playerChoice) => {
  const playerOne = 'X'
  const playerTwo = 'O'

  const chosenSpace = $(playerChoice).data('space')
  // Wrap this around event handler.
  if ($(playerChoice).text() === 'X' || $(playerChoice).text() === 'O') {
    ui.gameProgress('#user-feedback', 'Invalid Space!')
    return
  }
  if (storage.turn === 1) {
    storage.newGame.over = true
    ui.gameProgress('#user-feedback', 'Tie!')
    ui.removeListener('.game-space')
    storage.turn = storage.gameBoard.length
    return
  }
  if (storage.turn % 2 !== 0) {
    storage.turn -= 1
    storage.gameBoard[chosenSpace] = playerOne
    ui.gameProgress('#user-feedback', `O's turn!`)
    return playerOne
  } else {
    storage.turn -= 1
    storage.gameBoard[chosenSpace] = playerTwo
    ui.gameProgress('#user-feedback', `X's turn!`)
    return playerTwo
  }
}

// const revertTurn = () => {
//
// }

const checkForWinner = (player) => {
  if (
    (storage.gameBoard[0] === 'X' && storage.gameBoard[1] === 'X' && storage.gameBoard[2] === 'X') ||
    (storage.gameBoard[0] === 'O' && storage.gameBoard[1] === 'O' && storage.gameBoard[2] === 'O')
  ) {
    // pass true to newGame object over
    storage.newGame.over = true
    ui.gameProgress('#user-feedback', `${player} is the winner!`)
    // turn off event listener
    ui.removeListener('.game-space')
  } else if (
    (storage.gameBoard[3] === 'X' && storage.gameBoard[4] === 'X' && storage.gameBoard[5] === 'X') ||
    (storage.gameBoard[3] === 'O' && storage.gameBoard[4] === 'O' && storage.gameBoard[5] === 'O')
  ) {
    storage.newGame.over = true
    ui.gameProgress('#user-feedback', `${player} is the winner!`)
    ui.removeListener('.game-space')
  } else if (
    (storage.gameBoard[6] === 'X' && storage.gameBoard[7] === 'X' && storage.gameBoard[8] === 'X') ||
    (storage.gameBoard[6] === 'O' && storage.gameBoard[7] === 'O' && storage.gameBoard[8] === 'O')
  ) {
    storage.newGame.over = true
    ui.gameProgress('#user-feedback', `${player} is the winner!`)
    ui.removeListener('.game-space')
  } else if (
    (storage.gameBoard[0] === 'X' && storage.gameBoard[3] === 'X' && storage.gameBoard[6] === 'X') ||
    (storage.gameBoard[0] === 'O' && storage.gameBoard[3] === 'O' && storage.gameBoard[6] === 'O')
  ) {
    storage.newGame.over = true
    ui.gameProgress('#user-feedback', `${player} is the winner!`)
    ui.removeListener('.game-space')
  } else if (
    (storage.gameBoard[1] === 'X' && storage.gameBoard[4] === 'X' && storage.gameBoard[7] === 'X') ||
    (storage.gameBoard[1] === 'O' && storage.gameBoard[4] === 'O' && storage.gameBoard[7] === 'O')
  ) {
    storage.newGame.over = true
    ui.gameProgress('#user-feedback', `${player} is the winner!`)
    ui.removeListener('.game-space')
  } else if (
    (storage.gameBoard[2] === 'X' && storage.gameBoard[5] === 'X' && storage.gameBoard[8] === 'X') ||
    (storage.gameBoard[2] === 'O' && storage.gameBoard[5] === 'O' && storage.gameBoard[8] === 'O')
  ) {
    storage.newGame.over = true
    ui.gameProgress('#user-feedback', `${player} is the winner!`)
    ui.removeListener('.game-space')
  } else if (
    (storage.gameBoard[0] === 'X' && storage.gameBoard[4] === 'X' && storage.gameBoard[8] === 'X') ||
    (storage.gameBoard[0] === 'O' && storage.gameBoard[4] === 'O' && storage.gameBoard[8] === 'O')
  ) {
    storage.newGame.over = true
    ui.gameProgress('#user-feedback', `${player} is the winner!`)
    ui.removeListener('.game-space')
  } else if (
    (storage.gameBoard[2] === 'X' && storage.gameBoard[4] === 'X' && storage.gameBoard[6] === 'X') ||
    (storage.gameBoard[2] === 'O' && storage.gameBoard[4] === 'O' && storage.gameBoard[6] === 'O')
  ) {
    storage.newGame.over = true
    ui.gameProgress('#user-feedback', `${player} is the winner!`)
    ui.removeListener('.game-space')
  } else {
  }
}

module.exports = {
  turnCounter: turnCounter,
  checkForWinner: checkForWinner

}
