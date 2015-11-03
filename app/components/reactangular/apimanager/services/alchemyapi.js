/**
 * Created by vinhhoang on 31/10/2015.
 */
(function () {
    angular
        .module('rectangular.apimanager')
        .factory('Alchemyapi', alchemyApi);

    alchemyApi.$inject = ['Restangular', 'RectHelper'];

    function alchemyApi(Restangular, RectHelper) {
        /*
         * Get Restangular service with configuration for alchemyapi
         * */
        var AlchemyRestangular = Restangular.withConfig(function (RestangularConfigurer) {
            //Global config for Restangular
            RestangularConfigurer.setBaseUrl(RectHelper.alchemy.defaultConfig.baseUrl);
            RestangularConfigurer.setDefaultHeaders({
                "Content-type": "application/x-www-form-urlencoded"
            });
            RestangularConfigurer.setDefaultRequestParams({});

            RestangularConfigurer.setFullRequestInterceptor = fullRequestInterceptor;


            //Implement functions
            function fullRequestInterceptor(element, operation, route, url, headers, params, httpConfig) {
                console.log('Full request interceptor');
                console.log(element, route, url, headers, params, httpConfig);
                return element;
            }
        });


        var exports = {
            apiProviderName: 'Alchemyapi',
            post: post,
            get: get
        };
        return exports;


        //Global function
        function post(postData, config, isImage) {
            var requestParams = prepareRequestParams(config.queryParams),
                parentRoute = config.parentRoute || 'calls/' + config.endpointType;

            if(!isImage){
                postData = prepareRequestBody(postData);
            }

            return AlchemyRestangular
                .all(parentRoute)
                .all(config.endpoint)
                .post(postData || '', requestParams).then(function (data) {
                    return data;
                });
        }

        function get(config) {
            var requestParams = prepareRequestParams(config.queryParams),
                parentRoute = config.parentRoute || 'calls/' + config.endpointType;

            return AlchemyRestangular
                .all(parentRoute)
                .doGET(config.endpoint, requestParams).then(function (data) {
                    return data;
                })
        }


        //Local function
        function prepareRequestBody(queryParams) {
            var queryData = "";

            //Create request body from queryParams
            angular.forEach(queryParams, function (value, key) {
                queryData += key + '=' + value + '&';
            });

            //remove the last '&' character
            queryData = queryData.slice(0, -1);
            console.log(queryData);
            return queryData;
        }

        function prepareRequestParams(queryParams){
            queryParams.apikey = RectHelper.alchemy.apiKey;
            queryParams.outputMode = queryParams.outputMode || RectHelper.alchemy.defaultConfig.outputMode;

            return queryParams;
        }

    }
})();