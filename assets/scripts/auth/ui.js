'use strict';

let app = require('../app');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

// by doing this, every time we sign in we reassign the user object to app.user
// so it refreshes with every sign in!
const signInSuccess = (data) => {
  app.user = data.user;
};

// we don't get anything back from the API for a change password request
// so this doesn't need any params
const changePasswordSuccess = () => {
  console.log('Password changed successfully.');
};

const signOutSuccess = () => {
  app.user = null;
  console.log('User signed out successfully');
};

module.exports = {
  failure,
  success,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess
};
