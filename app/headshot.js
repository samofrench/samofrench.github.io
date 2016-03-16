app.directive('headshot', ['$document', function ($document) {
	return {
		restrict: 'A',
		scope: {	
		},
		link: function (scope, element, attr) {
			var text = document.getElementById('landing-text');
			element[0].style.height = text.offsetHeight + "px";
		}
	};
}]);
