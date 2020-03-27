"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var carbonldp_1 = require("carbonldp");
// The settings object
var settings = {
    host: "localhost",
    port: 8083,
    ssl: false,
    vocabulary: "http://schema.org/"
};
// initialize your Carbon object with the domain where your platform lives
exports.carbonldp = new carbonldp_1.CarbonLDP(settings);
