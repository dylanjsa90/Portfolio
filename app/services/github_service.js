'use strict';


module.exports = function(app) {
  app.factory('Github', ['$window', '$location', '$http', function($window, $location, $http) {
    return {
      repos: {},
      allRepos: [],
      requestRepos: function() {
        $http.get('/github/users/dylanjsa90/repos?per_page=10&sorted=updated')
          .then((res) => {
            console.log('res.data ' + res.data);
            this.allRepos = res.data;

          }).catch((err) => {
            console.log('Error: ' + err);
          });
        return this.allRepos;

      },

      withAttr: function(attr) {
        if (this.allRepos.length === 0 || !this.allRepos) this.requestRepos();
        return this.allRepos.filter((r) => {
          return r[attr];
        });
      }

    };
  }]);
};