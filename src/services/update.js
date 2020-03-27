"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CarbonLDPConfiguration_1 = require("../config/CarbonLDPConfiguration");
var project;
// ID of the Carbon LDP document you want to retrieve
var projectID = "http://localhost:8083/47293a45-ebde-432c-988b-2938db44e186/";
// 1) Retrieve the document
CarbonLDPConfiguration_1.carbonldp.documents.$get(projectID)
    .then(function (retrievedProject) {
    // 2) Modify the document
    retrievedProject.name = "Project's New Name";
    retrievedProject.tasks.push({
        name: "Task 3",
        dueDate: new Date("2040-05-02")
    });
    project = retrievedProject;
    // 3) Save the changes
    return retrievedProject.$save();
})
    .then(function (savedProject) {
    console.log(savedProject === project); // true
    return savedProject.$refresh();
})
    .then(function (refreshedProject) {
    console.log(refreshedProject === project); // true
    // Continue doing stuff...
})
    .catch(function (error) { return console.error(error); });
