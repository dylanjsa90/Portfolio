'use strict';

module.exports = function(app) {
  app.controller('GithubController', ['$location', 'Github', function($location, Github) {
    this.loading = false;
    
    if (Github.allRepos.length === 0) {
      this.loading = true;
      Github.requestRepos().then(() => this.loading = false);
    }

    this.getCurrentRepos = function() {
      Github.requestRepos().then((res) => {
        this.currentRepos = res.data;
      });
    }; 

    this.filterReposWithAttr = function(attr) {
      this.filteredCurrentRepos = Github.filterReposWithAttr(attr);
    };

    this.allRepos = Github.allRepos;

  }]);
};