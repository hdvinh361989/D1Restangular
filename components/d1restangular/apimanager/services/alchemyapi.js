/**
 * Created by vinhhoang on 31/10/2015.
 */
(function () {
  angular
    .module('D1Restangular.apimanager')
    .factory('Alchemyapi', alchemyApi);

  alchemyApi.$inject = ['Restangular', 'RectHelper'];

  function alchemyApi(Restangular, RectHelper) {
    /*
     * Get Restangular service with configuration for alchemyapi
     * */
    var AlchemyRestangular = Restangular.withConfig(function (RestangularConfigurer) {
      var headers = {"Content-type": "application/x-www-form-urlencoded"};

      //Global config for Restangular
      RestangularConfigurer.setBaseUrl(RectHelper.alchemy.config.baseUrl);
      RestangularConfigurer.setDefaultHeaders(headers);
      RestangularConfigurer.setDefaultRequestParams({});

      RestangularConfigurer.setFullRequestInterceptor(fullRequestInterceptor);

      //Implement functions
      function fullRequestInterceptor(element, operation, route, url, headers, params, httpConfig) {
        //Do something here before request send
        return element;
      }
    });


    var exports = {
      apiProviderName: 'Alchemyapi',
      runRequest: runRequest
    };
    return exports;


    //Global function
    function runRequest(postData, config, isImage, method) {
      method = method || 'post';

      var parentRoute = 'calls/' + config.endpointType,
        queryParams = prepareRequestParams(config.queryParams);

      if (!isImage)
        postData = prepareRequestBody(postData);

      return AlchemyRestangular
        .all(parentRoute)
        .customOperation(method, config.endpoint, queryParams, null, postData);
    }

    function prepareRequestBody(queryParams) {
      var queryData = "";

      //Create request body from queryParams
      angular.forEach(queryParams, function (value, key) {
        queryData += key + '=' + value + '&';
      });

      //remove the last '&' character
      queryData = queryData.slice(0, -1);
      return queryData;
    }

    function prepareRequestParams(queryParams) {
      //Assure hat queryParams is not null/ undefined
      queryParams = queryParams || {};
      queryParams.apikey = queryParams.apikey || RectHelper.alchemy.config.apiKey;
      queryParams.outputMode = queryParams.outputMode || RectHelper.alchemy.config.outputMode;
      return queryParams;
    }

  }
})();