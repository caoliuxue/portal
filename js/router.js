/**
 * Created by caoliuxue on 16/8/25.
 */
angular.module('app.router', ['ui.router'])
    .config(['$provide', '$stateProvider', '$urlRouterProvider', function ($provide, $stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/index');

        $stateProvider
            .state('index', {
                url: '/index',
                templateUrl: 'layout.html',
                controller: 'indexCtrl'
            })

    }]);