'use strict';

module.exports = function(app) {
  app.controller('GithubController', ['Github', function(Github) {
    this.loading = false;
    this.toggleText = 'Recent Github Repos';
    this.toggleRepo = false;
    this.toggleInProgress = true;
    
    if (Github.allRepos.length === 0) {
      this.loading = true;
      Github.requestRepos();
      this.loading = false;
    }

    this.getCurrentRepos = function() {
      Github.requestRepos().then((res) => {
        this.currentRepos = res.data;
      });
    }; 

    this.filterReposWithAttr = function(attr) {
      this.filteredCurrentRepos = Github.filterReposWithAttr(attr);
    };

    this.toggleView = function() {
      if (this.toggleText === 'Recent Github Repos') {
        this.toggleRepo = true;
        this.toggleInProgress = false;
        this.toggleText = 'In Progress';
      }

      if (this.toggleText === 'In Progress') {
        this.toggleInProgress = true;
        this.toggleRepo = false;
        this.toggleText = 'Recent Github Repos';
      }
    };

    this.allRepos = Github.allRepos;

  }]);
};