'use strict'

const storage = require('../store.js')

const drawTurn = function (playerChoice) {
  $(playerChoice).html(storage.store.currentTurn)
}

const gameProgress = function (selector, text) {
  $(selector).text(text)
}

const removeListener = function (selector) {
  $(selector).off('click')
}

const signUpSuccess = () => {
  $('#sign-up-form').hide()
  $('#account-status').text('Welcome!')
}

const signUpFailure = () => {
  $('#account-status').text('Could not create account. Try again.')
}

const signInSuccess = (responseData) => {
  gameProgress('#user-feedback', 'X goes first.')

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
  signOutFailure: signOutFailure
}
