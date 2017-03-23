'use strict';

// import tooltip from 'angular-ui-bootstrap/src/tooltip';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
let portfolioApp = angular.module('portfolioApp', [require('angular-ui-bootstrap')]);

require('./services')(portfolioApp);
require('./controllers')(portfolioApp);
require('./components')(portfolioApp);

// portfolioApp.config(['$routeProvider', ($rp) => {
//   $rp
//   .when('/home', {
//     template: require('./html/home.html'),
//     // contoller: 'NavController'
//   })
//   .when('/about', {
//     template: require('./html/about.html'),
//   })
//   .when('/projects', {
//     template: require('./html/projects.html'),
//     controller: 'ProjectController'
//   })
//   .otherwise({
//     redirectTo: '/home'
//   });
// }]);