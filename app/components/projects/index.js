'use strict';

module.exports = function(app) {
  app.component('project', {
    template: require('./project_template.html'),
    controller: 'ProjectController',
  });
  
};