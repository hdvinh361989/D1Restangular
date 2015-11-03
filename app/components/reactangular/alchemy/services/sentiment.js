/**
 * Created by vinhhoang on 30/10/2015.
 */
(function () {
    angular.module('rectangular.alchemy')
        .factory('Sentiment', Sentiment);

    Sentiment.$inject = ['Alchemyapi', 'RectHelper'];

    function Sentiment(Alchemyapi, RectHelper) {
        var Export = {
            apiName: 'Sentiment',
            urlGetText: urlGetText,
            urlGetTargeted: urlGetTargeted,
            htmlGetText: htmlGetText,
            htmlGetTargeted: htmlGetTargeted,
            textGetText: textGetText,
            textGetTargeted: textGetTargeted
        };
        return Export;

        /*Implement function
         You can set property parentRoute to replace default parentRoute

         What is parentRoute?
         Example: https://gateway-a.watsonplatform.net/calls/data/GetNews
         In this case "calls/data" is parentRoute*/
        function urlGetText(params) {
            var config = {
                endpointType: 'url',
                endpoint: RectHelper.alchemy.api.sentiment.url,
                queryParams: params
            };
            return Alchemyapi.post(null, config);
        }

        function urlGetTargeted(params) {
            var config = {
                type: 'url',
                endpoint: RectHelper.alchemy.api.sentiment.urlGetTargeted,
                queryParams: params
            };
            return Alchemyapi.post(config);
        }

        function htmlGetText(params) {
            var config = {
                type: 'html',
                endpoint: RectHelper.alchemy.api.sentiment.htmlGetText,
                queryParams: params
            };
            return Alchemyapi.post(config);
        }

        function htmlGetTargeted(params) {
            var config = {
                type: 'html',
                endpoint: RectHelper.alchemy.api.sentiment.htmlGetTargeted,
                queryParams: params
            };
            return Alchemyapi.post(config);
        }

        function textGetText(params) {
            var config = {
                type: 'text',
                endpoint: RectHelper.alchemy.api.sentiment.textGetText,
                queryParams: params
            };
            return Alchemyapi.post(config);
        }

        function textGetTargeted(params) {
            var config = {
                type: 'text',
                endpoint: RectHelper.alchemy.api.sentiment.textGetTargeted,
                queryParams: params
            };
            return Alchemyapi.post(config);
        }

    }
})();