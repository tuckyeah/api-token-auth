'use strict';

const authEvents = require('./auth/events.js');

// On document ready
$(() => {
  $('#sign-out').hide();
  authEvents.addHandlers();
});
