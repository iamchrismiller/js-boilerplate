/*global define */

define(
  [
    'jquery',
    'marionette',
    'templates'
  ],
  function ($, Backbone,templates) {
    "use strict";

    var HeaderLayout = Backbone.Marionette.Layout.extend({

      tagName : 'div',

      className : 'navbar navbar-inverse navbar-fixed-top',

      template : templates.headerLayout,

      onRender : function() {

      }

    });

    return HeaderLayout;
  });
