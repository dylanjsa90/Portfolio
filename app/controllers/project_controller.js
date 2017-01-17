'use strict';

module.exports = function(app) {
  app.controller('ProjectController', ['projectService',  function(projectService) {
    this.projectThumbnails = projectService.getAll();
    this.skillText = 'Technical Skills';

    this.projectId;
    this.projectActive = false;
    this.projects = [];
    

    this.skills = projectService.getProficient();
    this.toggleSkills = function() {
      (this.skills.length > 0) ? this.skills = [] : this.skills = projectService.getProficient();
    };

    this.loadThumbnail = function(thumbPath) {
      return (thumbPath);
    };
    
    this.viewProject = function(index) {
      this.projects.push(projectService.getAtIndex(index));
      this.skills = this.projects[0].skills;
      this.skillText = 'This project uses the following skills:';
      this.projectId = index;
    };

    this.toggleThumbnail = function(project) {
      (this.projectId === project) ? this.projectId = undefined : this.projectId = project;
      this.projectActive = this.projectId !== undefined;
    };

    this.next = function() {
      this.projectId = projectService.nextProject(this.projectId).id;
      this.projects[0] = projectService.getAtIndex(this.projectId);
      this.skills = this.projects[0].skills;
      // this.showSkills = true;
    };

    this.prev = function() {
      this.projectId = projectService.previousProject(this.projectId).id;
      this.projects[0] = projectService.getAtIndex(this.projectId);
      this.skills = this.projects[0].skills;
      // this.showSkills = true;
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
