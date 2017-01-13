'use strict';

module.exports = function(app) {
  app.controller('ProjectController', ['projectService',  function(projectService) {
    this.projectThumbnails = projectService.getAll();
    this.projectId;
    this.projectActive = false;
    this.projects = []
    ;
    this.loadThumbnail = function(thumbPath) {
      return require(thumbPath);
    };
    
    this.viewProject = function(index) {
      this.projects.push(projectService.getAtIndex(index));
      this.projectId = index;
    };

    this.toggleThumbnail = function(project) {
      (this.projectId === project) ? this.projectId = undefined : this.projectId = project;
      this.projectActive = true;
    };

    this.next = function() {
      this.projectId = projectService.nextProject(this.projectId).id;
      this.projects[0] = projectService.getAtIndex(this.projectId);
    };

    this.prev = function() {
      this.projectId = projectService.previousProject(this.projectId).id;
      this.projects[0] = projectService.getAtIndex(this.projectId);
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