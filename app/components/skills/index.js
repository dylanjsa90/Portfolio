'use strict';

module.exports = (app) => {
  app.controller('SkillController', function() {
    this.skillLogos = [require('../../lib/logos/javascript.png'), require('../../lib/logos/nodejs-dark.png'), require('../../lib/logos/MongoDB.jpg'), require('../../lib/logos/react.png'), 
    require('../../lib/logos/redux.png'), require('../../lib/logos/jquery.png'), require('../../lib/logos/css.png'), 
    require('../../lib/logos/html.png'), require('../../lib/logos/angular.png'), 
    require('../../lib/logos/webpack.png'), require('../../lib/logos/bootstrap.png')];
    this.logoIndex = ['JavaScript', 'Node.js', 'MongoDB', 'React', 'Redux', 'jQuery', 'CSS3', 'HTML5', 'Angular', 'webpack', 'Bootstrap'];
  });
  
  app.component('skills', {
    controller: 'SkillController',
    template: require('./skills_template.html')
  });
};