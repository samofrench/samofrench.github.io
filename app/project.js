app.directive('project', ['$document', function ($document) {
	return {
		restrict: 'A',
		scope: {
			project: '='
		},
		link: function (scope, element, attr) {

			var projectData = scope.project;

			element[0].style.background = "url("+projectData.mainImg+") black"; 
			element[0].style["background-size"] = "cover"; 
			element[0].style["background-repeat"] = "no-repeat"; 
			element[0].style["background-position-x"] = "50%"; 
			element[0].style["background-position-y"] = "0%";
			element[0].style.height = element[0].offsetWidth + "px";

		}
	};
}]);
