(function () {
    angular.module('ngFoursquareApp')
        .controller('MainCtrl', function ($scope, foursquareApiService) {
            $scope.nearby = 'kharkiv';
            $scope.query = 'bar';

            $scope.search = function () {
                $scope.places = foursquareApiService.places({
                    near: $scope.nearby,
                    query: $scope.query
                });
                console.log($scope.places);
            };
        });
})();