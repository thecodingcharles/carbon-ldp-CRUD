"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CarbonLDPConfiguration_1 = require("../config/CarbonLDPConfiguration");
// ... initialize your CarbonLDP object
// ID of the Carbon LDP document you want to delete
var projectID = "http://localhost:8083/47293a45-ebde-432c-988b-2938db44e186/";
CarbonLDPConfiguration_1.carbonldp.documents.$delete(projectID)
    .then(function () {
    // continue doing stuff...
    console.log("deleted");
})
    .catch(function (error) { return console.error(error); });
