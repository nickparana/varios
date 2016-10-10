// Creación del módulo
angular
	.module('angularRoutingApp', ['ngRoute'])
	.config(function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/', {
			templateUrl	: 'pages/home.html',
			controller 	: 'mainController'
		})
		.when('/acerca', {
			templateUrl : 'pages/acerca.html',
			controller 	: 'aboutController'
		})
		.when('/contacto', {
			templateUrl : 'pages/contacto.html',
			controller 	: 'contactController'
		})
		.otherwise({
			redirectTo: '/'
		});
	
	       $locationProvider.html5Mode(true);
	
	})


 .controller('mainController', function($scope) {
	$scope.message = 'Hola, Mundo!';
})

.controller('aboutController', function($scope) {
	$scope.message = 'Esta es la página "Acerca de"';
})

.controller('contactController', function($scope) {
	$scope.message = 'Esta es la página de "Contacto", aquí podemos poner un formulario';
});