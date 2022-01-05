"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var localConfig = {
    baseURL: 'http://localhost:5000',
    timeout: 2500,
    headers: { 'Content-Type': 'application/json' }
};
var devConfig = {
    baseURL: 'http://localhost:5000',
    timeout: 2500,
    headers: { 'Content-Type': 'application/json' }
};
var prodConfig = {
    baseURL: 'http://localhost:5000',
    timeout: 2500,
    headers: { 'Content-Type': 'application/json' }
};
exports.default = {
    localConfig: localConfig,
    devConfig: devConfig,
    prodConfig: prodConfig
};
