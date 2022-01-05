"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var axios_auth_refresh_1 = __importDefault(require("axios-auth-refresh"));
var meta_1 = require("meta");
var es6_promise_1 = require("es6-promise");
var localConfig = meta_1.apiMeta.localConfig, devConfig = meta_1.apiMeta.devConfig, prodConfig = meta_1.apiMeta.prodConfig;
var UserAPI = /** @class */ (function () {
    function UserAPI(type) {
        var config;
        switch (type) {
            case 'dev':
                config = devConfig;
            case 'local':
                config = localConfig;
                break;
            case 'prod':
            default:
                config = prodConfig;
                break;
        }
        this.axiosInstance = axios_1.default.create(config);
        this.axiosInstance.interceptors.request.use(function (request) {
            try {
                var token = getAccessToken();
                if (token) {
                    request.headers["Authorization"] = "Bearer ".concat(token);
                }
            }
            catch (e) { }
            return request;
        });
        var getAccessToken = function () { return localStorage.getItem("jwt"); };
        var refreshAuthLogic = function (failedRequest) {
            localStorage.removeItem("jwt");
            return es6_promise_1.Promise.resolve();
        };
        (0, axios_auth_refresh_1.default)(this.axiosInstance, refreshAuthLogic, {
            statusCodes: [401, 500],
            retryInstance: this.axiosInstance,
        });
    }
    UserAPI.prototype.getAxiosInstance = function () {
        return this.axiosInstance;
    };
    return UserAPI;
}());
exports.default = UserAPI;
