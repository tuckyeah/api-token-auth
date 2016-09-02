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

module.exports = {
  signUp,
};
