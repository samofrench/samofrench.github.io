var app = angular.module('PortfolioApp', ['PortfolioServices', 'PortfolioCtrls', 'ngRoute', 'ui.bootstrap', 'ngAnimate']);

app.config([
	"$routeProvider",
	"$locationProvider",
	function ($routeProvider, $locationProvider) {
		$routeProvider.when("/", {
			templateUrl: "views/index.html",
		}).when("/about", {
			templateUrl: "views/about.html",
		}).when("/portfolio", {
			templateUrl: "views/portfolio.html"
		}).otherwise({
			templateUrl: "views/404.html"
		});

		$locationProvider.html5Mode(false).hashPrefix("!");

	}
]);

app.controller('HomeCtrl', ['$scope', '$uibModal', function($scope, $uibModal) {

  $scope.projects = [
    {
      name: "Cultivate", 
      descriptionShort: "Connecting gardeners with their plants",
      technologies: "Angular.js, Node.js, Express.js, MongoDB, D3.js, HTML5, CSS3",
      role: "Front-end data visualization, full stack developer",
      team: [{name: "Alex Mac", gh: "https://github.com/alex-mac"}],
      descriptionLong: "Cultivate is a desktop/mobile app designed to help amateur and home gardeners make use of data about their plants in order to make better decisions and achieve better results. The app was conceived to take the guesswork out of amateur gardening. On the site, users create 'gardens' which collect data from soil sensors installed in their home garden. They can view data for sunlight levels, soil moisture, soil pH, and temperature. This information can then help the user pinpoint specific steps to take to improve the health of their plants. We wanted to make the site easy to use and the information easy to understand. The app is primarily a concept, in that it contains the front-end visualization and back-end data-storage, but is not connected to any actual soil sensors at this time. We have also decided to make users' test gardens public to illustrate the functionality of the app.",
      url: "http://cultivate-iot.herokuapp.com/",
      github: "https://github.com/alex-mac/P4",
      mainImg: "../images/cultivate/cultivate.png",
      desktopImages: [
        "../images/cultivate/graph1.png",
        "../images/cultivate/gardens.png"  
      ],
      mobileImages: [
        "../images/cultivate/signin.png",
        "../images/cultivate/graph2.png"
      ]
    },
    {
      name: "Concrt", 
      descriptionShort: "A place to discover and share local music",
      technologies: "Ruby on Rails, D3.js, Bootstrap, HTML5, CSS3, PostgreSQL",
      role: "Front-end data visualization, full stack developer",
      team: [{name: "Chris Carlson", gh: "https://github.com/TheCodingCarlson"}, {name: "Beth Ernsberger", gh: "https://github.com/bethburger42"}],
      descriptionLong: "The concept behind the Concrt app is a social site where users are able to find and share concerts with friends. Our main focus was to create a product that was user friendly with a lot of functionality. Users use the site to search for concerts and can also add them to their personal calendar. Users can follow each other and view their personal concert calendars. The JamBase API is used to pull concert information based on location and dates. We used D3.js to render each user's calendar with the events that they have added.",
      url: "http://concrt.herokuapp.com/",
      github: "https://github.com/TheCodingCarlson/concrt",
      mainImg: "../images/concrt/home.png",
      desktopImages: [
        "../images/concrt/profile.png",
        "../images/concrt/concerts.png",
        "../images/concrt/network.png",
        "../images/concrt/signin.png"  
      ]
    }, 

  ];

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