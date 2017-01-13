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
      } 
    };

    return projectService;
    
    // return $resource('data/:projectId.json', {}, {
    //   query: {method: 'GET', params: {projectId:'projects'}, isArray:true}
    // });
  });
};