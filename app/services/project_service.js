'use strict';


module.exports = function(app) {
  app.factory('projectService', function() {
    let projects = require('../lib/projectData');
    let projectService = {
      getAll: function() {
        return projects;
      },
      nextProject: function(index) {
        if (index === projects.length - 1) return projects[0];
        return projects[index + 1];
      },

      previousProject: function(index) {
        if (index === 0) return projects[projects.length - 1];
        return projects[index - 1];
      },

      getAtIndex: function(index) {
        return projects[index];
      }, 

      getProficient: function() {
        return ['Angular.js', 'Node.js', 'JavaScript', 'MongoDB', 'HTML5', 'CSS/SASS/SCSS', 'jQuery', 'RESTful Architecture', 'Webpack', 'Unit Testing', 'Bootstrap']; 
      },
    };

    return projectService;
  });
};