var app = angular.module('PortfolioApp', ['PortfolioServices', 'PortfolioCtrls', 'ngRoute', 'ui.bootstrap', 'ngAnimate']);

app.config([
	"$routeProvider",
	"$locationProvider",
	function ($routeProvider, $locationProvider) {
		$routeProvider.when("/", {
			templateUrl: "views/index.html",
		}).when("/about", {
			templateUrl: "views/about.html",
		}).when("/projects", {
			templateUrl: "views/projects.html"
		}).when("/blog", {
			templateUrl: "views/blog.html"
		}).when("/contact", {
			templateUrl: "views/contact.html"
		}).otherwise({
			templateUrl: "views/404.html"
		});

		$locationProvider.html5Mode(false).hashPrefix("!");

	}
]);

app.controller('HomeCtrl', ['$scope', '$uibModal', function($scope, $uibModal) {

  $scope.projects = [{name: "Seattle Real Estatae Game", description: "SREG desc"}, {name: "My Commute", description: "Plan a commute with friends"}];

  $scope.open = function(project) {
    var modal = $uibModal.open({
      animation: true,
      templateUrl: '/views/project.html',
      controller: 'ModalInstanceCtrl',
      resolve: {
        data: function() {
          return $scope.projects;
        },

        project: function() {
        	return project;
        }
      }
    });
  };
}]);

app.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', 'project', function($scope, $uibModalInstance, project) {
  $scope.project = project;

  $scope.close = function() {
    $uibModalInstance.dismiss('close');
  };

  $scope.saveChanges = function() {
    $uibModalInstance.close($scope.message);
  }
}]);