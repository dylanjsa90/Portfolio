'use strict';

module.exports = (app) => {
  app.component('home', {
    template: require('./home_template.html')
  });
};