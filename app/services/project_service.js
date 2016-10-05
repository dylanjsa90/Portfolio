'use strict';

module.exports = function(app) {
  app.factory('projectService', function() {
    return {
      projects: [],
      
      populateProjects: function() {
        this.projects = require('../lib/projectData.js');
      },
      
      currentProject: function(index) {
        return this.projects[index];
      }


    };
  });
};