"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visitorCode = exports.featureKey = exports.siteCode = void 0;
const javascript_sdk_1 = require("@kameleoon/javascript-sdk");
// -- Constants values
exports.siteCode = "44r9jgmatl";
exports.featureKey = "demo_web_feature_flag";
exports.visitorCode = javascript_sdk_1.KameleoonUtils.getVisitorCode("www.example.com");
