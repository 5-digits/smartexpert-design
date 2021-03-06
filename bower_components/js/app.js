(function () {
  'use strict';

  angular.module('demoApp', ['ui.tree', 'ngRoute', 'ui.bootstrap'])

    .config(['$routeProvider', '$compileProvider', function ($routeProvider, $compileProvider) {
      $routeProvider
        .when('/creat_map', {
          controller: 'CloningCtrl',
          templateUrl: 'bower_components/views/cloning.html'
        })
        .when('/view_map_seo_text', {
          controller: 'CloningCtrl',
          templateUrl: 'bower_components/views/view_map_seo_text.html'
        })
        .when('/connected-trees', {
          controller: 'ConnectedTreesCtrl',
          templateUrl: 'bower_components/views/connected-trees.html'
        })
        .when('/filter-nodes', {
          controller: 'FilterNodesCtrl',
          templateUrl: 'bower_components/views/filter-nodes.html'
        })
        .when('/nodrop', {
          controller: 'BasicExampleCtrl',
          templateUrl: 'bower_components/views/nodrop.html'
        })
        .when('/table-example', {
          controller: 'TableExampleCtrl',
          templateUrl: 'bower_components/views/table-example.html'
        })
        .when('/drop-confirmation', {
          controller: 'DropConfirmationCtrl',
          templateUrl: 'bower_components/views/drop-confirmation.html'
        })
		    .when('/expand-on-hover', {
			controller: 'ExpandOnHoverCtrl',
			templateUrl: 'bower_components/views/expand-on-hover.html'
		})

      // testing issue #521
      $compileProvider.debugInfoEnabled(false);
    }]);
})();
