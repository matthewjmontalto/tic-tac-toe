const gameBoard = ['', '', '', '', '', '', '', '', '']
let turn = 1

const turnCounter = (playerChoice) => {
  const playerOne = 'X'
  const playerTwo = 'O'
  const chosenSpace = playerChoice.getAttribute('data-space')

  if ($(playerChoice).text() === 'X' || $(playerChoice).text() === 'O') {
    return console.log('shit!')
  }
  if (turn === 9) {
    console.log('game over. reset board')
    turn = 1
    return
  }
  if (turn % 2 !== 0) {
    turn += 1
    gameBoard[chosenSpace] = playerOne
    return playerOne
  } else {
    turn += 1
    gameBoard[chosenSpace] = playerTwo
    return playerTwo
  }
}

const updateCurrentGame = (playerChoice) => {
// when player picks space, pass player value to gameBoard array

  // need a way to capture value in space data attribute

  // need a way to match playerChoice with gameBoard array index
  console.log(gameBoard)
}

module.exports = {
  turnCounter: turnCounter,
  updateCurrentGame: updateCurrentGame
}
