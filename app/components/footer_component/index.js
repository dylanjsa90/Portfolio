'use strict';

module.exports = function(app) {
  app.component('footer-component', {
    template: require('./footer_component_template.html')
  });
};