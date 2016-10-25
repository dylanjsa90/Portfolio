'use strict';

module.exports = function(app) {
  app.factory('projectService', ['$resource', function($resource) {
    return $resource('data/:projectId.json', {}, {
      query: {method: 'GET', params: {projectId:'projects'}, isArray:true}
    });
  }]);
};