'use strict';

module.exports = (app) => {
  app.controller('AboutController', function() {
  });

  app.component('aboutComponent', {
    controller: 'AboutController',
    template: require('./about_template.html')
  });
};