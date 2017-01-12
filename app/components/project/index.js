'use strict';

module.exports = (app) => {
  
  app.component('project', {
    controller: 'projectController',
    template: require('./project_template.html'),
    bindings: {
      project: '<'
    }
  });
};