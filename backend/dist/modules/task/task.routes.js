var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Router } from "express";
import { TaskController } from "./task.controller.js";
import { createTaskValidator } from "./validation/createTask.Validator.js";
import { updateTaskValidator } from "./validation/updateTask.Validator.js";
import { getTaskByIdValidator } from "./validation/getTaskById.vaildator.js";
import { getAllTasksValidator } from "./validation/getAlltasks.validate.js";
import { validate } from "../../middleware/validate.middleware.js";
import { inject } from "inversify";
let TaskRoutes = class TaskRoutes {
    taskController;
    router;
    constructor(taskController) {
        this.taskController = taskController;
        this.router = Router();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post('/create-task', validate, createTaskValidator, this.taskController.createTask.bind(this.taskController));
        this.router.get('/get-tasks', validate, getAllTasksValidator, this.taskController.getAllTasks.bind(this.taskController));
        this.router.get('/get-tasks/:id', validate, getTaskByIdValidator, this.taskController.getTaskById.bind(this.taskController));
        this.router.put('/update-tasks', validate, updateTaskValidator, this.taskController.updateTask.bind(this.taskController));
    }
};
TaskRoutes = __decorate([
    __param(0, inject(TaskController)),
    __metadata("design:paramtypes", [TaskController])
], TaskRoutes);
export { TaskRoutes };
