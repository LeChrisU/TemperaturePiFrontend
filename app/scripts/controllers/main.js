'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl', function ($scope, $http, $window, $timeout) {
	  
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];		
	
	$scope.unreversed = [];	

	$http.get('http://192.168.0.111:3000/weather').success(function(data, status, headers, config) {
		$scope.unreversed = JSON.parse(JSON.stringify(data));		
        $scope.options.data = data.reverse();		
		console.log("seems that there is data")
		
		$scope.firstDataString = $scope.unreversed[0].DateTime + ", " + $scope.unreversed[0].TemperatureC + "&#x00B0;C" + ", Luftfeuchtigkeit: " + $scope.unreversed[0].HumidityP + "%";
		//console.log($scope.firstDataString)
		//console.log($scope.options.data);
    }).error(function(data, status, headers, config) {
        console.log("Oops: could not get any data");
    });
	
	$scope.options = {      
      dimensions: {
        TemperatureC: {
          type: 'line',
		  axis: 'y2'
        },
		HumidityP: {
          type: 'line',
		  axis: 'y'
        },
        DateTime: {
          axis: 'x',
		  datatype: 'datetime',		  
        }
      }
    };	
    // optional (direct access to c3js API http://c3js.org/reference.html#api)
    $scope.instance = null;	
	
	$scope.ModelReload = function() {
    $window.location.reload();
	};
	
	$timeout($scope.ModelReload, 60000);

  });