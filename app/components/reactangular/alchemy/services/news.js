/**
 * Created by vinhhoang on 31/10/2015.
 */
(function () {
    angular.module('rectangular.alchemy')
        .factory('News', News);

    News.$inject = ['Alchemyapi', 'RectHelper'];

    function News(Alchemyapi, RectHelper) {
        var Export = {
            apiName: 'News',
            getNews: getNews
        };
        return Export;

        /*Implement function
         Can set property parentRoute to replace default parentRoute

         What is parentRoute?
         Example: https://gateway-a.watsonplatform.net/calls/data/GetNews
         In this case "calls/data" is parentRoute*/
        function getNews(params) {
            var config = {
                type: 'data',
                endpoint: RectHelper.alchemy.api.news.getNews,
                queryParams: params
            };
            return Alchemyapi.post(config);
        }

    }
})();