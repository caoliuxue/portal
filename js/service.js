angular.module('app.service', [])
    .service('service', ['$http', '$q', 'AWS_SERVICE', function ($http, $q, AWS_SERVICE) {
        var publicHttpMehod = function(mehodName, url, data) {
            var sessionUrl = url;
            var httpContnt = {
                method: mehodName,
                data: data,
                url: sessionUrl,
                headers: {"Cookie": window.cookie},
                contentType: "application/x-www-form-urlencoded",
                dataType:"json",
                timeout: 60000
            };
            var deferred = $q.defer();
            $http(httpContnt).success(function(data, status, headers, config) {
                deferred.resolve(data);
            }).error(function(data, status, headers, config) {
                    deferred.reject(data, status, headers, config);
            });
            return deferred.promise;
        };
        return {
            /*
             * 待办事项
             */
            getTodo : function () {
                var now = new Date();
                var data = {"url":AWS_SERVICE + "/taskcount?lang=cn&datatime=" + now.getTime()};
                return publicHttpMehod('GET', 'awsProxy.do', data);
            }

        };
    }]);

