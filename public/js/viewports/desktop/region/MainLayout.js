/*global define */

define(
  [
    'jquery',
    'marionette',
    'templates'
  ],
  function ($, Backbone,templates) {
    "use strict";

    var MainLayout = Backbone.Marionette.Layout.extend({

      tagName : 'div',

      className : 'main-layout',

      template : templates.mainLayout

    });

    return MainLayout;
  });
