'use strict'

const storage = require('../store.js')

const drawTurn = function (playerChoice) {
  $(playerChoice).html(storage.currentTurn)
}

const gameProgress = function (selector, text) {
  $(selector).text(text)
}

const removeListener = function (selector) {
  $(selector).off('click')
}

const signUpSuccess = (responseData) => {
  // storage.user = responseData.user
  $('#sign-up-form').hide()
  $('#account-status').text('Welcome!')
  setTimeout(() => $('#account-status').text(''), 5000)
}

const signUpFailure = () => {
  $('#account-status').text('Could not create account. Try again.')
  setTimeout(() => $('#account-status').text(''), 5000)
}

const signInSuccess = (responseData) => {
  $('#sign-up-button, #sign-in-button, #sign-in-form').addClass('hidden')
  $('#change-password-button, #sign-out-button, #new-game-button, #game-stats-button').removeClass('hidden')
  gameProgress('#user-feedback', 'Press "New Game" to begin')
  $('.game-space').html('')
  storage.user = responseData.user
  console.log(storage.user)
}

const signInFailure = () => {
  gameProgress('#user-feedback', 'Wrong login credentials. Try Again.')
}

const changePasswordSuccess = () => {
  $('#change-status').text('Password updated.')
}

const changePasswordFailure = () => {
  $('#change-status').text('Unable to update password.')
}

const signOutSuccess = () => {
  $('#sign-up-button, #sign-in-button, #sign-in-form').removeClass('hidden')
  $('#change-password-button, #sign-out-button, #new-game-button, #game-stats-button').addClass('hidden')
  $('#user-feedback').text('Sign up or sign in to play!')
  $('.game-space').html('')
  $('#sign-up-form').show()
  // prevents interaction with game
  removeListener('.game-space')
}

const signOutFailure = () => {
  gameProgress('#user-feedback', 'Failed to sign out. Try again.')
}

const newGameSuccess = (responseData) => {
  storage.newGame = responseData
  console.log('new game is ', storage.newGame.game)
  gameProgress('#user-feedback', 'X goes first.')
}

const newGameFailure = (responseData) => {
  gameProgress('#user-feedback', 'Failed to start new game. Try again')
}

const onGameHistorySuccess = (responseData) => {
  const gamesList = responseData.games
  console.log(gamesList)
  $('#user-feedback').text(`Total games played to date: ${gamesList.length}`)

  setTimeout(() => $('#user-feedback').text(''), 5000)
}

module.exports = {
  drawTurn: drawTurn,
  gameProgress: gameProgress,
  removeListener: removeListener,
  signUpSuccess: signUpSuccess,
  signUpFailure: signUpFailure,
  signInSuccess: signInSuccess,
  signInFailure: signInFailure,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFailure: changePasswordFailure,
  signOutSuccess: signOutSuccess,
  signOutFailure: signOutFailure,
  newGameSuccess: newGameSuccess,
  newGameFailure: newGameFailure,
  onGameHistorySuccess: onGameHistorySuccess
}
