'use strict';

module.exports = function(app) {
  app.controller('ProjectController', ['projectService',  function(projectService) {
    this.projectThumbnails = projectService.getAll();
    this.skillLogos = [require('../lib/logos/javascript.png'), require('../lib/logos/react.png'), 
    require('../lib/logos/redux.png'), require('../lib/logos/jquery.png'), require('../lib/logos/css.png'), 
    require('../lib/logos/html.png'), require('../lib/logos/angular.png'), 
    require('../lib/logos/webpack.png'), require('../lib/logos/bootstrap.png')];
    this.logoIndex = ['JavaScript', 'React', 'Redux', 'jQuery', 'CSS3', 'HTML5', 'Angular', 'webpack', 'Bootstrap'];

    this.skillText = 'Technical Skills Include';
    this.projectId;
    this.projectActive = false;
    this.projects = [];

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
