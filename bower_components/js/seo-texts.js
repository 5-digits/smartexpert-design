(function () {
  'use strict';

  angular.module('demoApp', ['ui.tree', 'ngRoute', 'ui.bootstrap'])

    .config(['$routeProvider', '$compileProvider', function ($routeProvider, $compileProvider) {
      $routeProvider
        .when('/seo-texts', {
          controller: 'SEOCtrl',
          templateUrl: 'bower_components/views/seo-texts.html'
        })

        .otherwise({
          redirectTo: '/seo-texts'
        });

      // testing issue #521
      $compileProvider.debugInfoEnabled(false);
    }]);
})();
