'use strict';

module.exports = (app) => {
  app.component('aboutComponent', {
    template: require('./about_template.html')
  });
};