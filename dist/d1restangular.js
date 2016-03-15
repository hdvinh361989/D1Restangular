/**
 * Created by vinhhoang on 30/10/2015.
 */
(function () {
  angular.module('D1Restangular', [
      'restangular',
      'ngStorage'
    ])
    .config(configuration);

  configuration.$inject = [];

  function configuration() {

  }
})();
/**
 * Created by vinhhoang on 07/11/2015.
 */
(function () {
    angular.module('D1Restangular')
        .factory('Alchemy', Alchemy);

    Alchemy.$inject = ['RectHelper', 'Restangular'];

    function Alchemy(RectHelper, Restangular) {
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
            getAuthor: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.author.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.author.url
                })
            },
            getAuthors: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.authors.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.authors.url
                })
            },
            getCombined: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.combinedCall.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.combinedCall.url
                }),
                text: call({
                    endpointType: 'text',
                    endpoint: RectHelper.alchemy.api.combinedCall.text
                })
            },
            getConcept: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.concept.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.concept.url
                }),
                text: call({
                    endpointType: 'text',
                    endpoint: RectHelper.alchemy.api.concept.text
                })
            },
            getEntity: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.entity.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.entity.url
                }),
                text: call({
                    endpointType: 'text',
                    endpoint: RectHelper.alchemy.api.entity.text
                })
            },
            getFace: {
                image: call({
                    endpointType: 'image',
                    endpoint: RectHelper.alchemy.api.face.image
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.face.url
                })
            },
            getFeed: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.feed.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.feed.url
                })
            },
            getImageLink: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.imageLink.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.imageLink.url
                })
            },
            getImageTagging: {
                image: call({
                    endpointType: 'image',
                    endpoint: RectHelper.alchemy.api.imageTagging.image
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.imageTagging.url
                })
            },
            getKeyword: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.keyword.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.keyword.url
                }),
                text: call({
                    endpointType: 'text',
                    endpoint: RectHelper.alchemy.api.keyword.text
                })
            },
            getLanguage: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.language.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.language.url
                }),
                text: call({
                    endpointType: 'text',
                    endpoint: RectHelper.alchemy.api.language.text
                })
            },
            getMicroFormat: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.microformats.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.microformats.url
                })
            },
            getNews: call({
                endpointType: 'data',
                endpoint: RectHelper.alchemy.api.news.getNews
            }),
            getPublicationDate: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.publicationDate.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.publicationDate.url
                })
            },
            getRelation: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.relation.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.relation.url
                }),
                text: call({
                    endpointType: 'text',
                    endpoint: RectHelper.alchemy.api.relation.text
                })
            },
            getSentiment: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.sentiment.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.sentiment.url
                }),
                text: call({
                    endpointType: 'text',
                    endpoint: RectHelper.alchemy.api.sentiment.text
                }),
                htmlTargeted: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.sentiment.htmlTargeted
                }),
                urlTargeted: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.sentiment.urlTargeted
                }),
                textTargeted: call({
                    endpointType: 'text',
                    endpoint: RectHelper.alchemy.api.sentiment.textTargeted
                })
            },
            getTaxonomy: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.taxonomy.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.taxonomy.url
                }),
                text: call({
                    endpointType: 'text',
                    endpoint: RectHelper.alchemy.api.taxonomy.text
                })
            },
            getText: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.text.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.text.url
                }),
                htmlRaw: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.text.htmlRaw
                }),
                urlRaw: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.text.urlRaw
                }),
                htmlTitle: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.text.htmlTitle
                }),
                urlTitle: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.text.urlTitle
                })
            }
        };
        return exports;

        function call(option) {
            switch (option.endpointType) {
                case 'url':
                    return url;
                    break;
                case 'html':
                    return html;
                    break;
                case 'text':
                    return text;
                    break;
                case 'image':
                    return image;
                    break;
                case 'data':
                    return data;
                    break;
            }

            function url(params) {
                var config = {
                    endpointType: option.endpointType,
                    endpoint: option.endpoint,
                    queryParams: params
                };
                return runRequest(null, config);
            }

            function html(postData, params) {
                var config = {
                        endpointType: option.endpointType,
                        endpoint: option.endpoint,
                        queryParams: params
                    },
                    data = {
                        html: postData
                    };
                return runRequest(data, config);
            }

            function text(postData, params) {
                var config = {
                        endpointType: option.endpointType,
                        endpoint: option.endpoint,
                        queryParams: params
                    },
                    data = {
                        text: postData
                    };
                return runRequest(data, config);
            }

            function image(imageFile, params) {
                params = params || {};
                params.imagePostMode = 'raw';
                var config = {
                    endpointType: option.endpointType,
                    endpoint: option.endpoint,
                    queryParams: params
                };
                return runRequest(imageFile, config, true);
            }

            function data(params) {
                var config = {
                    endpointType: 'data',
                    endpoint: RectHelper.alchemy.api.news.getNews,
                    queryParams: params
                };
                return runRequest(null, config);
            }
        }

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
              consumerKey: '4767c5ae-f317-4260-b9fa-d50dff8b408f',
              consumerSecret: 'f8af162f-6d38-4a07-9f26-30823892d65f',
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
/**
 * Created by vinhhoang on 11/11/2015.
 */
(function () {
  angular.module('D1Restangular')
    .factory('Semantria', Semantria);

  Semantria.$inject = ['RectHelper', 'Restangular'];

  function Semantria(RectHelper, Restangular) {
    /**
     * Var MD5
     * */
    var MD5 = (function () {
      /*
       * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
       * Digest Algorithm, as defined in RFC 1321.
       * Copyright (C) Paul Johnston 1999 - 2000.
       * Updated by Greg Holt 2000 - 2001.
       * See http://pajhome.org.uk/site/legal.html for details.
       */

      /*
       * Convert a 32-bit number to a hex string with ls-byte first
       */
      var hex_chr = "0123456789abcdef";

      function rhex(num) {
        str = "";
        for (j = 0; j <= 3; j++)
          str += hex_chr.charAt((num >> (j * 8 + 4)) & 0x0F) +
            hex_chr.charAt((num >> (j * 8)) & 0x0F);
        return str;
      }

      /*
       * Convert a string to a sequence of 16-word blocks, stored as an array.
       * Append padding bits and the length, as described in the MD5 standard.
       */
      function str2blks_MD5(str) {
        nblk = ((str.length + 8) >> 6) + 1;
        blks = new Array(nblk * 16);
        for (i = 0; i < nblk * 16; i++) blks[i] = 0;
        for (i = 0; i < str.length; i++)
          blks[i >> 2] |= str.charCodeAt(i) << ((i % 4) * 8);
        blks[i >> 2] |= 0x80 << ((i % 4) * 8);
        blks[nblk * 16 - 2] = str.length * 8;
        return blks;
      }

      /*
       * Add integers, wrapping at 2^32. This uses 16-bit operations internally
       * to work around bugs in some JS interpreters.
       */
      function add(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
      }

      /*
       * Bitwise rotate a 32-bit number to the left
       */
      function rol(num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
      }

      /*
       * These functions implement the basic operation for each round of the
       * algorithm.
       */
      function cmn(q, a, b, x, s, t) {
        return add(rol(add(add(a, q), add(x, t)), s), b);
      }

      function ff(a, b, c, d, x, s, t) {
        return cmn((b & c) | ((~b) & d), a, b, x, s, t);
      }

      function gg(a, b, c, d, x, s, t) {
        return cmn((b & d) | (c & (~d)), a, b, x, s, t);
      }

      function hh(a, b, c, d, x, s, t) {
        return cmn(b ^ c ^ d, a, b, x, s, t);
      }

      function ii(a, b, c, d, x, s, t) {
        return cmn(c ^ (b | (~d)), a, b, x, s, t);
      }

      /*
       * Take a string and return the hex representation of its MD5.
       */
      function calcMD5(str) {
        x = str2blks_MD5(str);
        a = 1732584193;
        b = -271733879;
        c = -1732584194;
        d = 271733878;

        for (i = 0; i < x.length; i += 16) {
          olda = a;
          oldb = b;
          oldc = c;
          oldd = d;

          a = ff(a, b, c, d, x[i + 0], 7, -680876936);
          d = ff(d, a, b, c, x[i + 1], 12, -389564586);
          c = ff(c, d, a, b, x[i + 2], 17, 606105819);
          b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
          a = ff(a, b, c, d, x[i + 4], 7, -176418897);
          d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
          c = ff(c, d, a, b, x[i + 6], 17, -1473231341);
          b = ff(b, c, d, a, x[i + 7], 22, -45705983);
          a = ff(a, b, c, d, x[i + 8], 7, 1770035416);
          d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
          c = ff(c, d, a, b, x[i + 10], 17, -42063);
          b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
          a = ff(a, b, c, d, x[i + 12], 7, 1804603682);
          d = ff(d, a, b, c, x[i + 13], 12, -40341101);
          c = ff(c, d, a, b, x[i + 14], 17, -1502002290);
          b = ff(b, c, d, a, x[i + 15], 22, 1236535329);

          a = gg(a, b, c, d, x[i + 1], 5, -165796510);
          d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
          c = gg(c, d, a, b, x[i + 11], 14, 643717713);
          b = gg(b, c, d, a, x[i + 0], 20, -373897302);
          a = gg(a, b, c, d, x[i + 5], 5, -701558691);
          d = gg(d, a, b, c, x[i + 10], 9, 38016083);
          c = gg(c, d, a, b, x[i + 15], 14, -660478335);
          b = gg(b, c, d, a, x[i + 4], 20, -405537848);
          a = gg(a, b, c, d, x[i + 9], 5, 568446438);
          d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
          c = gg(c, d, a, b, x[i + 3], 14, -187363961);
          b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
          a = gg(a, b, c, d, x[i + 13], 5, -1444681467);
          d = gg(d, a, b, c, x[i + 2], 9, -51403784);
          c = gg(c, d, a, b, x[i + 7], 14, 1735328473);
          b = gg(b, c, d, a, x[i + 12], 20, -1926607734);

          a = hh(a, b, c, d, x[i + 5], 4, -378558);
          d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
          c = hh(c, d, a, b, x[i + 11], 16, 1839030562);
          b = hh(b, c, d, a, x[i + 14], 23, -35309556);
          a = hh(a, b, c, d, x[i + 1], 4, -1530992060);
          d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
          c = hh(c, d, a, b, x[i + 7], 16, -155497632);
          b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
          a = hh(a, b, c, d, x[i + 13], 4, 681279174);
          d = hh(d, a, b, c, x[i + 0], 11, -358537222);
          c = hh(c, d, a, b, x[i + 3], 16, -722521979);
          b = hh(b, c, d, a, x[i + 6], 23, 76029189);
          a = hh(a, b, c, d, x[i + 9], 4, -640364487);
          d = hh(d, a, b, c, x[i + 12], 11, -421815835);
          c = hh(c, d, a, b, x[i + 15], 16, 530742520);
          b = hh(b, c, d, a, x[i + 2], 23, -995338651);

          a = ii(a, b, c, d, x[i + 0], 6, -198630844);
          d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
          c = ii(c, d, a, b, x[i + 14], 15, -1416354905);
          b = ii(b, c, d, a, x[i + 5], 21, -57434055);
          a = ii(a, b, c, d, x[i + 12], 6, 1700485571);
          d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
          c = ii(c, d, a, b, x[i + 10], 15, -1051523);
          b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
          a = ii(a, b, c, d, x[i + 8], 6, 1873313359);
          d = ii(d, a, b, c, x[i + 15], 10, -30611744);
          c = ii(c, d, a, b, x[i + 6], 15, -1560198380);
          b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
          a = ii(a, b, c, d, x[i + 4], 6, -145523070);
          d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
          c = ii(c, d, a, b, x[i + 2], 15, 718787259);
          b = ii(b, c, d, a, x[i + 9], 21, -343485551);

          a = add(a, olda);
          b = add(b, oldb);
          c = add(c, oldc);
          d = add(d, oldd);
        }

        return rhex(a) + rhex(b) + rhex(c) + rhex(d);
      }

      return {
        getHash: function (source) {
          return calcMD5(source);
        }
      }
    })();


    /**
     * Ultil
     * */
    var Utils = {
      HEX: "0123456789ABCDEF",

      encodeUtf8: function (s) {
        return Utils.unescapeUtf8(encodeURIComponent(s));
      },

      decodeUtf8: function (s) {
        return decodeURIComponent(Utils.escapeUtf8(s));
      },

      nibbleToHex: function (nibble) {
        return Utils.HEX.charAt(nibble);
      },

      escapeUtf8: function (str) {
        return str.replace(/[^*+.-9A-Z_a-z-]/g, function (s) {
          var c = s.charCodeAt(0);
          return (c < 16 ? "%0" + c.toString(16) : c < 128 ? "%" + c.toString(16) : c < 2048 ? "%" + (c >> 6 | 192).toString(16) + "%" + (c & 63 | 128).toString(16) : "%" + (c >> 12 | 224).toString(16) + "%" + (c >> 6 & 63 | 128).toString(16) + "%" + (c & 63 | 128).toString(16)).toUpperCase()
        });
      },

      unescapeUtf8: function (str) {
        return str.replace(/%(E(0%[AB]|[1-CEF]%[89AB]|D%[89])[0-9A-F]|C[2-9A-F]|D[0-9A-F])%[89AB][0-9A-F]|%[0-7][0-9A-F]/ig, function (s) {
          var c = parseInt(s.substring(1), 16);
          return String.fromCharCode(c < 128 ? c : c < 224 ? (c & 31) << 6 | parseInt(s.substring(4), 16) & 63 : ((c & 15) << 6 | parseInt(s.substring(4), 16) & 63) << 6 | parseInt(s.substring(7), 16) & 63)
        });
      },

      base64: function (wordArray) {
        // Shortcuts
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;
        var map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

        // Clamp excess bits
        wordArray.clamp();

        // Convert
        var base64Chars = [];
        for (var i = 0; i < sigBytes; i += 3) {
          var byte1 = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
          var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
          var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

          var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

          for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
            base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
          }
        }

        // Add padding
        var paddingChar = map.charAt(64);
        if (paddingChar) {
          while (base64Chars.length % 4) {
            base64Chars.push(paddingChar);
          }
        }

        return base64Chars.join('');
      },

      getHmacSha1: function (key, message) {
        return Utils.base64(CryptoJS.HmacSHA1(message, key));
      },


      /**
       * Function returns string in ?q1=v1&q2=v2 format
       * from passed config key-value pairs
       *
       * @param {Object} config
       * @returns {undefined}
       */
      createQueryStringFromConfig: function (config) {
        if (!config) {
          return "";
        }

        var result = [];

        for (var key in config) {
          if (typeof config[key] == "undefined") {
            continue;
          }

          result.push(key + "=" + config[key]);
        }

        if (result.length > 0) {
          return "?" + result.join("&");
        }

        return "";
      }
    };


    //Request class
    function Request(consumerKey, consumerSecret, applicationName, acceptEncoding, apiVersion) {
      this.consumerKey = consumerKey;
      this.consumerSecret = consumerSecret;
      this.applicationName = applicationName;
      this.acceptEncoding = acceptEncoding;
      this.apiVersion = apiVersion
    }

    Request.prototype = {

      /**
       * @property {Object}
       */
      oAuth: {
        version: "1.0",
        parameterPrefix: "oauth_",
        consumerKeyKey: "oauth_consumer_key",
        versionKey: "oauth_version",
        signatureMethodKey: "oauth_signature_method",
        signatureKey: "oauth_signature",
        timestampKey: "oauth_timestamp",
        nonceKey: "oauth_nonce"
      },

      /**
       * @returns {Number}
       */
      generateNonce: function () {
        return Math.floor(Math.random() * 9999999);
      },

      /**
       * @returns {Number}
       */
      generateTimestamp: function () {
        return (new Date()).getTime();
      },

      /**
       * @param {Number} timestamp
       * @param {Number} nonce
       * @returns {String}
       */
      getNormalizedParameters: function (timestamp, nonce) {
        var items = {};

        items[this.oAuth.consumerKeyKey] = this.consumerKey;
        items[this.oAuth.nonceKey] = nonce;
        items[this.oAuth.signatureMethodKey] = "HMAC-SHA1";
        items[this.oAuth.timestampKey] = timestamp;
        items[this.oAuth.versionKey] = this.oAuth["version"];

        return Utils.createQueryStringFromConfig(items);
      },

      /**
       * @param {String} method
       * @param {String} url
       * @param {Number} timestamp
       * @param {Number} nonce
       * @returns {String}
       */
      generateQuery: function (method, url, timestamp, nonce) {
        var queryStr = this.getNormalizedParameters(timestamp, nonce);

        if (url.indexOf("?") != -1) {
          return url + '&' + queryStr.substring(1);
        }

        return url += queryStr;
      },

      generateAuthHeader: function (query, timestamp, nonce) {
        var md5cs = this.consumerSecret;
        var escquery = encodeURIComponent(query);
        var hash = encodeURIComponent(Utils.getHmacSha1(md5cs, escquery));

        var items = {};

        items["OAuth"] = "";
        items[this.oAuth.versionKey] = this.oAuth["version"];
        items[this.oAuth.signatureMethodKey] = "HMAC-SHA1";
        items[this.oAuth.nonceKey] = "\"" + nonce + "\"";
        items[this.oAuth.consumerKeyKey] = "\"" + this.consumerKey + "\"";
        items[this.oAuth.timestampKey] = "\"" + timestamp + "\"";
        items[this.oAuth.signatureKey] = "\"" + hash + "\"";

        var parameters = [];
        for (key in items) {
          if (items[key] != '') {
            parameters.push(key + "=" + items[key]);
          } else {
            parameters.push(key);
          }

        }

        return parameters.join(',');
      },

      getRequestHeaders: function (method, nonce, timestamp, query) {
        var headers = {};

        headers["Authorization"] = this.generateAuthHeader(query, timestamp, nonce);

        if (method == "POST") {
          headers["Content-Type"] = "application/x-www-form-urlencoded";
        }

        headers["x-app-name"] = this.applicationName;
        headers["x-api-version"] = this.apiVersion;
        if (typeof navigator != "undefined" && !/WebKit/.test(navigator.userAgent))
          headers["Accept-Encoding"] = this.acceptEncoding;

        return headers;
      },

      runRequest: function (method, url, headers, postData) {
        /*var xmlHttp;

         xmlHttp = new XMLHttpRequest();

         if(!("withCredentials" in xmlHttp)) {
         xmlHttp = new XDomainRequest();
         }

         xmlHttp.open(method, url, false);
         console.log(url);

         for (key in headers) {
         xmlHttp.setRequestHeader(key, headers[key]);
         }

         xmlHttp.send(postData);*/
        var semantriaAPI = Restangular.allUrl('semantria', url);
        return semantriaAPI.customOperation(method.toLowerCase(), null, null, headers, postData);
      },

      authWebRequest: function (method, url, postData) {
        var nonce = this.generateNonce(),
          timestamp = this.generateTimestamp(),
          query = this.generateQuery(method, url, timestamp, nonce),
          headers = this.getRequestHeaders(method, nonce, timestamp, query);

        return this.runRequest(method, query, headers, postData);
      }
    };
    var Semantriaapi = {
      acceptEncoding: RectHelper.semantria.config.useCompression ? 'gzip, deflate' : 'identity',
      applicationName: (function () {
        var appName = RectHelper.semantria.config.applicationName ? (RectHelper.semantria.config.applicationName + "/") : "";
        appName += tpl("JavaScript/{SDK_VERSION}/{format}", {
          SDK_VERSION: RectHelper.semantria.config.sdkVersion,
          format: RectHelper.semantria.config.format
        });
      })(),

      /**
       * @param {String} string
       * @param {Object} config
       * @returns {String}
       */
      tpl: tpl,

      /**
       * @param {String} key
       * @param {String} value
       */
      override: override,

      /**
       * @param {Object} params
       * @returns {String}
       */
      serialize: serialize,

      /**
       * @param {String} jsonSource
       * @returns {Object}
       */
      deserialize: deserialize,

      /**
       * @returns {undefiend}
       */
      formatUrl: formatUrl,

      /**
       * @param {String} method
       * @param {String} url
       * @param {Object} config
       * @returns {undefined}
       */
      runRequest: runRequest
    };

    var exports = {

      /**
       *Get status endpoint
       */
      getStatus: getStatus,

      /**
       *Get Features endpoint
       */
      getSupportedFeatures: getSupportedFeatures,

      /**
       *Get Subscription endpoint
       */
      getSubscription: getSubscription,

      /**
       *Get Statistics endpoint
       */
      getStatistics: getStatistics,

      /**
       *Get Configurations endpoint
       */
      getConfigurations: getConfigurations,

      /**
       * @param {Object} params
       */
      addConfigurations: addConfigurations,

      /**
       * @param {string[]} name - new configuration name
       * @param {string[]} template - template configuration id
       * @returns {*}
       */
      cloneConfiguration: cloneConfiguration,

      /**
       * @param {Object} params
       */
      updateConfigurations: updateConfigurations,

      /**
       * @param {Object} params
       */
      removeConfigurations: removeConfigurations,

      /**
       * @param {Object} params
       * @param {Number} configId
       */
      getBlacklist: getBlacklist,

      /**
       * @param {Object} params
       * @param {Number} configId
       */
      addBlacklist: addBlacklist,

      /**
       * @param {Object} params
       * @param {Number} configId
       */
      removeBlacklist: removeBlacklist,

      /**
       * @param {Object} params
       * @param {Number} configId
       */
      getCategories: getCategories,

      /**
       * @param {Object} params
       * @param {Number} configId
       */
      addCategories: addCategories,

      /**
       * @param {Object} params
       * @param {Number} configId
       */
      updateCategories: updateCategories,

      /**
       * @param {Object} params
       * @param {Number} configId
       */
      removeCategories: removeCategories,

      /**
       * @param {Number} configId
       */
      getQueries: getQueries,

      /**
       * @param {Object} params
       * @param {Number} configId
       */
      addQueries: addQueries,

      /**
       * @param {Object} params
       * @param {Number} configId
       */
      updateQueries: updateQueries,

      /**
       * @param {Object} params
       * @param {Number} configId
       */
      removeQueries: removeQueries,

      /**
       * @param {Number} configId
       */
      getEntities: getEntities,

      /**
       * @param {Object} params
       * @param {Number} configId
       */
      addEntities: addEntities,

      /**
       * @param {Object} params
       * @param {Number} configId
       */
      updateEntities: updateEntities,

      /**
       * @param {Object} params
       * @param {Number} configId
       */
      removeEntities: removeEntities,

      /**
       * @param {Number} configId
       */
      getPhrases: getPhrases,

      /**
       * @param {Object} params
       * @param {Number} configId
       */
      addPhrases: addPhrases,

      /**
       * @param {Object} params
       * @param {Number} configId
       */
      updatePhrases: updatePhrases,

      /**
       * @param {Object} params
       * @param {Number} configId
       */
      removePhrases: removePhrases,

      /**
       * @param {Object} doc
       * @param {Number} configId
       */
      queueDocument: queueDocument,

      /**
       * @param {Object} batch
       * @param {Number} configId
       */
      queueBatchOfDocuments: queueBatchOfDocuments,

      /**
       * @param {Object} collection
       * @param {Number} configId
       */
      queueCollection: queueCollection,

      /**
       * @param {Number} id
       * @param {Number} configId
       */
      getDocument: getDocument,

      /**
       * @param {Number} id
       * @param {Number} configId
       */
      getCollection: getCollection,

      /**
       * @param {Number} id
       * @param {Number} configId
       */
      cancelDocument: cancelDocument,

      /**
       * @param {Number} id
       * @param {Number} configId
       */
      cancelCollection: cancelCollection,

      getProcessedDocuments: getProcessedDocuments,

      getProcessedDocumentsByJobId: getProcessedDocumentsByJobId,

      getProcessedCollections: getProcessedCollections,

      getProcessedCollectionsByJobId: getProcessedCollectionsByJobId,
    };
    return exports;

    /**
     * Implement functions
     * */
    function getStatus() {
      return Semantriaapi.runRequest("GET", "/status");
    }

    function getSupportedFeatures(language) {
      return Semantriaapi.runRequest("GET", "/features", {
        getParams: {
          language: language
        }
      });
    }

    function getSubscription() {
      return Semantriaapi.runRequest("GET", "/subscription");
    }

    function getStatistics() {
      return Semantriaapi.runRequest("GET", "/statistics");
    }

    function getConfigurations() {
      return Semantriaapi.runRequest("GET", "/configurations");
    }

    function addConfigurations(params) {
      return updateConfigurations(params);
    }

    function cloneConfiguration(name, template) {
      var params = {
        name: name,
        template: template
      };
      return addConfigurations([params]);
    }

    function updateConfigurations(params) {
      return Semantriaapi.runRequest("POST", "/configurations", {
        postParams: params
      });
    }

    function removeConfigurations(params) {
      return Semantriaapi.runRequest("DELETE", "/configurations", {
        postParams: params
      });
    }

    function getBlacklist(configId) {
      return Semantriaapi.runRequest("GET", "/blacklist", {
        getParams: {
          config_id: configId
        }
      });
    }

    function addBlacklist(params, configId) {
      return Semantriaapi.runRequest("POST", "/blacklist", {
        getParams: {
          config_id: configId
        },
        postParams: params
      });
    }

    function removeBlacklist(params, configId) {
      return Semantriaapi.runRequest("DELETE", '/blacklist', {
        getParams: {
          config_id: configId
        },
        postParams: params
      });
    }

    function getCategories(configId) {
      return Semantriaapi.runRequest("GET", "/categories", {
        getParams: {
          config_id: configId
        }
      });
    }

    function addCategories(params, configId) {
      return updateCategories(params, configId);
    }

    function updateCategories(params, configId) {
      return Semantriaapi.runRequest("POST", "/categories", {
        getParams: {
          config_id: configId
        },
        postParams: params
      });
    }

    function removeCategories(params, configId) {
      return Semantriaapi.runRequest("DELETE", "/categories", {
        getParams: {
          config_id: configId
        },
        postParams: params
      });
    }

    function getQueries(configId) {
      return Semantriaapi.runRequest("GET", "/queries", {
        getParams: {
          config_id: configId
        }
      });
    }

    function addQueries(params, configId) {
      return updateQueries(params, configId);
    }

    function updateQueries(params, configId) {
      return Semantriaapi.runRequest("POST", "/queries", {
        getParams: {
          config_id: configId
        },
        postParams: params
      });
    }

    function removeQueries(params, configId) {
      return Semantriaapi.runRequest("DELETE", "/queries", {
        getParams: {
          config_id: configId
        },
        postParams: params
      });
    }

    function getEntities(configId) {
      return Semantriaapi.runRequest("GET", "/entities", {
        getParams: {
          config_id: configId
        }
      });
    }

    function addEntities(params, configId) {
      return updateEntities(params, configId);
    }

    function updateEntities(params, configId) {
      return Semantriaapi.runRequest("POST", "/entities", {
        getParams: {
          config_id: configId
        },
        postParams: params
      });
    }

    function removeEntities(params, configId) {
      return Semantriaapi.runRequest("DELETE", "/entities", {
        getParams: {
          config_id: configId
        },
        postParams: params
      });
    }

    function getPhrases(configId) {
      return Semantriaapi.runRequest("GET", "/phrases", {
        getParams: {
          config_id: configId
        }
      });
    }

    function addPhrases(params, configId) {
      return updatePhrases(params, configId);
    }

    function updatePhrases(params, configId) {
      return Semantriaapi.runRequest("POST", "/phrases", {
        getParams: {
          config_id: configId
        },
        postParams: params
      });
    }

    function removePhrases(params, configId) {
      return Semantriaapi.runRequest("DELETE", "/phrases", {
        getParams: {
          config_id: configId
        },
        postParams: params
      });
    }

    function queueDocument(doc, configId) {
      return Semantriaapi.runRequest("POST", "/document", {
        getParams: {
          config_id: configId
        },
        postParams: doc
      });
    }

    function queueBatchOfDocuments(batch, configId) {
      var result = Semantriaapi.runRequest("POST", "/document/batch", {
        getParams: {
          config_id: configId
        },
        postParams: batch
      });

      return result;
    }

    function queueCollection(collection, configId) {
      return Semantriaapi.runRequest("POST", "/collection", {
        getParams: {
          config_id: configId
        },
        postParams: collection
      });
    }

    function getDocument(id, configId) {
      if (!id) {
        throw "Specified document's ID is empty";
      }

      var url = "/document/" + id;
      return Semantriaapi.runRequest("GET", url, {
        getParams: {
          config_id: configId
        }
      });
    }

    function getCollection(id, configId) {
      if (!id) {
        throw "Specified document's ID is empty";
      }

      return Semantriaapi.runRequest("GET", "/collection/" + id, {
        getParams: {
          config_id: configId
        }
      });
    }

    function cancelDocument(id, configId) {
      if (!id) {
        throw "Specified document's ID is empty";
      }

      return Semantriaapi.runRequest("DELETE", "/document/" + id, {
        getParams: {
          config_id: configId
        }
      });
    }

    function cancelCollection(id, configId) {
      if (!id) {
        throw "Specified document's ID is empty";
      }

      return Semantriaapi.runRequest("DELETE", "/collection/" + id, {
        getParams: {
          config_id: configId
        }
      });
    }

    function getProcessedDocuments(configId) {
      return Semantriaapi.runRequest("GET", "/document/processed", {
        getParams: {
          config_id: configId
        }
      });
    }

    function getProcessedDocumentsByJobId(jobId) {
      return Semantriaapi.runRequest("GET", "/document/processed", {
        getParams: {
          job_id: jobId
        }
      });
    }

    function getProcessedCollections(configId) {
      return Semantriaapi.runRequest("GET", "/collection/processed", {
        getParams: {
          config_id: configId
        }
      });
    }

    function getProcessedCollectionsByJobId(jobId) {
      return Semantriaapi.runRequest("GET", "/collection/processed", {
        getParams: {
          job_id: jobId
        }
      });
    }

    function emptyFunc() {
    }

    function tpl(string, config) {
      return string.replace(/{([^{]*)}/g, function (fm, im) {
        return config[im];
      });
    }

    function override(key, value) {
      if (arguments.length == 1) {
        for (var k in key) {
          override(k, key[k]);
        }
      } else {
        exports[key] = value;
      }

      return exports;
    }

    function serialize(params) {
      return Utils.encodeUtf8(JSON.stringify(params));
    }

    function deserialize(jsonSource) {
      return JSON.parse(Utils.decodeUtf8(jsonSource));
    }

    function formatUrl(url, params) {
      return tpl("{host}{url}.{format}{getParams}", {
        host: RectHelper.semantria.config.baseUrl,
        url: url,
        format: RectHelper.semantria.config.format,
        getParams: Utils.createQueryStringFromConfig(params)
      });
    }

    function runRequest(method, url, config) {
      config = config || {};
      config.postParams = config.postParams || null;
      url = formatUrl(url, config.getParams);

      var request = new Request(
        RectHelper.semantria.config.consumerKey,
        MD5.getHash(RectHelper.semantria.config.consumerSecret),
        exports.applicationName,
        exports.acceptEncoding,
        RectHelper.semantria.config.xApiVersion
      );

      if (config.postParams) {
        config.postParams = serialize(config.postParams);
      }

      return request.authWebRequest(method, url, config.postParams);
    }
  }
})();
/**
 * Created by vinhhoang on 06/12/2015.
 */
(function () {
  angular.module('D1Restangular')
    .factory('Watson', Watson);

  Watson.$inject = ['RectHelper', 'Restangular', '$localStorage', '$q', '$log'];

  function Watson(helper, rest, $localS, $q, $log) {
    //Create 1 individual Restangular object for Watson api type gateway with its own config
    var watsonRestG = rest.withConfig(function (RestangularConfigurer) {

      RestangularConfigurer.setBaseUrl(helper.watson.config.baseUrl.gateway);

      RestangularConfigurer.setRequestInterceptor(function (elem, operation) {

        console.log('Operation name: ', operation);

        if (operation === 'remove') {
          return undefined;
        }
        return elem;
      });

      /*
       RestangularConfigurer.setDefaultHttpFields({
       withCredentials: true
       })
       */

    });

    //Create Restangular object for each api endpoint
    var concept = watsonRestG.all(helper.watson.api['concept-expansion']),
      dialog = watsonRestG.all(helper.watson.api['dialog']),
      personality = watsonRestG.all(helper.watson.api['personality-insights']),
      question = watsonRestG.all(helper.watson.api['question-and-answer']),
      relationship = watsonRestG.all(helper.watson.api['relationship-extraction']),
      tradeoff = watsonRestG.all(helper.watson.api['tradeoff-analytics']),
      conceptInsights = watsonRestG.all(helper.watson.api['concept-insights']),
      natural = watsonRestG.all(helper.watson.api['natural-language-classifier']);

    concept.apiName = 'concept-expansion';
    dialog.apiName = 'dialog';
    personality.apiName = 'personality-insights';
    question.apiName = 'question-and-answer';
    relationship.apiName = 'relationship-extraction';
    tradeoff.apiName = 'tradeoff-analytics';
    conceptInsights.apiName = 'concept-insights';
    natural.apiName = 'natural-language-classifier';

    concept.type = dialog.type = personality.type = question.type =
      relationship.type = tradeoff.type = conceptInsights.type = natural.type = 'gateway';


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
     * Run request: get token then add to header before send request
     * */
    function prepareHeader(config) {
      return getToken(config.apiName, config.type).then(function (response) {
        return {
          'x-watson-authorization-token': response.token
        };
      })
    }

    /**
     * Call Watson api endpoint
     * */
    function prepareFormData(data) {
      var queryData = "";

      //Create request body from queryParams
      angular.forEach(data, function (value, key) {
        queryData += key + '=' + value + '&';
      });

      //remove the last '&' character
      queryData = queryData.slice(0, -1);
      return queryData;
    }

    /**
     * Transform array to string
     * */
    function arrayToString(arrays) {
      var rs = "[";
      arrays.forEach(function (v) {
        rs += '"' + v + '",';
      });
      rs = rs.slice(0, rs.length - 1);
      rs += "]";
      return rs;
    }


    /**
     * Concept-expansion api method
     * apiName: concept-expansion-beta
     * */
    function getPing() {
      return prepareHeader({
        apiName: concept.apiName,
        type: concept.type
      }).then(function (header) {
        return concept
          .all('ping')
          .getList(null, header)
      });
    }

    function postUpload(data) {
      return prepareHeader({
        apiName: concept.apiName,
        type: concept.type
      }).then(function (header) {
        return concept
          .all('upload')
          .post(data, null, header)
      });
    }

    function getStatus(jobId) {
      return prepareHeader({
        apiName: concept.apiName,
        type: concept.type
      }).then(function (header) {
        return concept
          .all('status')
          .getList({jobid: jobId}, header)
      });
    }

    function putResult(jobId) {
      return prepareHeader({
        apiName: concept.apiName,
        type: concept.type
      }).then(function (header) {
        return concept
          .customPUT({jobid: jobId}, 'result', null, header)
      });
    }


    /**
     * Dialog api method
     * */
    function getDialogs() {
      return prepareHeader({
        apiName: dialog.apiName,
        type: dialog.type
      }).then(function (header) {
        return dialog
          .all('dialogs')
          .getList({}, header)
      })
    }

    function postDialog(fileName, name) {
      return prepareHeader({
        apiName: dialog.apiName,
        type: dialog.type
      }).then(function (header) {
        return dialog
          .all('dialogs')
          .post(prepareFormData({
            file: fileName,
            name: name
          }), {}, {'content-type': 'application/x-www-form-urlencoded'})
      })
    }

    function deleteDialog(dialog_id) {
      return prepareHeader({
        apiName: dialog.apiName,
        type: dialog.type
      }).then(function (header) {
        return dialog
          .one('dialogs', dialog_id)
          .remove({}, header)
      })
    }

    function updateDialog(dialog_id) {
      return prepareHeader({
        apiName: dialog.apiName,
        type: dialog.type
      }).then(function (header) {
        return dialog
          .one('dialogs', dialog_id)
          .put({}, header)
      })
    }

    function postConverse(dialog_id, conversation_id, client_id, input) {
      return prepareHeader({
        apiName: dialog.apiName,
        type: dialog.type
      }).then(function (header) {
        return dialog
          .one('dialogs', dialog_id)
          .all('conversation')
          .post(
            prepareFormData({
              conversation_id: conversation_id,
              client_id: client_id,
              input: input
            }), {}, header
          )
      })
    }

    function getConversation(dialog_id, params) {
      params = params || {};
      return prepareHeader({
        apiName: dialog.apiName,
        type: dialog.type
      }).then(function (header) {
        return dialog
          .one('dialogs', dialog_id)
          .all('conversation')
          .getList(params, header)
      })
    }

    function getProfile(dialog_id, client_id) {
      return prepareHeader({
        apiName: dialog.apiName,
        type: dialog.type
      }).then(function (header) {
        return dialog
          .one('dialogs', dialog_id)
          .all('profile')
          .getList({client_id: client_id}, header)
      })
    }


    /**
     * personality-insights api methods
     * */
    function postProfile(contentType, body, params, optionHeaders) {
      params = params || {};
      optionHeaders = optionHeaders || {};
      return prepareHeader({
        apiName: personality.apiName,
        type: personality.type
      }).then(function (headers) {
        headers['content-type'] = contentType;
        headers = angular.merge(headers, optionHeaders);
        return personality
          .all('profile')
          .post(body, params, headers)
      })
    }


    /**
     * Concept-Insights
     * */
    function getAccounts() {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        return conceptInsights
          .all('accounts')
          .getList({}, header)
      })
    }

    function getGraphs() {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        return conceptInsights
          .all('graphs')
          .getList({}, header)
      })
    }

    function searchConceptLabel(accountId, graph, query, optionParams) {
      optionParams = optionParams || {};
      optionParams['query'] = query;
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        return conceptInsights
          .one('graphs', accountId)
          .all(graph)
          .all('label_search')
          .getList(optionParams, header)
      })
    }

    function getConcept(accountId, graph, concept) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        return conceptInsights
          .one('graphs', accountId)
          .all(graph)
          .one('concepts', concept)
          .get({}, header)
      })
    }

    /**
     * Get related concepts for given set of concepts
     * */
    function getRelatedConcepts(accountId, graph, concepts, optionParams) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !graph || !concepts) {
          $log.error('getRelatedConcepts() missing required fields');
          return null;
        } else {
          optionParams = optionParams || {};
          optionParams['concepts'] = arrayToString(concepts);
          return conceptInsights
            .one('graphs', accountId)
            .all(graph)
            .all('related_concepts')
            .getList(optionParams, header)
        }
      })
    }

    /**
     Get related concepts for a given concept
     * */
    function getRelatedConceptsOf(accountId, graph, concept, optionParams) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !graph) {
          $log.error('getRelatedConceptsOf() missing required fields');
          return null;
        } else {
          optionParams = optionParams || {};
          return conceptInsights
            .one('graphs', accountId)
            .all(graph)
            .one('concepts', concept)
            .all('related_concepts')
            .getList(optionParams, header)
        }
      })
    }

    function getRelationScore(accountId, graph, concept, concepts) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !graph || !concept || !concepts) {
          $log.error('getRelationScore() missing required field(s)');
          return null;
        } else {
          var params = {concepts: arrayToString(concepts)};
          return conceptInsights
            .one('graphs', accountId)
            .all(graph)
            .one('concepts', concept)
            .getList('relation_scores', params, header)
        }
      })
    }

    function postAnnoText(accountId, graph, body, contentType) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !graph || !body) {
          $log.error('postAnnoText(0 missing required field(s)');
          return null;
        } else {
          //Set default content type
          contentType = contentType || 'text.plain';
          header['content-type'] = contentType;
          return conceptInsights
            .one('graphs', accountId)
            .all(graph)
            .all('annotate_text')
            .post(body, {}, header)
        }
      })
    }


    function createCorpus(accountId, corpus, body) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus || !body) {
          $log.error('createCorpus() missing required field(s)');
          return null;
        } else {
          header['content-type'] = 'application/json';
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .customPUT(body, '', {}, header)
        }
      })
    }

    function getCorpora() {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        return conceptInsights
          .all('corpora')
          .getList({}, header)
      })
    }

    function getCorpus(accountId, corpus) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus || !body) {
          $log.error('getCorpus() missing required field(s)');
          return null;
        } else {
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .getList({}, header)
        }
      })
    }

    function updateCorpus(accountId, corpus, body) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus || !body) {
          $log.error('updateCorpus() missing required field(s)');
          return null;
        } else {
          header['content-type'] = 'application/json';
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .post(body, {}, header)
        }
      })
    }

    function deleteCorpus(accountId, corpus) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus) {
          $log.error('deleteCorpus() missing required field(s)');
          return null;
        } else {
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .remove({}, header);
        }
      })
    }

    function getCorpusState(accountId, corpus) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus) {
          $log.error('getCorpusState() missing required field(s)');
          return null;
        } else {
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .all('processing_state')
            .post({}, header)
        }
      })
    }

    function searchDocLabel(accountId, corpus, query, optionsParams) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus || !query) {
          $log.error('searchDocLabel() missing required field(s)');
          return null;
        } else {
          optionsParams = optionsParams || {};
          optionsParams['query'] = query;
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .all('label_search')
            .getList(optionsParams, header)
        }
      })
    }

    function getCorpusStatistics(accountId, corpus) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus) {
          $log.error('getCorpusStatistics() missing required field(s)');
          return null;
        } else {
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .all('stats')
            .getList({}, header)
        }
      })
    }

    function getRelatedConceptCorpus(accountId, corpus, optionParams) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus) {
          $log.error('getRelatedConceptCorpus() missing required field(s)');
          return null;
        } else {
          optionParams = optionParams || {};
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .all('related_concepts')
            .getList(optionParams, header)
        }
      })
    }

    function getRelationScoresCorpus(accountId, corpus, concepts) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus || !concepts) {
          $log.error('getRelationScoresCorpus() missing required field(s)');
          return null;
        } else {
          var params = {'concepts': arrayToString(concepts)};
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .all('relation_scores')
            .getList(params, header)
        }
      })
    }

    function searchConceptual(accountId, corpus, ids, optionParams) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus || !ids) {
          $log.error('searchConceptual() missing required field(s)');
          return null;
        } else {
          optionParams = optionParams || {};
          optionParams['ids'] = arrayToString(ids);
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .all('conceptual_search')
            .getList(optionParams, header)
        }
      })
    }


    function createDocument(accountId, corpus, document, body) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus || !document || !body) {
          $log.error('createDocument() missing required field(s)');
          return null;
        } else {
          header['content-type'] = 'application/json';
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .one('document', document)
            .customPUT(body, '', {}, header)
        }
      })
    }

    function getDocuments(accountId, corpus, optionParams) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus) {
          $log.error('getDocuments() missing required field(s)');
          return null;
        } else {
          optionParams = optionParams || {};
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .all('documents')
            .getList(optionParams, header)
        }
      })
    }

    function getDocument(accountId, corpus, document) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus || !document) {
          $log.error('getDocument() missing required field(s)');
          return null;
        } else {
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .one('documents', document)
            .get({}, header)
        }
      })
    }

    function updateDocument(accountId, corpus, document, body) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus || !document || !body) {
          $log.error('updateDocument() missing required field(s)');
          return null;
        } else {
          header['content-type'] = 'application/json';
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .one('documents', document)
            .post('', body, {}, header)
        }
      })
    }

    function deleteDocument(accountId, corpus, document) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus || !document) {
          $log.error('deleteDocument() missing required field(s)');
          return null;
        } else {
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .one('documents', document)
            .remove({}, header)
        }
      })
    }

    function getDocumentAnno(accountId, corpus, document) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus || !document) {
          $log.error('getDocumentAnno() missing required field(s)');
          return null;
        } else {
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .one('documents', document)
            .all('annotations')
            .getList({}, header)
        }
      })
    }

    function getDocumentState(accountId, corpus, document) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus || !document) {
          $log.error('getDocumentState() missing required field(s)');
          return null;
        } else {
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .one('documents', document)
            .all('processing_state')
            .getList({}, header)
        }
      })
    }

    function getRelatedConceptsDoc(accountId, corpus, document, optionParams) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus || !document) {
          $log.error('getRelatedConceptsDoc() missing required field(s)');
          return null;
        } else {
          optionParams = optionParams || {};
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .one('documents', document)
            .all('related_concepts')
            .getList(optionParams, header)
        }
      })
    }

    function getRelatedScoresDoc(accountId, corpus, document, concepts) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus || !document || !concepts) {
          $log.error('getRelatedScoresDoc() missing required field(s)');
          return null;
        } else {
          var params = {concepts: arrayToString(concepts)};
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .one('documents', document)
            .all('related_scores')
            .getList(params, header)
        }
      })
    }


    /**
     * tradeoff-analytics api method
     * apiName: tradeoff-analytics
     * */
    function postDilemmas(data, generate_visual) {
      return prepareHeader({
        apiName: tradeoff.apiName,
        type: tradeoff.type
      }).then(function (header) {
        if (!data) {
          $log.error('postDilemmas() missing required field(s)');
          return null;
        } else {
          generate_visual = generate_visual || true;
          var params = {'generate_visualization': generate_visual};
          header['content-type'] = 'application/json';
          return tradeoff
            .all('dilemmas')
            .post(data, params, header)
        }
      })
    }


    /**
     * Relationship extraction
     * */
    function postText(txt, isSpanish, rt) {
      return prepareHeader({
        apiName: relationship.apiName,
        type: relationship.type
      }).then(function (header) {
        if (!txt) {
          $log.error('postText missing required field(s)');
          return null;
        } else {
          var sid = isSpanish ? 'ie-es-news' : 'ie-en-news';
          rt = 'xml';
          var params = {
            sid: sid,
            txt: txt,
            rt: rt
          };
          return relationship
            .one('sire', 0)
            .post('', '', params, header)
        }
      })
    }


    /**
     * Natural Language Classifier
     * */
    function createClassifier(trainingDataFile, trainingMetaFile) {
      return prepareHeader({
        apiName: natural.apiName,
        type: natural.type
      }).then(function (header) {
        if (!trainingDataFile) {
          $log.error('createClassifier() missing required field(s)');
          return null;
        } else {
          var formData = new FormData();
          formData.append('training_data', trainingDataFile);
          formData.append('training_metadata', trainingMetaFile);
          return natural
            .all('classifiers')
            .post(formData, {}, header)
        }
      })
    }

    function getClassifiers(classifierId) {
      if (!classifierId) {
        return prepareHeader({
          apiName: natural.apiName,
          type: natural.type
        }).then(function (header) {
          return natural
            .all('classifiers')
            .getList({}, header)
        })
      } else {
        return prepareHeader({
          apiName: natural.apiName,
          type: natural.type
        }).then(function (header) {
          if (!classifierId) {
            $log('getClassifier() missing required field(s)');
            return null;
          } else {
            return natural
              .one('classifiers', classifierId)
              .get({}, header)
          }
        })
      }
    }

    function deleteClassifier(classifierId) {
      return prepareHeader({
        apiName: natural.apiName,
        type: natural.type
      }).then(function (header) {
        if (!classifierId) {
          $log('deleteClassifier() missing required field(s)');
          return null;
        } else {
          return natural
            .one('classifiers', classifierId)
            .remove({}, header)
        }
      })
    }

    function classify(classifierId, text) {
      return prepareHeader({
        apiName: natural.apiName,
        type: natural.type
      }).then(function (header) {
        if (!classifierId || !text) {
          $log('classify() missing required field(s)');
          return null;
        } else {
          return natural
            .one('classifiers', classifierId)
            .all('classify')
            .get({text: text}, header)
        }
      })
    }


    //Export
    return {
      conceptExpansion: {
        getPing: getPing,
        postUpload: postUpload,
        getStatus: getStatus,
        putResult: putResult
      },
      tradeOff: {
        postDilemmas: postDilemmas
      },
      dialog: {
        getDialogs: getDialogs,
        postDialog: postDialog,
        deleteDialog: deleteDialog,
        updateDialog: updateDialog,
        postConverse: postConverse,
        getConversation: getConversation,
        getProfile: getProfile
      },
      personality: {
        postProfile: postProfile
      },
      relationshipExtraction: {
        postText: postText
      },
      naturalLang: {
        createClassifier: createClassifier,
        getClassifiers: getClassifiers,
        deleteClassifier: deleteClassifier,
        classify: classify
      },
      conceptInsights: {
        getAccounts: getAccounts,
        getGraphs: getGraphs,
        searchConceptLabel: searchConceptLabel,
        getConcept: getConcept,
        getRelatedConcepts: getRelatedConcepts,
        getRelatedConceptsOf: getRelatedConceptsOf,
        getRelationScore: getRelationScore,
        postAnnoText: postAnnoText,

        createCorpus: createCorpus,
        getCorpora: getCorpora,
        getCorpus: getCorpus,
        updateCorpus: updateCorpus,
        deleteCorpus: deleteCorpus,
        getCorpusState: getCorpusState,
        searchDocLabel: searchDocLabel,
        getCorpusStatistics: getCorpusStatistics,
        getRelatedConceptCorpus: getRelatedConceptCorpus,
        getRelationScoresCorpus: getRelationScoresCorpus,
        searchConceptual: searchConceptual,

        createDocument: createDocument,
        getDocuments: getDocuments,
        getDocument: getDocument,
        updateDocument: updateDocument,
        deleteDocument: deleteDocument,
        getDocumentAnno: getDocumentAnno,
        getDocumentState: getDocumentState,
        getRelatedConceptsDoc: getRelatedConceptsDoc,
        getRelatedScoresDoc: getRelatedScoresDoc
      }
    };
  }
})();