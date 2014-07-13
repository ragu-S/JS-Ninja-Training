'use strict';

var app = angular.module('calculatorApp')
  .controller('MainCtrl', function ($scope) {
    $scope.calculation = {
    	expression: [],
    	currentNumber: [],
    	hasDecimal: false
    }
    $scope.buttons = [1,2,3,4,5,6,7,8,9];
});

app.controller('testy', function(){
  this.sample = "working";
});

app.directive('coolDirective', [function() {
	return {
		restrict: 'E',
		link: function(scope, element) {
			element.bind('mouseover', function() {
				console.log(element);
			});
		},
		template: '<div class="alert alert-success">This is done</div>'
	};
}]);

app.directive('calculatorButton', function() {
	return {
		template: '<button>{{symbol}}</button>',
		restrict: 'E',
		scope: {
			symbol: '@'
		},
		link: function postLink(scope, element) {
			var action = element.find('button');
			action.bind('click', function() {
				scope.action({
					buttonId: scope.buttonLabel
				});
			});
		}
	};
});





