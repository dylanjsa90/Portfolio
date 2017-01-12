'use strict';

let projects = require('./lib/projectData');

module.exports = function(app) {
  app.factory('projectService', function() {
    return projects;
    
    // return $resource('data/:projectId.json', {}, {
    //   query: {method: 'GET', params: {projectId:'projects'}, isArray:true}
    // });
  });
};