"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Project = /** @class */ (function () {
    function Project(name, tasks) {
        this.name = name;
        this.tasks = tasks;
    }
    return Project;
}());
exports.Project = Project;
var Task = /** @class */ (function () {
    function Task(name, dueDate) {
        this.name = name;
        this.dueDate = dueDate;
    }
    return Task;
}());
exports.Task = Task;
