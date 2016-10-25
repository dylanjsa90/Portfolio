'use strict';

module.exports = function(app) {
  require('./github_service')(app);
  // require('./project_service')(app);
};