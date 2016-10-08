'use strict';

module.exports = function(app) {
  app.component('projects', {
    template: require('./project_template.html'),
    controller: 'ProjectController',
  });
  
};