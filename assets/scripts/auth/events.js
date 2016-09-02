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

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
};

module.exports = {
  addHandlers,
};
