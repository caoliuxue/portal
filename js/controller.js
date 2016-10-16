angular.module("app.controller", ['ngCookies'])
    .controller('main', ['$scope', '$state', 'service', function ($scope, $state, service) {


    }])

    .controller('indexCtrl', function ($scope, $state, $stateParams, $cookies, service, $rootScope) {

        $scope.default = true;
        $scope.$on("menuSelected", function (data,a,b,c,d,e) {
            console.log(data,a,b,c,d,e);
            if (data.menuSelected) {
                $scope.menuSelected = data.menuSelected;
                $scope.default = false;
            }
        });
    })

