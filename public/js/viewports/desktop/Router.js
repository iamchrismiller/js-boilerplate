/*global define*/

define(['marionette'],
  function (Backbone, app) {
    "use strict";

    var Router = Backbone.Marionette.AppRouter.extend({

      routes : {
        "/*" : "indexController"
      },

      indexController : function () {

        require([
          'desktop/application',
          'desktop/region/MainLayout',
          'desktop/region/HeaderLayout',
        ],
          function (app, MainLayout, HeaderLayout) {
            var headerLayout = new HeaderLayout({}),
              mainLayout = new MainLayout({});

            app.header.show(headerLayout);
            app.main.show(mainLayout);
          });

      }

    });
    return Router;
  });


