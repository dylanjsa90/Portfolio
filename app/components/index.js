'use strict';

module.exports = function(app) {
  require('./nav_bar')(app);
  require('./project')(app);
  require('./projects')(app);
  require('./contact')(app);
  require('./about')(app);
  require('./skills')(app);
  require('./footer_component')(app);
};