const gameEngine = require('./game-engine.js')
// need to know which

const onPlayerChoice = (event) => {
  const playerChoice = event.target
  $(playerChoice).html(gameEngine.turnCounter(playerChoice))
  gameEngine.checkForWinner()
  // gameEngine.updateCurrentGame(playerChoice)
}

const addHandlers = () => {
  $('.game-space').on('click', onPlayerChoice)
}

module.exports = {
  onPlayerChoice: onPlayerChoice,
  addHandlers: addHandlers
}
