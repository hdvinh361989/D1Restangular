/**
 * Created by vinhhoang on 31/10/2015.
 */
(function () {
    angular
        .module('rectangular.apimanager')
        .factory('Semantriaapi', Semantriaapi);

    Semantriaapi.$inject = ['RectHelper', 'Restangular'];

    function Semantriaapi(RectHelper, Restangular){
        if(!RectHelper.semantria.consumerKey || !RectHelper.semantria.consumerMd5Secret) {
            throw "ConsumerKey and ConsumerSecret should be specified in order to use SDK";
        }

        /**
         * Var MD5
         * */
        var MD5 = (function() {
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
            function rhex(num)
            {
                str = "";
                for(j = 0; j <= 3; j++)
                    str += hex_chr.charAt((num >> (j * 8 + 4)) & 0x0F) +
                        hex_chr.charAt((num >> (j * 8)) & 0x0F);
                return str;
            }

            /*
             * Convert a string to a sequence of 16-word blocks, stored as an array.
             * Append padding bits and the length, as described in the MD5 standard.
             */
            function str2blks_MD5(str)
            {
                nblk = ((str.length + 8) >> 6) + 1;
                blks = new Array(nblk * 16);
                for(i = 0; i < nblk * 16; i++) blks[i] = 0;
                for(i = 0; i < str.length; i++)
                    blks[i >> 2] |= str.charCodeAt(i) << ((i % 4) * 8);
                blks[i >> 2] |= 0x80 << ((i % 4) * 8);
                blks[nblk * 16 - 2] = str.length * 8;
                return blks;
            }

            /*
             * Add integers, wrapping at 2^32. This uses 16-bit operations internally
             * to work around bugs in some JS interpreters.
             */
            function add(x, y)
            {
                var lsw = (x & 0xFFFF) + (y & 0xFFFF);
                var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
                return (msw << 16) | (lsw & 0xFFFF);
            }

            /*
             * Bitwise rotate a 32-bit number to the left
             */
            function rol(num, cnt)
            {
                return (num << cnt) | (num >>> (32 - cnt));
            }

            /*
             * These functions implement the basic operation for each round of the
             * algorithm.
             */
            function cmn(q, a, b, x, s, t)
            {
                return add(rol(add(add(a, q), add(x, t)), s), b);
            }
            function ff(a, b, c, d, x, s, t)
            {
                return cmn((b & c) | ((~b) & d), a, b, x, s, t);
            }
            function gg(a, b, c, d, x, s, t)
            {
                return cmn((b & d) | (c & (~d)), a, b, x, s, t);
            }
            function hh(a, b, c, d, x, s, t)
            {
                return cmn(b ^ c ^ d, a, b, x, s, t);
            }
            function ii(a, b, c, d, x, s, t)
            {
                return cmn(c ^ (b | (~d)), a, b, x, s, t);
            }

            /*
             * Take a string and return the hex representation of its MD5.
             */
            function calcMD5(str)
            {
                x = str2blks_MD5(str);
                a =  1732584193;
                b = -271733879;
                c = -1732584194;
                d =  271733878;

                for(i = 0; i < x.length; i += 16)
                {
                    olda = a;
                    oldb = b;
                    oldc = c;
                    oldd = d;

                    a = ff(a, b, c, d, x[i+ 0], 7 , -680876936);
                    d = ff(d, a, b, c, x[i+ 1], 12, -389564586);
                    c = ff(c, d, a, b, x[i+ 2], 17,  606105819);
                    b = ff(b, c, d, a, x[i+ 3], 22, -1044525330);
                    a = ff(a, b, c, d, x[i+ 4], 7 , -176418897);
                    d = ff(d, a, b, c, x[i+ 5], 12,  1200080426);
                    c = ff(c, d, a, b, x[i+ 6], 17, -1473231341);
                    b = ff(b, c, d, a, x[i+ 7], 22, -45705983);
                    a = ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
                    d = ff(d, a, b, c, x[i+ 9], 12, -1958414417);
                    c = ff(c, d, a, b, x[i+10], 17, -42063);
                    b = ff(b, c, d, a, x[i+11], 22, -1990404162);
                    a = ff(a, b, c, d, x[i+12], 7 ,  1804603682);
                    d = ff(d, a, b, c, x[i+13], 12, -40341101);
                    c = ff(c, d, a, b, x[i+14], 17, -1502002290);
                    b = ff(b, c, d, a, x[i+15], 22,  1236535329);

                    a = gg(a, b, c, d, x[i+ 1], 5 , -165796510);
                    d = gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
                    c = gg(c, d, a, b, x[i+11], 14,  643717713);
                    b = gg(b, c, d, a, x[i+ 0], 20, -373897302);
                    a = gg(a, b, c, d, x[i+ 5], 5 , -701558691);
                    d = gg(d, a, b, c, x[i+10], 9 ,  38016083);
                    c = gg(c, d, a, b, x[i+15], 14, -660478335);
                    b = gg(b, c, d, a, x[i+ 4], 20, -405537848);
                    a = gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
                    d = gg(d, a, b, c, x[i+14], 9 , -1019803690);
                    c = gg(c, d, a, b, x[i+ 3], 14, -187363961);
                    b = gg(b, c, d, a, x[i+ 8], 20,  1163531501);
                    a = gg(a, b, c, d, x[i+13], 5 , -1444681467);
                    d = gg(d, a, b, c, x[i+ 2], 9 , -51403784);
                    c = gg(c, d, a, b, x[i+ 7], 14,  1735328473);
                    b = gg(b, c, d, a, x[i+12], 20, -1926607734);

                    a = hh(a, b, c, d, x[i+ 5], 4 , -378558);
                    d = hh(d, a, b, c, x[i+ 8], 11, -2022574463);
                    c = hh(c, d, a, b, x[i+11], 16,  1839030562);
                    b = hh(b, c, d, a, x[i+14], 23, -35309556);
                    a = hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
                    d = hh(d, a, b, c, x[i+ 4], 11,  1272893353);
                    c = hh(c, d, a, b, x[i+ 7], 16, -155497632);
                    b = hh(b, c, d, a, x[i+10], 23, -1094730640);
                    a = hh(a, b, c, d, x[i+13], 4 ,  681279174);
                    d = hh(d, a, b, c, x[i+ 0], 11, -358537222);
                    c = hh(c, d, a, b, x[i+ 3], 16, -722521979);
                    b = hh(b, c, d, a, x[i+ 6], 23,  76029189);
                    a = hh(a, b, c, d, x[i+ 9], 4 , -640364487);
                    d = hh(d, a, b, c, x[i+12], 11, -421815835);
                    c = hh(c, d, a, b, x[i+15], 16,  530742520);
                    b = hh(b, c, d, a, x[i+ 2], 23, -995338651);

                    a = ii(a, b, c, d, x[i+ 0], 6 , -198630844);
                    d = ii(d, a, b, c, x[i+ 7], 10,  1126891415);
                    c = ii(c, d, a, b, x[i+14], 15, -1416354905);
                    b = ii(b, c, d, a, x[i+ 5], 21, -57434055);
                    a = ii(a, b, c, d, x[i+12], 6 ,  1700485571);
                    d = ii(d, a, b, c, x[i+ 3], 10, -1894986606);
                    c = ii(c, d, a, b, x[i+10], 15, -1051523);
                    b = ii(b, c, d, a, x[i+ 1], 21, -2054922799);
                    a = ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
                    d = ii(d, a, b, c, x[i+15], 10, -30611744);
                    c = ii(c, d, a, b, x[i+ 6], 15, -1560198380);
                    b = ii(b, c, d, a, x[i+13], 21,  1309151649);
                    a = ii(a, b, c, d, x[i+ 4], 6 , -145523070);
                    d = ii(d, a, b, c, x[i+11], 10, -1120210379);
                    c = ii(c, d, a, b, x[i+ 2], 15,  718787259);
                    b = ii(b, c, d, a, x[i+ 9], 21, -343485551);

                    a = add(a, olda);
                    b = add(b, oldb);
                    c = add(c, oldc);
                    d = add(d, oldd);
                }

                return rhex(a) + rhex(b) + rhex(c) + rhex(d);
            }

            return {
                getHash: function(source) {
                    return calcMD5(source);
                }
            }
        })();


        /**
         * Ultil
         * */
        var Utils = {
            HEX: "0123456789ABCDEF",

            encodeUtf8: function(s) {
                return Utils.unescapeUtf8(encodeURIComponent(s));
            },

            decodeUtf8: function(s) {
                return decodeURIComponent(Utils.escapeUtf8(s));
            },

            nibbleToHex: function(nibble) {
                return Utils.HEX.charAt(nibble);
            },

            escapeUtf8: function(str) {
                return str.replace(/[^*+.-9A-Z_a-z-]/g, function(s) {
                    var c = s.charCodeAt(0);
                    return (c<16?"%0"+c.toString(16):c<128?"%"+c.toString(16):c<2048?"%"+(c>>6|192).toString(16)+"%"+(c&63|128).toString(16):"%"+(c>>12|224).toString(16)+"%"+(c>>6&63|128).toString(16)+"%"+(c&63|128).toString(16)).toUpperCase()
                });
            },

            unescapeUtf8: function(str) {
                return str.replace(/%(E(0%[AB]|[1-CEF]%[89AB]|D%[89])[0-9A-F]|C[2-9A-F]|D[0-9A-F])%[89AB][0-9A-F]|%[0-7][0-9A-F]/ig, function(s) {
                    var c = parseInt(s.substring(1), 16);
                    return String.fromCharCode(c<128?c:c<224?(c&31)<<6|parseInt(s.substring(4),16)&63:((c&15)<<6|parseInt(s.substring(4),16)&63)<<6|parseInt(s.substring(7),16)&63)
                });
            },

            base64: function(wordArray) {
                // Shortcuts
                var words = wordArray.words;
                var sigBytes = wordArray.sigBytes;
                var map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

                // Clamp excess bits
                wordArray.clamp();

                // Convert
                var base64Chars = [];
                for (var i = 0; i < sigBytes; i += 3) {
                    var byte1 = (words[i >>> 2]	   >>> (24 - (i % 4) * 8))	   & 0xff;
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

            getHmacSha1: function(key, message) {
                return Utils.base64(CryptoJS.HmacSHA1(message, key));
            },


            /**
             * Function returns string in ?q1=v1&q2=v2 format
             * from passed config key-value pairs
             *
             * @param {Object} config
             * @returns {undefined}
             */
            createQueryStringFromConfig: function(config) {
                if(!config) {
                    return "";
                }

                var result = [];

                for(var key in config) {
                    if(typeof config[key] == "undefined") {
                        continue;
                    }

                    result.push(key + "=" + config[key]);
                }

                if(result.length > 0) {
                    return "?" + result.join("&");
                }

                return "";
            }
        };

        /**
         * Request Class
         * */
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
            generateTimestamp: function() {
                return (new Date()).getTime();
            },

            /**
             * @param {Number} timestamp
             * @param {Number} nonce
             * @returns {String}
             */
            getNormalizedParameters: function(timestamp, nonce) {
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
            generateQuery: function(method, url, timestamp, nonce) {
                var queryStr = this.getNormalizedParameters(timestamp, nonce);

                if (url.indexOf("?") != -1) {
                    return url + '&' + queryStr.substring(1);
                }

                return url += queryStr;
            },

            generateAuthHeader: function(query, timestamp, nonce) {
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

            getRequestHeaders: function(method, nonce, timestamp, query) {
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

            runRequest: function(method, url, headers, postData) {
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
                return semantriaAPI.customOperation(method.toLowerCase(),null, null, headers, postData);
            },

            authWebRequest: function(method, url, postData) {
                var nonce = this.generateNonce(),
                    timestamp = this.generateTimestamp(),
                    query = this.generateQuery(method, url, timestamp, nonce),
                    headers = this.getRequestHeaders(method, nonce, timestamp, query);

                return this.runRequest(method, query, headers, postData);
            }
        };

        var exports = {
            acceptEncoding: RectHelper.semantria.config.useCompression ? 'gzip, deflate' : 'identity',
            applicationName: (function () {
                var appName = RectHelper.semantria.config.applicationName ? (RectHelper.semantria.config.applicationName + "/") : "";
                appName += tpl("JavaScript/{SDK_VERSION}/{format}", {
                    SDK_VERSION: RectHelper.semantria.config.sdkVersion,
                    format: RectHelper.semantria.config.format
                });
            })(),

            /**
             * @var {Object} eventHandlers
             */
            eventHandlers: {
                onRequest: emptyFunc,
                onResponse: emptyFunc
            },

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
            runRequest: runRequest,

            /**
             * @param {String} method
             * @param {Number} status
             * @param {String} reason
             * @param {String} message
             * @param {Object} response
             * @returns {Number|Object}
             */
            processResponse: processResponse
        };
        return exports;

        function emptyFunc(){}

        /**
        * Implement functions
        * */
        function tpl(string, config) {
            return string.replace(/{([^{]*)}/g, function(fm, im) {
                return config[im];
            });
        }

        function override(key, value) {
            if(arguments.length == 1) {
                for(var k in key) {
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
                RectHelper.semantria.consumerKey,
                RectHelper.semantria.consumerMd5Secret,
                exports.applicationName,
                exports.acceptEncoding,
                RectHelper.semantria.config.xApiVersion
            );

            if (config.postParams) {
                config.postParams = serialize(config.postParams);
            }

            exports.eventHandlers.onRequest({
                method: method,
                url: url,
                message: config.postParams
            });

            var response = request.authWebRequest(method, url, config.postParams);

            exports.eventHandlers.onResponse(response);

            return processResponse(method, response);
        }

        function processResponse(method, response) {
            /*//Declare promise
             var deferred = $q.defer();

             method = method.toLowerCase();

             if(method == "delete") {
             if (status === 202) {
             deferred.resolve(status);
             }

             deferred.reject({
             status: status,
             message: message,
             response: response
             });
             } else {
             if (status == 200) {
             deferred.resolve(deserialize(message));
             }

             if (status == 202) {
             deferred.resolve(status);
             }

             deferred.reject({
             status: status,
             message: message,
             response: response
             });
             }*/

            return response;
        }
    }
})();