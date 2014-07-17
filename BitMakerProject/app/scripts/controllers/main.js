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
		template: '<div class="alert alert-success">This is done</div>',
		restrict: 'E',
		link: function(scope, element) {
			element.bind('mouseover', function() {
				console.log(element);
			});
		}
	};
}]);

app.directive('calculatorButton', function() {
	return {
		template: '<button>{{buttonLabel}}</button>',
		restrict: 'E',
		scope: {
			buttonLabel: '@'
		},
		link: function postLink(scope, element) {
			// var action = element.find('button');
			// action.bind('click', function() {
			// 	alert(scope.buttonLabel);
			// 	// scope.action({
			// 	// 	buttonId: scope.buttonLabel
			// 	// });
			// });
			
		}
	};
});





