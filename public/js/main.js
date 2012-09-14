/*global require*/

require.config({
  paths : {
    underscore : 'vendor/underscore-1.3.3',
    backbone   : 'vendor/backbone-0.9.2',
    marionette : 'vendor/backbone.marionette-0.9.11',
    jquery     : 'vendor/jquery-1.8',
    tpl        : 'vendor/tpl',
    desktop    : 'viewports/desktop'
  },
  shim  : {
    underscore : {
      exports : '_'
    },
    backbone   : {
      exports : 'Backbone',
      deps    : ['jquery', 'underscore']
    },
    marionette : {
      exports : 'Backbone',
      deps    : ['backbone']
    }
  },
  deps  : ['jquery', 'underscore']
});

require(['desktop/application'], function (app) {
  "use strict";

  app.start();
});
