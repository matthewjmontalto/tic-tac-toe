const storage = require('../store.js')
const ui = require('./ui.js')

const gameBoard = ['', '', '', '', '', '', '', '', '']
let turn = gameBoard.length

const turnCounter = (playerChoice) => {
  const playerOne = 'X'
  const playerTwo = 'O'

  const chosenSpace = $(playerChoice).data('space')

  if ($(playerChoice).text() === 'X' || $(playerChoice).text() === 'O') {
    ui.gameProgress('#user-feedback', 'Invalid Space!')
    return
  }
  if (turn === 1) {
    ui.gameProgress('#user-feedback', 'Tie!')
    ui.removeListener('.game-space')
    turn = gameBoard.length
    return
  }
  if (turn % 2 !== 0) {
    turn -= 1
    gameBoard[chosenSpace] = playerOne
    ui.gameProgress('#user-feedback', `O's turn!`)
    return playerOne
  } else {
    turn -= 1
    gameBoard[chosenSpace] = playerTwo
    ui.gameProgress('#user-feedback', `X's turn!`)
    return playerTwo
  }
}

const checkForWinner = (player) => {
  if (
    (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') ||
    (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O')
  ) {
    // pass true to newGame object over
    storage.newGame.over = true
    ui.gameProgress('#user-feedback', `${player} is the winner!`)
    // turn off event listener
    ui.removeListener('.game-space')
  } else if (
    (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') ||
    (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O')
  ) {
    storage.newGame.over = true
    ui.gameProgress('#user-feedback', `${player} is the winner!`)
    ui.removeListener('.game-space')
  } else if (
    (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') ||
    (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O')
  ) {
    storage.newGame.over = true
    ui.gameProgress('#user-feedback', `${player} is the winner!`)
    ui.removeListener('.game-space')
  } else if (
    (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') ||
    (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O')
  ) {
    storage.newGame.over = true
    ui.gameProgress('#user-feedback', `${player} is the winner!`)
    ui.removeListener('.game-space')
  } else if (
    (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') ||
    (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O')
  ) {
    storage.newGame.over = true
    ui.gameProgress('#user-feedback', `${player} is the winner!`)
    ui.removeListener('.game-space')
  } else if (
    (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') ||
    (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O')
  ) {
    storage.newGame.over = true
    ui.gameProgress('#user-feedback', `${player} is the winner!`)
    ui.removeListener('.game-space')
  } else if (
    (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') ||
    (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O')
  ) {
    storage.newGame.over = true
    ui.gameProgress('#user-feedback', `${player} is the winner!`)
    ui.removeListener('.game-space')
  } else if (
    (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') ||
    (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O')
  ) {
    storage.newGame.over = true
    ui.gameProgress('#user-feedback', `${player} is the winner!`)
    ui.removeListener('.game-space')
  } else {
  }
}

// const updateCurrentGame = (playerChoice) => {
// when player picks space, pass player value to gameBoard array

// need a way to capture value in space data attribute

// need a way to match playerChoice with gameBoard array index
//   console.log(gameBoard)
// }

module.exports = {
  turnCounter: turnCounter,
  checkForWinner: checkForWinner
}
