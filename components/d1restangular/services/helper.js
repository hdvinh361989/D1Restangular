/**
 * Created by vinhhoang on 30/10/2015.
 */
(function () {
  angular
    .module('D1Restangular')
    .provider('RectHelper', RectHelper);

  RectHelper.$inject = [];

  function RectHelper() {
    var config;
    return {
      config: function (option) {
        config = option
      },
      $get: function () {
        var exports = {
          alchemy: {
            config: {
              baseUrl: 'https://gateway-a.watsonplatform.net',
              outputMode: 'json',
              apiKey: '9fc95d1f41757024e1df4fb4066cdaad8ca76cd0'
            },
            api: {
              'sentiment': {
                html: 'HTMLGetTextSentiment',
                htmlTargeted: 'HTMLGetTargetedSentiment',
                text: 'TextGetTextSentiment',
                textTargeted: 'TextGetTargetedSentiment',
                url: 'URLGetTextSentiment',
                urlTargeted: 'URLGetTargetedSentiment'
              },
              'news': {
                getNews: 'GetNews'
              },
              'taxonomy': {
                url: 'URLGetRankedTaxonomy',
                text: 'TextGetRankedTaxonomy',
                html: 'HTMLGetRankedTaxonomy'
              },
              'concept': {
                url: 'URLGetRankedConcepts',
                html: 'HTMLGetRankedConcepts',
                text: 'TextGetRankedConcepts'
              },
              'entity': {
                url: 'URLGetRankedNamedEntities',
                html: 'HTMLGetRankedNamedEntities',
                text: 'TextGetRankedNamedEntities'
              },
              'keyword': {
                url: 'URLGetRankedKeywords',
                html: 'HTMLGetRankedKeywords',
                text: 'TextGetRankedKeywords'
              },
              'relation': {
                url: 'URLGetRelations',
                html: 'HTMLGetRelations',
                text: 'TextGetRelations'
              },
              'text': {
                url: 'URLGetText',
                html: 'HTMLGetText',
                urlRaw: 'URLGetRawText',
                htmlRaw: 'HTMLGetRawText',
                urlTitle: 'URLGetTitle',
                htmlTitle: 'HTMLGetTitle'
              },
              'face': {
                url: 'URLGetRankedImageFaceTags',
                image: 'ImageGetRankedImageFaceTags'
              },
              'imageLink': {
                url: 'URLGetImage',
                html: 'HTMLGetImage'
              },
              'imageTagging': {
                url: 'URLGetRankedImageKeywords',
                image: 'ImageGetRankedImageKeywords'
              },
              'author': {
                url: 'URLGetAuthor',
                html: 'HTMLGetAuthor'
              },
              'authors': {
                url: 'URLGetAuthors',
                html: 'HTMLGetAuthors'
              },
              'language': {
                url: 'URLGetLanguage',
                html: 'HTMLGetLanguage',
                text: 'TextGetLanguage'
              },
              'feed': {
                url: 'URLGetFeedLinks',
                html: 'HTMLGetFeedLinks'
              },
              'microformats': {
                url: 'URLGetMicroformatData',
                html: 'HTMLGetMicroformatData'
              },
              'combinedCall': {
                url: 'URLGetCombinedData',
                html: 'HTMLGetCombinedData',
                text: 'TextGetCombinedData'
              },
              'publicationDate': {
                url: 'URLGetPubDate',
                html: 'HTMLGetPubDate'
              }
            }
          },
          semantria: {
            config: {
              baseUrl: "https://api.semantria.com",
              sdkVersion: "3.9.80",
              xApiVersion: '3.9',
              format: 'json',
              consumerKey: 'f7253db1-8d4d-4c28-94dc-1f1c8da5fc6a',
              consumerSecret: '67d08f4c-5a96-46fb-9824-1f9681fb64b2',
              useCompression: true
            }
          },
          watson: {
            config: {
              baseUrl: {
                gateway: 'https://gateway.watsonplatform.net',
                stream: ''
              },
              tokenUrl: "http://d1locker.com/watsonapi-3.php"
            },
            api: {
              'concept-expansion': 'concept-expansion-beta/api/v1',
              'dialog': 'dialog/api/v1',
              'personality-insights': 'personality-insights/api/v2',
              'relationship-extraction': 'relationship-extraction-beta/api/v1',
              'tradeoff-analytics': 'tradeoff-analytics/api/v1',
              'concept-insights': 'concept-insights/api/v2',
              'natural-language-classifier': 'natural-language-classifier/api/v1'
            }
          }
        };
        //Merge with user config
        exports = angular.merge(exports, config);

        return exports
      }
    }
  }
})();