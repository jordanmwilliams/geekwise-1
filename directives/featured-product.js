(function(angular){
	'use strict';

	var app = angular.module('MyStore');

	app.directive('msFeatureProducts', function(){

		return{
			restrict: 'E',
			replace: true,
			scope: {
				item: '=product'
			},
			templateUrl:'templates/featured-product.html',
			link: function(scope, elem, attr){

			}
		};
	});
})(window.angular);