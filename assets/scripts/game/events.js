const gameEngine = require('./game-engine.js')
// need to know which

const onPlayerChoice = (event) => {
  const choice = event.target
  $(choice).html(gameEngine.turnCounter(choice))
}

module.exports = {
  onPlayerChoice: onPlayerChoice
}
