"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleType = void 0;
var RoleType;
(function (RoleType) {
    RoleType["ROLE_USER"] = "ROLE_USER";
    RoleType["ROLE_ADMIN"] = "ROLE_ADMIN";
    RoleType["ROLE_FRIDAY"] = "ROLE_FRIDAY";
})(RoleType = exports.RoleType || (exports.RoleType = {}));
var accountMeta = {
    ROLE_TYPE: {
        user: RoleType.ROLE_USER,
        admin: RoleType.ROLE_ADMIN,
        friday: RoleType.ROLE_FRIDAY
    }
};
exports.default = accountMeta;
