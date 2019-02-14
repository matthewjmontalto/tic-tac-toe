
let turn = 1

const turnCounter = () => {
  const playerOne = 'X'
  const playerTwo = 'O'
  if (turn === 10) {
    console.log('game over. reset board')
    turn = 1
    return
  }
  if (turn % 2 !== 0) {
    turn += 1
    return playerOne
  } else {
    turn += 1
    return playerTwo
  }
}

module.exports = {
  turnCounter: turnCounter
}
