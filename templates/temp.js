/**
 * Created by sagarkale on 11/11/2016.
 */
angular.module('temp.templates1',['ngRoute'])
    .config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/templates1',{
        templateUrl:'templates/template.html',
        controller:'Tempctrl'
    });
    
}])
.controller('Tempctrl', ['$scope','$http',function($scope,$http){

    $http.get('/Portfolio1/app/Json/templates.json').success(function(data){
       $scope.template=data;

        console.log(data);
    });
}])