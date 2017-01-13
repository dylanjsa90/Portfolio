'use strict';

module.exports = (app) => {
  app.controller('projectController', function() {
    this.project = this.projectData;
  });

  app.component('project', {
    controller: 'projectController',
    template: require('./project_template.html'),
    bindings: {
      projectData: '<',
      id: '<'
    }
  });
};