const gameEngine = require('./game-engine.js')
// need to know which

const onPlayerChoice = (event) => {
  const playerChoice = event.target
  $(playerChoice).html(gameEngine.turnCounter(playerChoice))
  gameEngine.updateCurrentGame(playerChoice)
}

module.exports = {
  onPlayerChoice: onPlayerChoice
}
