'use strict';

module.exports = function(app) {
  app.controller('ProjectController', function() {
    this.showPi = false;
    this.showFakeSports = false;
    this.showNosy = false;
    this.projects = require('../lib/projectData');
    this.projectThumbnails = [];

    this.populateThumbnails = function() {
      this.projects.forEach(function(p) {
        this.projectThumbnails.push({thumbnailUrl: p.thumbnailUrl, name: p.name});
      });
    };
    

    
    this.showProject = function(project) {
      if (project.name === 'Ultimate Pi') {
        this.showPi = true;
        this.showFakeSports = false;
        this.showNosy = false;
      }
      if (project.name === 'Fake Sports Real Money') {
        this.showPi = false;
        this.showFakeSports = true;
        this.showNosy = false;
      }
      if (project.name === 'Nosy Neighbor') {
        this.showPi = false;
        this.showFakeSports = false;
        this.showNosy = true;
      }
    };
    
  });
};