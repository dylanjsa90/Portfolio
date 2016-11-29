'use strict';

module.exports = (app) => {
  app.controller('AboutController', function() {
    this.showBio = false;
    this.showSkills = false;

    this.toggleBio = function() {
      this.showSkills = false;
      this.showBio = !this.showBio;
    };

    this.toggleSkills = function() {
      this.showBio = false;
      this.showSkills = !this.showSkills;
    };
  });

  app.component('aboutComponent', {
    controller: 'AboutController',
    template: require('./about_template.html')
  });
};