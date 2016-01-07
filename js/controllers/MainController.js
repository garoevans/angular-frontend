app.controller('MainController', ['$scope', '$http', function($scope, $http) {
    $scope.title = 'Main Title';

    $scope.user = {}
    $scope.submit = function() {
        $http.post('http://localhost:8081/submit/', $scope.user);
    }

    $http.jsonp('http://localhost:8081/?callback=JSON_CALLBACK').then(
        function(response) {
            $scope.subtitle = response.data.data;
        },
        function(response) {
            $scope.subtitle = "Something else";
        }
    );
}]);
