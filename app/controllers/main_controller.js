'use strict';

module.exports = (app) => {
  app.controller('MainController', ['projectService', '$anchorScroll', '$location', function(projectService, $anchorScroll, $location) {

    // NavController
    this.isCollapsed = true;
    this.collapsedClass = this.isCollapsed ? 'collapse': '';
    this.toggle = function() {
      this.isCollapsed = !this.isCollapsed;
      this.collapsedClass = this.isCollapsed ? 'collapse': '';
    };

    this.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    };

    // ProjectController
    this.projectThumbnails = projectService.getAll();
    this.projectId = 0;
    this.projectActive = true;
    this.projects = [projectService.getAtIndex(this.projectId)];

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
    };

    this.prev = function() {
      this.projectId = projectService.previousProject(this.projectId).id;
      this.projects[0] = projectService.getAtIndex(this.projectId);
    };

  }]);
};