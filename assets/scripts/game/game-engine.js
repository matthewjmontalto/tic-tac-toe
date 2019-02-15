const gameBoard = ['', '', '', '', '', '', '', '', '']
let turn = 1

const turnCounter = (playerChoice) => {
  const playerOne = 'X'
  const playerTwo = 'O'
  const chosenSpace = playerChoice.getAttribute('data-space')

  if ($(playerChoice).text() === 'X' || $(playerChoice).text() === 'O') {
    return console.log('shit!')
  }
  if (turn === 10) {
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

const checkForWinner = () => {
  console.log(gameBoard)
  if (
    (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') ||
    (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O')
  ) {
    return console.log('Winner!')
  } else if (
    (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') ||
    (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O')
  ) {
    return console.log('Winner!')
  } else if (
    (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') ||
    (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O')
  ) {
    return console.log('Winner!')
  } else if (
    (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') ||
    (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O')
  ) {
    return console.log('Winner!')
  } else if (
    (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') ||
    (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O')
  ) {
    return console.log('Winner!')
  } else if (
    (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') ||
    (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O')
  ) {
    return console.log('Winner!')
  } else if (
    (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') ||
    (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O')
  ) {
    return console.log('Winner!')
  } else if (
    (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') ||
    (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O')
  ) {
    return console.log('Winner!')
  } else if (turn >= 9) {
    console.log('Tie!')
  } else {
    console.log('Next Turn!')
  }
  // winner = 0, 1, 2 √
  // winner = 3, 4, 5 √
  // winner = 6, 7, 8 √
  // winner = 0, 3, 6 √
  // winner = 1, 4, 7 √
  // winner = 2, 5, 8 √
  // winner = 0, 4, 8 √
  // winner = 2, 4, 6 √
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
