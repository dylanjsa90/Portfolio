'use strict';

require('!!fiile?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
let portfolioApp = angular.module('portfolioApp', [require('angular-route')]);

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
  .when('/previous-projects', {
    template: require('./html/past-projects.html'),
  })
  .when('/current-projects', {
    template: require('./html/current_projects.html'),
    controller: 'GithubController'
  })
  .otherwise({
    redirectTo: '/home'
  });
}]);