/**
 * Created by vinhhoang on 31/10/2015.
 */
(function () {
    angular.module('rectangular.alchemy')
        .factory('AlMicroFormats', MicroFormats);

    MicroFormats.$inject = ['Alchemyapi', 'RectHelper'];

    function MicroFormats(Alchemyapi, RectHelper) {
        var Export = {
            apiName: 'MicroFormats',
            url: url,
            html: html
        };
        return Export;

        /*Implement function
         Can set property parentRoute to replace default parentRoute

         What is parentRoute?
         Example: https://gateway-a.watsonplatform.net/calls/data/GetNews
         In this case "calls/data" is parentRoute*/
        function url(postData, params) {
            var config = {
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.microformats.url,
                    queryParams: params
                },
                data = {
                    html: postData
                };
            return Alchemyapi.post(data, config);
        }

        function html(postData, params) {
            var config = {
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.microformats.html,
                    queryParams: params
                },
                data = {
                    html: postData
                };
            return Alchemyapi.post(data, config);
        }
    }
})();