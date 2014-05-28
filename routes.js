(function(angular){
	"use strict";

	var app = angular.module('MyStore');

	app.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'views/home.html',
				controller: "Home"
			})
			.state('products', {
				url: '/products',
				controller: 'ProductList',
				templateUrl: 'views/product-list.html'
			})
			.state('product', {
		    url: '/product/:id',
		    controller: 'ProductDetail',
		    templateUrl: 'views/product-detail.html'
			})
			.state('about', {
				url: '/about',
				template: '<h1>About</h1>'
			})
			.state('contact', {
				url: '/contact',
				template: '<h1>Contact</h1>'
			});

	});

})(window.angular);