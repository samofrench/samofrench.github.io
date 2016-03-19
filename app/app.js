var app = angular.module('PortfolioApp', ['PortfolioServices', 'PortfolioCtrls', 'ngRoute', 'ui.bootstrap', 'ngAnimate']);

app.config([
	"$routeProvider",
	"$locationProvider",
	function ($routeProvider, $locationProvider) {
		$routeProvider.when("/", {
			templateUrl: "views/index.html",
		}).otherwise({
			templateUrl: "views/404.html"
		});

		$locationProvider.html5Mode(false).hashPrefix("!");

	}
]);

app.controller('HomeCtrl', ['$scope', '$document', '$window', '$uibModal', function($scope, $document, $window, $uibModal) {

  $scope.projects = [
    {
      name: "Concrt",
      tileDesc: "Web application for finding and sharing local concerts with friends.", 
      tileRole: "Front-end data visualization, full stack developer",
      tileTech: "Ruby on Rails, D3.js, Bootstrap, HTML5, CSS3, PostgreSQL",
      descriptionShort: "A place to discover and share local music",
      technologies: "Ruby on Rails, D3.js, Bootstrap, HTML5, CSS3, PostgreSQL",
      role: "Front-end data visualization, full stack developer",
      team: [{name: "Chris Carlson", gh: "https://github.com/TheCodingCarlson"}, {name: "Beth Ernsberger", gh: "https://github.com/bethburger42"}],
      descriptionLong: "Concrt is a social site where users find and share concerts with friends. The JamBase API is used to search for concerts, which users can add to their profiles. Users can also follow each other and view their friends' personal concert calendars.",
      roleLong: "My primary role was engineering the calendar using D3.js, which involved querying for the user's list of events, generating the calendar structure for a given month, and displaying the events on the correct day in the calendar. In addition, our team utilized pair programming to ensure everyone had a role in developing all aspects of the application.",
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
    {
      name: "Penny Post",
      tileDesc: "Postcard-sending web application that uses Instagram and Facebook photos.", 
      tileRole: "Front-end engineer",
      tileTech: "Angular.js, Node.js, Express.js, HTML5, CSS3",
      descriptionShort: "Send a postcard using photos from your Instagram and Facebook accounts",
      technologies: "Angular.js, Node.js, Express.js, PostgreSQL, HTML5, CSS3",
      role: "Front-end engineer, full stack developer",
      team: [{name: "Nathan Maas", gh: "https://github.com/Nathanmaas"}],
      descriptionLong: "Penny post lets people use their own Instagram and Facebook photos to create postcards, which then get sent through the mail. Users' photos are called from the Facebook and Instagram APIs.",
      roleLong: "My role as front-end engineer was to develop the UI for the postcard editor. Users can select, drag, swap, drop, and crop images in a simple, easy-to-use interface. I developed these functionalities in native Javascript and Angular.js",
      mainImg: "../images/pennypost/pennypost.png",
      desktopImages: [
        "../images/pennypost/postcard-front.png",
        "../images/pennypost/postcard-back.png",
        "../images/pennypost/pp-create.png"  
      ]
    },
    {
      name: "Cultivate",
      tileDesc: "Web application for visualizing data generated by a home garden soil sensor.", 
      tileRole: "Front-end data visualization, full stack developer",
      tileTech: "Angular.js, Node.js, Express.js, MongoDB, D3.js, HTML5, CSS3",
      descriptionShort: "Connecting gardeners with their plants",
      technologies: "Angular.js, Node.js, Express.js, MongoDB, D3.js, HTML5, CSS3",
      role: "Front-end data visualization, full stack developer",
      team: [{name: "Alex Mac", gh: "https://github.com/alex-mac"}],
      descriptionLong: "Cultivate is a desktop/mobile web application designed to help amateur and home gardeners make use of data for sunlight levels, soil moisture, soil pH, and temperature collected via a sensor embedded in the soil. The app is primarily a concept, in that it contains the web interface to create an account and view data, but is not connected to any actual soil sensors at this time.",
      roleLong: "My responsibility was data visualization for the users' plant graphs. I developed the visuals to be responsive so they could be viewed on a desktop as well as a phone or tablet. The graphs are generated using D3.js.",
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
      name: "Paidit!",
      tileDesc: "Landing site for Paidit, a non-profit tenant/landlord relations app. Worked on a volunteer basis.", 
      tileRole: "Front-end developer",
      tileTech: "Angular.js, Bootstrap, HTML5, CSS3",
      descriptionShort: "Record-keeping app for renters",
      technologies: "Angular.js, Bootstrap, HTML5, CSS3",
      role: "Front-end developer",
      team: [{name: "Allison Borngesser", gh: "#"}, {name: "Diana Rodriguez", gh: "#"}, {name: "Destinee Shammah", gh: "#"}, {name: "Rahn Stolworthy", gh: "#"}, {name: "Liam Albright", gh: "#"}],
      descriptionLong: "Paidit assists tenants by creating a digital receipt of rent payments. This receipt can then be shared between the tenant and the landlord in order to mitigate or avoid disputes and costly litigation.",
      roleLong: "I am responsible for Paidit's main landing page website. The site was generated using Angular.js and Bootstrap.",
      url: "http://paidit.github.io/",
      github: "",
      mainImg: "../images/paidit/paidit.png",
      desktopImages: [
        "../images/paidit/about-paidit.png",
        "../images/paidit/phone-paidit.png"  
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


  // addEventListener('load', load, false);

  // function load(){
  //   var el = document.getElementById("headshot");
  //   alert(el);
  // }

  // angular.element(document).ready(function () {

  // if (document.getElementById('landing-text')) {
  //   $scope.text = document.getElementById('landing-text').offsetHeight;
  // };
  //   var headshot = document.getElementById('headshot');

  //   console.log("OSH: " + text);
  //   // headshot.style.height = text.offsetHeight;
  //   console.log("HSH: " + headshot.style.height);

  // });

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