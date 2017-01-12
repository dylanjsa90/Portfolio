'use strict';

module.exports = function(app) {
  
  app.component('projectsComponent', {
    template: require('./project_showcase.html'),
    controller: 'ProjectController',
  });
  
};