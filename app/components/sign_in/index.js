'use strict';

module.exports = function(app) {
  app.component('signIn', {
    controller: 'AuthController',
    template: require('./sign_in_template.html'),
    bindings: {
      baseUrl: '<'
    }
  });
};
