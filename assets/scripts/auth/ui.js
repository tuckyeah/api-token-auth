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
  $('#sign-in').hide();
  $('#sign-out').show();
};

// we don't get anything back from the API for a change password request
// so this doesn't need any params
const changePasswordSuccess = () => {
  console.log('Password changed successfully.');
};

const signOutSuccess = () => {
  app.user = null;
  console.log('User signed out successfully');
  $('#sign-in').show();
  $('#sign-out').hide();
};


const listUsers = (data) => {
  $('.user-box').html('');
  if (data.users === undefined) {
    let user = data.user;
    $('.user-box').append('<p>'+user.id+': '+user.email+'</p>');
  } else {
    let users = data.users;
    users.forEach(function(e, i){
      $('.user-box').append('<p>'+users[i].id+': '+users[i].email+'</p>');
    });
  }
};

module.exports = {
  failure,
  success,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  listUsers
};
