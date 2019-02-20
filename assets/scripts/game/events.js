'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const gameEngine = require('./game-engine_refac.js')
const gameUi = require('./ui.js')
const api = require('./api.js')
const storage = require('../store.js')

// calls functions relating to game play
const onPlayerChoice = (event) => {
  const playerChoice = event.target

  if ($(playerChoice).text() === '') {
    api.updateGame($(playerChoice).data('space'))
      .then((responseData) => {
        // overwrite game array with response array
        gameEngine.gameProgress(responseData)
        // draw turn on game board
        gameUi.drawTurn(playerChoice)
        // check for winner
        gameEngine.checkForWinner()
        if (storage.gameObject.over) {
          return
        }
        // call function that filters game array and determine # of remaining spaces
        if (gameEngine.remainingTurns() === 0) {
          gameUi.gameProgress('#user-feedback', 'Tie!')
          $('.game-space').off('click')
          return
        }
        // switch player turn
        gameEngine.nextTurn()
      })
      .catch(gameUi.updateFailure)
  } else {
    gameUi.gameProgress('#user-feedback', 'Invalid Space!')
  }
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
}

const onSignUp = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signUp(formData)
    .then(gameUi.signUpSuccess)
    // sign in user following successfull sign-up
    .then(() => {
      onSignIn(event)
    })
    .then(() => {
      // resets form fields, but not before onSignIn runs
      $('#sign-up-form').trigger('reset')
    })
    .catch(() => {
      gameUi.signUpFailure()
      $('#sign-up-form').trigger('reset')
    })
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

const onNewGame = (event) => {
  event.preventDefault()
  storage.gameObject.currentPlayer = 'X'

  // create new game
  api.newGame()
    .then(gameUi.newGameSuccess)
    .then(() => {
      $('.game-space').off('click')
      $('.game-space').on('click', onPlayerChoice)
      // reset game board ui on success
      $('.game-space').html('')
    })
    .catch(gameUi.newGameFailure)
}

const onGetGames = (event) => {
  event.preventDefault()

  api.listGames()
    .then(gameUi.gameHistorySuccess)
    .catch(gameUi.gameHistoryFailure)
}

const addHandlers = () => {
  $('#sign-in-form').on('submit', onSignIn)
  $('#sign-up-form').on('submit', onSignUp)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out-button').on('click', onSignOut)
  $('#new-game-button').on('click', onNewGame)
  $('#game-stats-button').on('click', onGetGames)
}

module.exports = {
  onPlayerChoice: onPlayerChoice,
  addHandlers: addHandlers
}
