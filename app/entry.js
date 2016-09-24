'use strict';

require('!!fiile?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
let portfolioApp = angular.module('portfolioApp', [require('angular-route'), require('angular-jwt')]);

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
    access: {allowAnonymous: true}
  })
  .when('/previous-projects', {
    template: require('./html/past-projects.html'),
    controller: 'PreviousController',
  })
  .when('/current-projects', {
    template: require('./html/current-projects.html'),
    controller: 'CurrentController'
  })
  .when('/signup', {
    template: require('./html/sign-up.html')
  })
  .when('/signin', {
    template: require('./html/sign-in.html')
  })
  .otherwise({
    redirectTo: '/home'
  });
}]);