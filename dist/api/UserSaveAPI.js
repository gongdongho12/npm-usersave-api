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
var basePath = "/user/save";
var UserSaveAPI = /** @class */ (function (_super) {
    __extends(UserSaveAPI, _super);
    function UserSaveAPI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getSaveListQuery = function (query) { return _this.getAxiosInstance()
            .get(basePath, {
            params: {
                key: query
            }
        })
            .then(function (res) {
            var data = res.data;
            console.log("getSaveListQuery data", data);
            return data;
        }); };
        _this.addUserSave = function (data) { return _this.getAxiosInstance().post(basePath, data).then(function (res) {
            var data = res.data;
            console.log("addUserSave data", data);
            return data;
        }); };
        _this.editUserSave = function (id, data) { return _this.getAxiosInstance()
            .put("".concat(basePath, "/").concat(id), data)
            .then(function (res) {
            var data = res.data;
            console.log("editUserSave data", data);
            return data;
        }); };
        _this.deleteUserSave = function (id) { return _this.getAxiosInstance()
            .delete("".concat(basePath, "/").concat(id))
            .then(function (res) {
            var data = res.data;
            console.log("deleteUserSave data", data);
            return data;
        }); };
        return _this;
    }
    return UserSaveAPI;
}(UserAPI_1.default));
exports.default = UserSaveAPI;
