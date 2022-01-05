"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UserAPI_1 = __importDefault(require("api/UserAPI"));
var UserSaveAPI = /** @class */ (function (_super) {
    __extends(UserSaveAPI, _super);
    function UserSaveAPI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.login = function (email, password) { return _this.getAxiosInstance()
            .post("/auth/sign-in", {
            id: email,
            password: password,
        })
            .then(function (res) {
            var data = res.data;
            console.log("login data", data);
            return data;
        }); };
        _this.getAccount = function () { return _this.getAxiosInstance().get("/user").then(function (res) {
            var data = res.data;
            console.log("account data", data);
            return data;
        }); };
        _this.register = function (account) { return _this.getAxiosInstance()
            .put("/auth/signup", account)
            .then(function (res) {
            var data = res.data;
            console.log("register data", data);
            return data;
        }); };
        return _this;
    }
    return UserSaveAPI;
}(UserAPI_1.default));
exports.default = UserSaveAPI;
