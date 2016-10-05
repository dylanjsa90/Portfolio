'use strict';

module.exports = function(app) {
  require('./github_controller')(app);
  require('./project_controller')(app);
  require('./contact_controller')(app);
};