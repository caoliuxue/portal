/**
 *
 * Created by caoliuxue on 16/8/25.
 */
angular.module('app.component', [])
    .component('leftMenu', {
        templateUrl: "module/menu/menu.html",
        controller: ['$scope', '$rootScope', '$state', 'service', function leftMenuCtrl($scope, $rootScope, $state, service) {
            $scope.tst = function () {
                console.log("FromSelf");
                $rootScope.$broadcast("menuSelected", {menuSelected: "Self"});
            };
        }]
    })
    .component('headBar', {
        templateUrl: "module/head/head.html",
        controller: ['$rootScope', '$translate', '$scope', '$cookies', '$state', 'service', function ($rootScope, $translate, $scope, $cookies, $state, service) {
            var infos = hq_str_sz300104.split(",");
            $scope.closingP = infos[3];//收盘价
            $scope.volumn = (infos[9] / 1000000).toFixed(4);//总量

            $scope.languages = ['chinese', 'english'];
            $scope.langs = ['cn', 'en'];
            var index = 0;
            index = parseInt($cookies.get("langIndex"));
            index = isNaN(index) ? 0 : index;

            $scope.language = $translate.instant($scope.languages[index]);
            $scope.switchLang = function () {
                var langLenght = $scope.langs.length;
                index = (1 + index) % langLenght;
                console.log(index);
                var lang = $scope.langs[index];
                $rootScope.switchLang(lang);
                $scope.language = $translate.instant($scope.languages[index]);
                $cookies.put("langIndex", index);
            }
            service.getTodo();
        }]
    })
    .component('defaultMain', {
        templateUrl: "module/default-main/default-main.html",
        controller: ['$scope', '$state', 'service', 'AWS_SERVICE', function ($scope, $state, service, AWS_SERVICE) {
            function am() {
                if(true) {
                    $('.dynamic_stream1 .bubbling2').animate({
                        'top': '6px',
                        'left': '11px',
                        'fontSize': '14px'
                    },500, function() {
                        $('.dynamic_stream1 .bubbling3').animate({
                            'top': '-1px',
                            'left': '2px',
                            'fontSize': '16px'
                        },500,function(){
                            $('.dynamic_stream1 .bubbling2').animate({
                                'top': '16px',
                                'left': '19px',
                                'fontSize': '12px'
                            },500,function(){
                                $('.dynamic_stream1 .bubbling3').animate({
                                    'top': '13px',
                                    'left': '16px',
                                    'fontSize': '12px'
                                },500,function(){
                                    $('.dynamic_stream1 .bubbling2').animate({
                                        'top': '6px',
                                        'left': '11px',
                                        'fontSize': '14px'
                                    },500,function(){
                                        $('.dynamic_stream1 .bubbling3').animate({
                                            'top': '-1px',
                                            'left': '2px',
                                            'fontSize': '16px'
                                        },500)
                                    },am())
                                })
                            })
                        })
                    })
                }
            }
            am();
        }]
    })
    .component('mainContent', {
        templateUrl: "module/main/main.html",
        controller: ['$scope', '$state', 'service', function ($scope, $state, service) {

        }]
    })
