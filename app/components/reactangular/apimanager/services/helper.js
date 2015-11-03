/**
 * Created by vinhhoang on 30/10/2015.
 */
(function () {
    angular
        .module('rectangular.apimanager')
        .factory('RectHelper', RectHelper);

    RectHelper.$inject = [];

    //my apikey: 9fc95d1f41757024e1df4fb4066cdaad8ca76cd0
    function RectHelper() {
        return {
            alchemy: {
                defaultConfig: {
                    baseUrl: 'http://gateway-a.watsonplatform.net',
                    outputMode: 'json'
                },
                apiKey: '9fc95d1f41757024e1df4fb4066cdaad8ca76cd0',
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
                    'taxonomy':{
                        url: 'URLGetRankedTaxonomy',
                        text: 'TextGetRankedTaxonomy',
                        html: 'HTMLGetRankedTaxonomy'
                    },
                    'concept':{
                        url: 'URLGetRankedConcepts',
                        html: 'HTMLGetRankedConcepts',
                        text: 'TextGetRankedConcepts'
                    },
                    'entity':{
                        url: 'URLGetRankedNamedEntities',
                        html: 'HTMLGetRankedNamedEntities',
                        text: 'TextGetRankedNamedEntities'
                    },
                    'keyword':{
                        url: 'URLGetRankedKeywords',
                        html: 'HTMLGetRankedKeywords',
                        text: 'TextGetRankedKeywords'
                    },
                    'relation':{
                        url: 'URLGetRelations',
                        html: 'HTMLGetRelations',
                        text: 'TextGetRelations'
                    },
                    'text':{
                        url: 'URLGetText',
                        html:'HTMLGetText',
                        urlRaw: 'URLGetRawText',
                        htmlRaw: 'HTMLGetRawText',
                        urlTitle: 'URLGetTitle',
                        htmlTitle: 'HTMLGetTitle'
                    },
                    'face':{
                        url: 'URLGetRankedImageFaceTags',
                        image: 'ImageGetRankedImageFaceTags'
                    },
                    'imageLink':{
                        url: 'URLGetImage',
                        html:'HTMLGetImage'
                    },
                    'imageTagging':{
                        url: 'URLGetRankedImageKeywords',
                        image: 'ImageGetRankedImageKeywords'
                    },
                    'author':{
                        url: 'URLGetAuthor',
                        html: 'HTMLGetAuthor'
                    },
                    'authors':{
                        url: 'URLGetAuthors',
                        html: 'HTMLGetAuthors'
                    },
                    'language':{
                        url: 'URLGetLanguage',
                        html:'HTMLGetLanguage',
                        text: 'TextGetLanguage'
                    },
                    'feed':{
                        url: 'URLGetFeedLinks',
                        html: 'HTMLGetFeedLinks'
                    },
                    'microformats':{
                        url: 'URLGetMicroformatData',
                        html: 'HTMLGetMicroformatData'
                    },
                    'combinedCall':{
                        url: 'URLGetCombinedData',
                        html: 'HTMLGetCombinedData',
                        text: 'TextGetCombinedData'
                    },
                    'publicationDate':{
                        url: 'URLGetPubDate',
                        html: 'HTMLGetPubDate'
                    }
                }
            }
        }
    }
})();