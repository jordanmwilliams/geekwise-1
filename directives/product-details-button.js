(function(angular){
	'use strict'

	var app= angular.module('MyStore');

	app.directive('msProductDetailsButton', function(){

		return {

			// E for Element
			// A for Attribute
			// C for Class
			scope: {
				// 3 types of binding for scope properties
				// @ which is a string
				// & is a one-way binding
				// = is a two-way binding
				//productId: '@' // product-id
			}, // Isolated scope
			restrict: 'E',
			replace: true,
			templateUrl: 'templates/products-details-button.html',
			link: function(scope, elem, attr){
				scope.productId = attr.productId;
	
			}
		};
	});

})(window.angular);