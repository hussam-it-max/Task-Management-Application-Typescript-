var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Task from "./task.model.js";
import { injectable } from "inversify";
let TaskService = class TaskService {
    taskModel = Task;
    async createTask(taskDate) {
        const task = await new this.taskModel(taskDate).save();
        return task;
    }
    async getAllTasks() {
        const tasks = await this.taskModel.find();
        return tasks;
    }
    async getTaskById(taskId) {
        const task = await this.taskModel.findById(taskId);
        return task;
    }
    async updateTask(taskDate) {
        const task = await this.taskModel.findByIdAndUpdate(taskDate._id, taskDate, { new: true });
        return task;
    }
};
TaskService = __decorate([
    injectable()
], TaskService);
export { TaskService };
