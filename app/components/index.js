'use strict';

module.exports = function(app) {
  require('./sign_out')(app);
  require('./sign_up')(app);
  require('./sign_in')(app);
  require('./nav_bar')(app);
};