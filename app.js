'use strict';

// Declare app level module which depends on views, and components
angular.module('temp', [
  'ngRoute',
  'temp.view1',
  'temp.view2',
  'temp.templates1'

]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
