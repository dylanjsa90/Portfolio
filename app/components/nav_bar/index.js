'use strict';

module.exports = function(app) {
  app.component('navBar', {
    controller: 'NavController',
    template: require('./nav_bar_template.html'),
  });

  app.controller('NavController', ['$location', function($location) {
    this.isCollapsed = true;
    this.collapsedClass = this.isCollapsed ? 'collapse': '';
    this.toggle = function() {
      this.isCollapsed = !this.isCollapsed;
      this.collapsedClass = this.isCollapsed ? 'collapse': '';
    };
    this.home = true;
    this.projects = false;
    this.about = false;
    // this.skills = false; 

    this.currentTab = function() {
      this.setToFalse();
      if ($location.url().includes('home')) {
        this.home = true;
        this.highlight('home');
      }  else if ($location.url().includes('about')) {
        this.about = true;
        this.highlight('about');
      }  else if ($location.url().includes('projects')) {
        this.projects = true;
        this.highlight('projects');
      }
    };

    this.highlight = function(tab) {
      this.setToFalse();
      if (tab === 'home') this.home = true;
      if (tab === 'about') this.about = true;
      if (tab === 'projects') this.projects = true;
      if (tab === 'skills') this.skills = true; 
    };

    this.go = function(tab) {
      this.highlight(tab);
      $location.path(tab);
    };

    this.setToFalse = function() {
      this.home = false;
      this.projects = false;
      this.about = false;
      this.skills = false;
    };

  }]);
};