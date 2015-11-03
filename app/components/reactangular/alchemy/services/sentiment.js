/**
 * Created by vinhhoang on 30/10/2015.
 */
(function () {
    angular.module('rectangular.alchemy')
        .factory('AlSentiment', Sentiment);

    Sentiment.$inject = ['Alchemyapi', 'RectHelper'];

    function Sentiment(Alchemyapi, RectHelper) {
        var Export = {
            apiName: 'Sentiment',
            url: urlGetText,
            urlTargeted: urlGetTargeted,
            html: htmlGetText,
            htmlTargeted: htmlGetTargeted,
            text: textGetText,
            textTargeted: textGetTargeted
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
                endpointType: 'url',
                endpoint: RectHelper.alchemy.api.sentiment.urlTargeted,
                queryParams: params
            };
            return Alchemyapi.post(null, config);
        }

        function htmlGetText(postData, params) {
            var config = {
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.sentiment.html,
                    queryParams: params
                },
                data = {
                    html: postData
                };
            return Alchemyapi.post(data, config);
        }

        function htmlGetTargeted(postData, params) {
            var config = {
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.sentiment.htmlTargeted,
                    queryParams: params
                },
                data = {
                    text: postData
                };
            return Alchemyapi.post(data, config);
        }

        function textGetText(postData, params) {
            var config = {
                    endpointType: 'text',
                    endpoint: RectHelper.alchemy.api.sentiment.text,
                    queryParams: params
                },
                data = {
                    text: postData
                };
            return Alchemyapi.post(data, config);
        }

        function textGetTargeted(postData, params) {
            var config = {
                    endpointType: 'text',
                    endpoint: RectHelper.alchemy.api.sentiment.textTargeted,
                    queryParams: params
                },
                data = {
                    text: postData
                };
            return Alchemyapi.post(data, config);
        }

    }
})();