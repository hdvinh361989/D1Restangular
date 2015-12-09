/**
 * Created by vinhhoang on 06/12/2015.
 */
(function () {
  angular.module('D1Restangular')
    .factory('Watson', Watson);

  Watson.$inject = ['RectHelper', 'Restangular', '$localStorage', '$q'];

  function Watson(helper, rest, $localS, $q) {
    //Create 1 individual Restangular object for Watson api type gateway with its own config
    var watsonRestG = rest.withConfig(function (RestangularConfigurer) {
      var config = {
        baseUrl: helper.watson.config.baseUrl.gateway
      };
      angular.merge(RestangularConfigurer, config);
      RestangularConfigurer.setFullRequestInterceptor(fullRequestInterceptor);


      function fullRequestInterceptor(element, operation, route, url, headers, params, httpConfig) {
        //Do something here before request send
        if (operation === 'remove') {
          return undefined;
        }

        return element;
      }
    });

    //Create Restangular object for each api endpoint
    var concept = watsonRestG.all(helper.watson.api['concept-expansion-beta']),
      dialog = watsonRestG.all(helper.watson.api['dialog']),
      personality = watsonRestG.all(helper.watson.api['personality-insights']),
      question = watsonRestG.all(helper.watson.api['question-and-answer-beta']),
      relationship = watsonRestG.all(helper.watson.api['relationship-extraction-beta']),
      tradeoff = watsonRestG.all(helper.watson.api['tradeoff-analytics']),
      conceptInsights = watsonRestG.all(helper.watson.api['concept-insights']),
      natural = watsonRestG.all(helper.watson.api['natural-language-classifier']);


    /**
     * Check token is exist or not in localStorage
     * Yes: return token
     * No: request new token
     * */
    function getToken(apiName, type) {
      /**
       * Get token from localStorage
       * */
      var token = $localS[apiName],
        isTokenAvailable = token && !isExpired(token);

      /**
       * Check token is already exist and not expire
       * Yes: return token.
       * No: request new token, then return.
       * */
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

      /**
       * Convert current to UTC time
       * */
      currentTime.setTime(currentTime.getTime() + currentTime.getTimezoneOffset() * 60 * 1000);
      /**
       * How many minutes from last requested token until now?
       * */
      var minutesUntilNow = Math.ceil((currentTime.getTime() - tokenTime.getTime()) / 1000 / 60);

      return minutesUntilNow >= 30;
    }

    /**
     * Run request: get token then to header before send request
     * */
    function runRequest(config) {
      return getToken(config.apiName, config.type).then(function (response) {
        var header = {
          'X-Watson-Authorization-Token': response.token
        };
        return config.callBack(header);
      })
    }

    /**
     * Call Watson api endpoint
     * */
    function prepareFormData(data) {
      //Create formData object then add file to object
      var formData = new FormData();
      angular.forEach(data, function (v, k) {
        formData.append(k, v);
      });

      return formData;
    }


    /**
     * Concept-expansion api method
     * apiName: concept-expansion-beta
     * */
    function getPing() {
      return runRequest({
        apiName: 'concept-expansion-beta',
        type: 'gateway',
        callBack: function (header) {
          header.[]
          concept
            .all('ping')
            .getList(null, header)
            .then(function (data) {
              return data;
            }, function (response) {
              throw("Error with status code: " + response.status);
            });
        }
      });
    }

    function postUpload(data) {
      return runRequest({
        apiName: 'concept-expansion-beta',
        type: 'gateway',
        callBack: function (header) {
          concept
            .all('upload')
            .post(data, null, header)
            .then(function (response) {
              return response;
            }, function (response) {
              throw("Error with status code: " + response.status);
            });
        }
      });
    }

    function getStatus() {
      return runRequest({
        apiName: 'concept-expansion-beta',
        type: 'gateway',
        callBack: function (header) {
          concept
            .all('status')
            .getList(null, header)
            .then(function (data) {
              return data;
            }, function (response) {
              throw("Error with status code: " + response.status);
            });
        }
      });
    }

    function putResult() {
      return runRequest({
        apiName: 'concept-expansion-beta',
        type: 'gateway',
        callBack: function (header) {
          concept
            .all('result')
            .customPUT(null, header)
            .then(function (data) {
              return data;
            }, function (response) {
              throw("Error with status code: " + response.status);
            });
        }
      });
    }

    /**
     * tradeoff-analytics api method
     * apiName: tradeoff-analytics
     * */
    function postDilemmas(data){
      return runRequest({
        apiName: 'tradeoff-analytics',
        type: 'gateway',
        callBack: function (header) {
          tradeoff
            .all('dilemmas')
            .post(data, null, header)
            .then(function (response) {
              return response;
            }, function (response) {
              throw("Error with status code: " + response.status);
            });
        }
      });
    }



    //Export
    return {
      conceptexpansion: {
        getPing: getPing,
        postUpload: postUpload,
        getStatus: getStatus,
        putResult: putResult
      },
      tradeoff:{
        postDilemmas: postDilemmas
      }
    };
  }
})();