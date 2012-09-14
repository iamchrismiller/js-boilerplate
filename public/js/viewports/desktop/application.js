/*global define*/

define([
  'marionette',
  'config',
  'viewports/desktop/Router'
],
  function (Backbone, config, Router) {
    "use strict";

    var app = new Backbone.Marionette.Application();

    app.config = config;
    app.addRegions(appRegions());

    app.addInitializer(function () {
      new Router();
      Backbone.history.start();
    });

    function appRegions() {
      return {
        header : "#header",
        main   : "#main",
        footer : "#footer"
      };
    }

    return app;
  });