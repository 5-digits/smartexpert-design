(function () {
  'use strict';

  angular.module('demoApp')
    .controller('CloningCtrl', ['$scope', function ($scope) {
      $scope.remove = function (scope) {
        scope.remove();
      };

      $scope.toggle = function (scope) {
        scope.toggle();
      };

      $scope.newSubItem = function (scope) {
        var nodeData = scope.$modelValue;
        nodeData.nodes.push({
          id: nodeData.id * 1000 + nodeData.nodes.length,
          number_group: nodeData.number_group + '.' + (nodeData.nodes.length + 1),
          nodes: []
        });
      };

        $scope.newItem = function () {
        var nodeData = $scope.tree2[$scope.tree2.length - 1];
        $scope.tree2.push({
          id: $scope.tree2.length + 1,
          number_group: $scope.tree2.length + 1,
          nodes: []
        });
      };

      $scope.collapseAll = function () {
        $scope.$broadcast('angular-ui-tree:collapse-all');
      };

      $scope.expandAll = function () {
        $scope.$broadcast('angular-ui-tree:expand-all');
      };

      $scope.tree2 = [{
        'id': 1,
        'number_group': '1',
        'name_group': '',
        'url_group': '',
        'keys_group': '',
        'nodes': []
      }, {
        'id': 2,
        'number_group': '2',
        'name_group': '',
        'url_group': '',
        'keys_group': '',
        'nodes': []
      }, {
        'id': 3,
        'number_group': '3',
        'name_group': '',
        'url_group': '',
        'keys_group': '',
        'nodes': []
      }, {
        'id': 4,
        'number_group': '4',
        'name_group': '',
        'url_group': '',
        'keys_group': '',
        'nodes': []
      }];
    }]);

}());
