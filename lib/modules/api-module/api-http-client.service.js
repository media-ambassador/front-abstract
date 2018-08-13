"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var api_common_model_1 = require("./api-common.model");
var MaApiHttpClient = /** @class */ (function () {
    // Extending the HttpClient through the Angular DI.
    function MaApiHttpClient(config, http) {
        this.config = config;
        this.http = http;
        this.api = this.config.api;
    }
    /**
     * GET request
     * @param {string} endPoint it doesn't need / in front of the end point
     * @param {RequestOptions} options options of the request like headers, body, etc.
     * @returns {Observable<T>}
     */
    /**
       * GET request
       * @param {string} endPoint it doesn't need / in front of the end point
       * @param {RequestOptions} options options of the request like headers, body, etc.
       * @returns {Observable<T>}
       */
    MaApiHttpClient.prototype.get = /**
       * GET request
       * @param {string} endPoint it doesn't need / in front of the end point
       * @param {RequestOptions} options options of the request like headers, body, etc.
       * @returns {Observable<T>}
       */
    function (endPoint, options) {
        return this.http.get(this.api + endPoint, options);
    };
    /**
     * POST request
     * @param {string} endPoint end point of the api
     * @param {Object} params body of the request.
     * @param {RequestOptions} options options of the request like headers, body, etc.
     * @returns {Observable<T>}
     */
    /**
       * POST request
       * @param {string} endPoint end point of the api
       * @param {Object} params body of the request.
       * @param {RequestOptions} options options of the request like headers, body, etc.
       * @returns {Observable<T>}
       */
    MaApiHttpClient.prototype.post = /**
       * POST request
       * @param {string} endPoint end point of the api
       * @param {Object} params body of the request.
       * @param {RequestOptions} options options of the request like headers, body, etc.
       * @returns {Observable<T>}
       */
    function (endPoint, params, options) {
        return this.http.post(this.api + endPoint, params, options);
    };
    /**
     * PUT request
     * @param {string} endPoint end point of the api
     * @param {Object} params body of the request.
     * @param {RequestOptions} options options of the request like headers, body, etc.
     * @returns {Observable<T>}
     */
    /**
       * PUT request
       * @param {string} endPoint end point of the api
       * @param {Object} params body of the request.
       * @param {RequestOptions} options options of the request like headers, body, etc.
       * @returns {Observable<T>}
       */
    MaApiHttpClient.prototype.put = /**
       * PUT request
       * @param {string} endPoint end point of the api
       * @param {Object} params body of the request.
       * @param {RequestOptions} options options of the request like headers, body, etc.
       * @returns {Observable<T>}
       */
    function (endPoint, params, options) {
        return this.http.put(this.api + endPoint, params, options);
    };
    /**
     * DELETE request
     * @param {string} endPoint end point of the api
     * @param {RequestOptions} options options of the request like headers, body, etc.
     * @returns {Observable<T>}
     */
    /**
       * DELETE request
       * @param {string} endPoint end point of the api
       * @param {RequestOptions} options options of the request like headers, body, etc.
       * @returns {Observable<T>}
       */
    MaApiHttpClient.prototype.delete = /**
       * DELETE request
       * @param {string} endPoint end point of the api
       * @param {RequestOptions} options options of the request like headers, body, etc.
       * @returns {Observable<T>}
       */
    function (endPoint, options) {
        return this.http.delete(this.api + endPoint, options);
    };
    MaApiHttpClient.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaApiHttpClient.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core_1.Inject, args: [api_common_model_1.MaApiModuleConfigKey,] },] },
        { type: http_1.HttpClient, },
    ]; };
    return MaApiHttpClient;
}());
exports.MaApiHttpClient = MaApiHttpClient;
function MaApiHttpClientCreator(config, http) {
    return new MaApiHttpClient(config, http);
}
exports.MaApiHttpClientCreator = MaApiHttpClientCreator;
//# sourceMappingURL=api-http-client.service.js.map