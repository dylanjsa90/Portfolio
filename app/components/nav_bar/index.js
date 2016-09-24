'use strict';

module.exports = function(app) {
  app.component('navBar', {
    controller: 'NavController',
    template: require('./nav_bar_template.html'),
    bindings: {
      baseUrl: '<'
    }
  });
};