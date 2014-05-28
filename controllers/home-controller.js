(function(angular){
	"use strict";

	var app = angular.module('MyStore');

	app.controller('Home', function($scope, ProductService){

		 $scope.featuredProducts = new Array();
		 ProductService.getProducts().then(function(response){
		
		var products = response.data;
		
		angular.forEach(products, function(aProduct){ 

			if(aProduct.isFeatured === true){

			$scope.featuredProducts.push(aProduct);

			}
		});
	});
	});

	

})(window.angular);