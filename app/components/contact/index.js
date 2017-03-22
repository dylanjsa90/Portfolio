'use strict';

module.exports = function(app) {
  app.component('contactInfo', {
    template: require('./contact_info_template.html'),
  });
};