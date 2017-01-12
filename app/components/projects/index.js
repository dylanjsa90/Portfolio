'use strict';

module.exports = function(app) {
  
  app.component('projects-component', {
    template: require('./project_template.html'),
    controller: 'ProjectController',
  });
  
};