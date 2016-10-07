'use strict';

module.exports = function(app) {
  require('./nav_bar')(app);
  require('./projects')(app);
  require('./footer_component')(app);
};