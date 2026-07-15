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
import { injectable, inject } from "inversify";
import { TaskService } from "./task.service.js";
let TaskProvider = class TaskProvider {
    taskService;
    constructor(taskService) {
        this.taskService = taskService;
    }
    async createTask(taskData) {
        const task = await this.taskService.createTask(taskData);
        return task;
    }
    async getAllTasks() {
        const tasks = await this.taskService.getAllTasks();
        return tasks;
    }
    async getTaskById(taskId) {
        const task = await this.taskService.getTaskById(taskId);
        return task;
    }
    async updateTask(taskDate) {
        const task = await this.taskService.updateTask(taskDate);
        return task;
    }
};
TaskProvider = __decorate([
    injectable(),
    __param(0, inject(TaskService)),
    __metadata("design:paramtypes", [TaskService])
], TaskProvider);
export { TaskProvider };
