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
  storage.user = responseData.user
  $('#sign-up-form').hide()
  $('#account-status').text('Welcome!')
}

const signUpFailure = () => {
  $('#account-status').text('Could not create account. Try again.')
}

const signInSuccess = (responseData) => {
  gameProgress('#user-feedback', 'Press "New Game" to begin')

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
  $('#user-feedback').text('Sign up or sign in to play!')
  $('.game-space').html('')
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
  newGameFailure: newGameFailure
}
