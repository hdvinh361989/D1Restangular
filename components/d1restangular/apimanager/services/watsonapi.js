/*
/!**
 * Created by vinhhoang on 31/10/2015.
 *!/
(function () {
  angular
    .module('D1Restangular.apimanager')
    .factory('Watsonapi', Watsonapi);

  Watsonapi.$inject = ['RectHelper', 'Restangular', '$localStorage', '$q'];

  function Watsonapi(helper, rest, $localS, $q) {
    //Create 1 individual Restangular object for Watson api type gateway with its own config
    var watsonRestG = rest.withConfig(function (RestangularConfigurer) {
      var config = {
        baseUrl: helper.watson.config.baseUrl.gateway,
        setFullRequestInterceptor: fullRequestInterceptor
      };
      angular.merge(RestangularConfigurer, config);

      //Implement functions
      function fullRequestInterceptor(element, operation, route, url, headers, params, httpConfig) {
        //Do something here before request send
        if (operation === 'remove') {
          return undefined;
        }
        return element;
      }
    });

    var exports = {
      getToken: getToken
    };
    return exports;

    /!**
     * Check token is exist or not in localStorage
     * Yes: return token
     * No: request new token
     * *!/
    function getToken(apiName, type) {
      /!**
       * Get token from localStorage
       * *!/
      var token = $localS[apiName],
        isTokenAvailable = token && isExpired(token);

      /!**
       * Check token is already exist and not expire
       * Yes: return token.
       * No: request new token, then return.
       * *!/
      if (isTokenAvailable) {
        var defer = $q.defer();
        defer.resolve(token);
        return defer.promise;
      } else {
        return requestToken(apiName, type);
      }
    }

    function requestToken(apiName, type) {
      var watsonApi = watsonRestG.allUrl('watsontoken', helper.watson.config.tokenUrl);

      return watsonApi.post({
        name: apiName,
        type: type
      }).then(function (data) {
        var token = {
          id: data.id,
          token: data.token,
          dateTime: data.dateTime
        };
        $localS[apiName] = token;

        return token;
      });
    }

    function isExpired(token) {
      var tokenTime = new Date(token.dateTime),
        currentTime = new Date();

      /!**
       * Convert current to UTC time
       * *!/
      currentTime.setTime(currentTime.getTime() + currentTime.getTimezoneOffset() * 60 * 1000);
      /!**
       * How many minutes from last requested token until now?
       * *!/
      var minutesUntilNow = Math.ceil((currentTime.getTime() - tokenTime.getTime()) * 1000 / 60);

      return minutesUntilNow >= 30;
    }


    /!**
     * Call Watson api endpoint
     * *!/
    function runRequest(config, data, queryParams, header) {

    }

    function prepareFormData(data) {
      //Create formData object then add file to object
      var formData = new FormData();
      angular.forEach(data, function (v, k) {
        formData.append(k, v);
      });

      return formData;
    }

    function prepareHeader(header, config) {
      var apiName = config.route
      header['X-Watson-Authorization-Token'] =
    }
  }
})();*/
