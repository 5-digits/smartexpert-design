(function () {
  'use strict';

  angular.module('demoApp', ['ui.tree', 'ngRoute', 'ui.bootstrap'])

    .config(['$routeProvider', '$compileProvider', function ($routeProvider, $compileProvider) {
      $routeProvider
        .when('/creat_map', {
          controller: 'CloningCtrl',
          templateUrl: 'bower_components/views/creat_map.html'
        })

        .otherwise({
          redirectTo: '/creat_map'
        });

      // testing issue #521
      $compileProvider.debugInfoEnabled(false);
    }]);
})();
