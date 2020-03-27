"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CarbonLDPConfiguration_1 = require("../config/CarbonLDPConfiguration");
// ... initialize your CarbonLDP object
var task1 = {
    name: "hoasd",
    dueDate: new Date("2016-04-02")
};
var task2 = {
    name: "Task 2",
    dueDate: new Date("2016-04-08")
};
var project = {
    name: "Project X",
    tasks: [
        task1,
        task2
    ]
};
CarbonLDPConfiguration_1.carbonldp.documents.$create("/", project).then(function (projectDocument) {
    console.log(project === projectDocument); // true
    console.log(project.$id); // document's URI
}).catch(function (error) { return console.error(error); });
