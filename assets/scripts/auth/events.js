'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
  event.preventDefault();

  // can also call getFormFields(this)
  // 'this' is whatever fired the function (same as passing 'event.target')
  let data = getFormFields(event.target);
  api.signUp(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.failure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.failure);
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.failure);
};

const onGetAllUsers = function (event) {
  event.preventDefault();

  api.index()
    .done(ui.listUsers)
    .fail(ui.failure);
};

const onGetOneUser = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  api.show(data)
    .done(ui.listUsers)
    .fail(ui.failure);
};


const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
  $('#get-all-users').on('submit', onGetAllUsers);
  $('#get-one-user').on('submit', onGetOneUser);
};

module.exports = {
  addHandlers,
};
