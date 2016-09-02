'use strict';

const app = require('../app');

const signUp = (data) => {
  // console.log(data);
  // debugger;

  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: data
  });
};

const signIn = (data) => {
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: data
  });
};

const changePassword = (data) => {
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const signOut = () => {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  });
};

const index = () => {
  return $.ajax({
    url: app.host + '/users',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  });
};

const show = (data) => {
  return $.ajax({
    url: app.host + '/users/' + data.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  });
};

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  index,
  show
};
