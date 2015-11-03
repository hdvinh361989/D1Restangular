/**
 * Created by vinhhoang on 31/10/2015.
 */
(function () {
    angular.module('rectangular.alchemy')
        .factory('AlConcept', Concept);

    Concept.$inject = ['Alchemyapi', 'RectHelper'];

    function Concept(Alchemyapi, RectHelper) {
        var Export = {
            apiName: 'Concept',
            url: url,
            html: html,
            text: text
        };
        return Export;

        /*Implement function
         Can set property parentRoute to replace default parentRoute

         What is parentRoute?
         Example: https://gateway-a.watsonplatform.net/calls/data/GetNews
         In this case "calls/data" is parentRoute*/
        function url(params) {
            var config = {
                endpointType: 'url',
                endpoint: RectHelper.alchemy.api.concept.url,
                queryParams: params
            };
            return Alchemyapi.post(null, config);
        }

        function html(params) {
            var config = {
                endpointType: 'html',
                endpoint: RectHelper.alchemy.api.concept.html,
                queryParams: params
                },
                data = {
                    html: postData
                };
            return Alchemyapi.post(null, config);
        }

        function text(postData, params) {
            var config = {
                endpointType: 'text',
                endpoint: RectHelper.alchemy.api.concept.text,
                queryParams: params
                },
                data = {
                    text: postData
                };
            return Alchemyapi.post(data, config);
        }
    }
})();