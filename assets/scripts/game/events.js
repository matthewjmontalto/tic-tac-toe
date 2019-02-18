const getFormFields = require('../../../lib/get-form-fields.js')
const gameEngine = require('./game-engine.js')
const gameUi = require('./ui.js')
const api = require('./api.js')
const storage = require('../store.js')
// need to know which

// calls functions relating to local game play
const onPlayerChoice = (event) => {
  const playerChoice = event.target

  storage.store.currentTurn = gameEngine.turnCounter(playerChoice)

  gameEngine.checkForWinner(storage.store.currentTurn)

  gameUi.drawTurn(playerChoice)
}

const onSignUp = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  console.log(formData)

  api.signUp(formData)
    .then(gameUi.signUpSuccess)
    .catch(gameUi.signUpFailure)

  // listens for game interaction. Should be disabled until sign-in/sign-up
  $('.game-space').on('click', onPlayerChoice)
  // resets form fields
  $('#sign-up-form').trigger('reset')
}

const onSignIn = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signIn(formData)
    .then(gameUi.signInSuccess)
    .catch(gameUi.signInFailure)

  // resets form fields
  $('#sign-in-form').trigger('reset')

  // listens for game interaction. Should be disabled until sign-in/sign-up
  $('.game-space').on('click', onPlayerChoice)
}

const onChangePassword = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(gameUi.changePasswordSuccess)
    .catch(gameUi.changePasswordFailure)

  // resets form fields
  $('#change-password-form').trigger('reset')
}

const onSignOut = (event) => {
  event.preventDefault()

  api.signOut()
    .then(gameUi.signOutSuccess)
    .catch(gameUi.signOutFailure)
}

const onResetGame = (event) => {
  event.preventDefault()

  // create new game

  // reset turn counter

  $('.game-space').html('')
}

const addHandlers = () => {
  $('#sign-in-form').on('submit', onSignIn)
  $('#sign-up-form').on('submit', onSignUp)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out-button').on('click', onSignOut)
  $('#reset-game').on('click', onResetGame)
}

module.exports = {
  onPlayerChoice: onPlayerChoice,
  addHandlers: addHandlers
}
