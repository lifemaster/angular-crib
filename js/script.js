/* --> Angular Application <-- */

// Model

// Module
var app = angular.module('SampleApp', []);

// Controller
app.controller('SampleAppCtrl', function($scope) {

  // Model Data
  $scope.items = [
    { name: 'Item 1', value: 'Value 1', property: 'Property 1' },
    { name: 'Item 2', value: 'Value 2', property: 'Property 2' },
    { name: 'Item 3', value: 'Value 3', property: 'Property 3' },
    { name: 'Item 4', value: 'Value 4', property: 'Property 4' },
    { name: 'Item 5', value: 'Value 5', property: 'Property 5' }
  ];

  $scope.selected = $scope.items[$scope.items.length - 3];
  
  /* -- for partial views (ng-include)-- */
  $scope.tableView = 'table.html';
  $scope.listView = 'list.html';

  // default url value
  $scope.url = $scope.tableView;

  // default styles for switch buttons
  $scope.showTableBtnClass = 'active';
  $scope.showListBtnClass = '';

  /* -- for partial views (ng-switch) -- */
  $scope.options = [
    { display: 'Нумерованный список',   value: 'numList'  },
    { display: 'Маркерованный список',  value: 'markList' },
    { display: 'Таблица',               value: 'table'    },
    { display: 'Перечисление',          value: 'enum'     }
  ];

  // Default mode
  $scope.mode = $scope.options[0];

  /* --------> Behaviors <-------- */

  // switching display data by table
  $scope.showTable = function() {
    $scope.url = $scope.tableView;

    $scope.showTableBtnClass = 'active';
    $scope.showListBtnClass = '';
  }

  // switching display data by list
  $scope.showList = function() {
    $scope.url = $scope.listView;

    $scope.showTableBtnClass = '';
    $scope.showListBtnClass = 'active';
  }
});