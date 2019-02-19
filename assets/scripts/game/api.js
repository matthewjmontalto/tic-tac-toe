'use strict'

const config = require('../config.js')
const storage = require('../store.js')

const signUp = (formData) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

const signIn = (formData) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData
  })
}

const changePassword = (formData) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + storage.user.token
    },
    data: formData
  })
}

const signOut = () => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + storage.user.token
    }
  })
}

const newGame = () => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + storage.user.token
    },
    data: {}
  })
}

const updateGame = () => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + storage.newGame.game.id,
    headers: {
      Authorization: 'Token token=' + storage.user.token
    },
    data: {
      game: {
        cell: {
          index: storage.chosenSpace,
          value: storage.currentTurn
        },
        over: storage.newGame.over
      }
    }
  })
}

const listGames = (player) => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games?over=true',
    headers: {
      Authorization: 'Token token=' + storage.user.token
    }
  })
}

module.exports = {
  signUp: signUp,
  signIn: signIn,
  changePassword: changePassword,
  signOut: signOut,
  newGame: newGame,
  updateGame: updateGame,
  listGames: listGames
}
