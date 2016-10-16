angular.module("apiDoc", ['pascalprecht.translate', 'app.router', 'app.controller', 'app.service', 'app.constant','app.component'])
    .config(['$translateProvider',function($translateProvider){
        var lang = window.localStorage.lang||'cn';
        $translateProvider.preferredLanguage(lang);
        $translateProvider.useStaticFilesLoader({
            prefix: 'i18n/',
            suffix: '.json'
        });
    }])
    .run(['$translate', '$rootScope', '$state', '$stateParams', function ($translate, $rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.switchLang = function (lang) {
            $translate.use(lang);
            window.localStorage.lang = lang;
            window.location.reload();
        }
    }])
    .filter("i18n", ['$translate', function($translate) {
        return function(key) {
            if(key){
                return $translate.instant(key);
            }
        };
    }]);