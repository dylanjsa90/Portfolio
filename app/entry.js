'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
let portfolioApp = angular.module('portfolioApp', [require('angular-route'), 'ngResource']);

require('./services')(portfolioApp);
require('./controllers')(portfolioApp);
require('./components')(portfolioApp);

portfolioApp.run(['$rootScope', ($rs) => {
  $rs.baseUrl = `${__API_URL__}`,
  $rs.userConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Accept-Content': 'application/json'
    }
  };
}]);

portfolioApp.config(['$routeProvider', ($rp) => {
  $rp
  .when('/home', {
    template: require('./html/home.html'),
    access: {allowAnonymous: true}
  })
  .when('/about', {
    template: require('./html/about.html'),
  })
  .when('/projects', {
    template: require('./html/projects.html'),
    controller: 'ProjectController'
  })
  .when('/contact', {
    template: require('./html/contact.html'),
  })
  .otherwise({
    redirectTo: '/home'
  });
}]);