'use strict';

module.exports = function(app) {
  app.controller('ProjectController', ['projectService',  function(projectService) {
    this.projectThumbnails = projectService.getAll();
    this.skillText = 'Technical Skills Include';
    this.projectId;
    this.projectActive = false;
    this.projects = [];
    this.skills = projectService.getProficient();

    this.resetSkills = function() {
      this.skills = projectService.getProficient();
      this.skillText = 'Technical Skills Include';
    };
    
    this.toggleSkills = function() {
      (this.skills.length > 0) ? this.skills = [] : this.skills = projectService.getProficient();
    };

    this.loadThumbnail = function(thumbPath) {
      return (thumbPath);
    };
    
    this.viewProject = function(index) {
      this.projects = [];
      this.projects.push(projectService.getAtIndex(index));
      this.skills = this.projects[0].skills;
      this.skillText = 'Relevant skills:';
      this.projectId = index;
    };

    this.toggleThumbnail = function(project) {
      (this.projectId === project) ? this.projectId = undefined : this.projectId = project;
      this.projectActive = true;
    };

    this.next = function() {
      this.projectId = projectService.nextProject(this.projectId).id;
      this.projects[0] = projectService.getAtIndex(this.projectId);
      this.skills = this.projects[0].skills;
    };

    this.prev = function() {
      this.projectId = projectService.previousProject(this.projectId).id;
      this.projects[0] = projectService.getAtIndex(this.projectId);
      this.skills = this.projects[0].skills;
    };
  }]);
};
