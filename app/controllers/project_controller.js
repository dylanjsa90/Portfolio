'use strict';

module.exports = function(app) {
  app.controller('ProjectController', ['projectService', function(projectService) {
    this.projects = projectService.getAll();
    this.projectId;
    this.projectActive = false;
    this.loadThumbnail = function(thumbPath) {
      return require(thumbPath);
    };
    
    this.toggleThumbnail = function(project) {
      (this.projectId === project) ? this.projectId = undefined : this.projectId = project;
      this.projectActive = true;
    };

    this.next = function() {
      this.projectId = projectService.nextProject(this.projectId).id;
    };

    this.prev = function() {
      this.projectId = projectService.previousProject(this.projectId).id;
    };

    this.clickToCopy = 'Click to Copy';
    this.onSuccess = function(e) {
      this.clickToCopy = 'Copied';
      console.info('Action:', e.action);
      console.info('Text:', e.text);
      console.info('Trigger:', e.trigger);
      e.clearSelection();
    };

    this.onError = function(e) {
      this.clickToCopy = 'Copy Failed, Press your OS keyboard shortcut for copy';
    };
  }]);
};

// Current not using projectService
// this.project = projectService.get({projectId: $routeParams.projectId});
// this.projects = projectService.query();