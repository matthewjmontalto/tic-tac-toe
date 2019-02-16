const gameEngine = require('./game-engine.js')
const gameUi = require('./ui.js')
const storage = require('../store.js')
// need to know which

const onPlayerChoice = (event) => {
  const playerChoice = event.target

  storage.store.currentTurn = gameEngine.turnCounter(playerChoice)

  gameEngine.checkForWinner(storage.store.currentTurn)

  gameUi.drawTurn(playerChoice)
}

const addHandlers = () => {
  $('.game-space').on('click', onPlayerChoice)
}

module.exports = {
  onPlayerChoice: onPlayerChoice,
  addHandlers: addHandlers
}
