'use strict';

module.exports = function(app) {
  app.controller('AuthController', ['$window', '$location', '$http', 'auth', function($window, $location, $http, auth) {
    if (auth.getToken({noRedirect: true})) $location.path('/home');

    this.signup = function(user) {
      $http.post(this.baseUrl + 'api/signup', user)
        .then((res) => {
          auth.setToken(res.data.token);
          $location.path('/home'); // For now
        }, (err) => {
          console.log('Username already exists ' + err);
        });
    };

    this.signin = function(user) {
      $http.get(this.baseUrl + '/api/signin', {
        headers: {
          'Authorization': 'Basic ' + $window.btoa(user.email + ':' + user.password)
        }
      }).then((res) => {
        console.log('credentials accepted');
        auth.setToken(res.data.token);
        $location.path('/home'); // For now
      }, (err) => {
        console.log('Invalid Username or Password: ' + err.status);
      });
    };

    this.isLoggedIn = function() {
      if (auth.getToken({noRedirect: true}) && auth.getUser()) return true;
    };

    this.getUser = auth.getUser.bind(auth);
    this.logOut = auth.logOut.bind(auth);
    this.currentUser = auth.currentUser;
  }])
}