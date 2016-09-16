(function () {
  'use strict';

  angular.module('demoApp', ['ui.tree', 'ngRoute', 'ui.bootstrap'])

    .config(['$routeProvider', '$compileProvider', function ($routeProvider, $compileProvider) {
      $routeProvider
        .when('/edit_map', {
          controller: 'EditCtrl',
          templateUrl: 'bower_components/views/edit_map-ag.html'
        })

        .otherwise({
          redirectTo: '/edit_map'
        });

      // testing issue #521
      $compileProvider.debugInfoEnabled(false);
    }]);
})();
