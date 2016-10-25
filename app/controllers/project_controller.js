'use strict';

module.exports = function(app) {
  app.controller('ProjectController', ['$scope', function($scope) {
    $scope.prev = null;
    $scope.next = null;
    // $scope.project = projectService.get({projectId: $routeParams.projectId});
    // $scope.projects = projectService.query();


    this.showPi = false;
    this.showFakeSports = false;
    this.showNosy = false;
    this.showTodo = false;
    this.projects = require('../lib/projectData');
    this.projectThumbnails = [];

    this.populateThumbnails = function() {
      this.projects.forEach(function(p) {
        this.projectThumbnails.push({thumbnailUrl: p.thumbnailUrl, name: p.name});
      });
    };
    
    this.displayPi = function() {
      this.showPi = !this.showPi;
      this.showFakeSports = false;
      this.showNosy = false;
      this.showTodo = false;
    };

    this.displayNosyNeighbor = function() {
      this.showNosy = !this.showNosy;
      this.showPi = false;
      this.showFakeSports = false;
      this.showTodo = false;
    };  

    this.displayFakeSports = function() {
      this.showFakeSports = !this.showFakeSports;
      this.showPi = false;
      this.showNosy = false;
      this.showTodo = false;
    };
    
    this.displayTodo = function() {
      this.showTodo = !this.showTodo;
      this.showPi = false;
      this.showNosy = false;
      this.showFakeSports = false;
    };
    
  }]);
};