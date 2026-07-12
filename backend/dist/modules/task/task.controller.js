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
import { injectable, inject } from 'inversify';
import { TaskProvider } from './task.provider.js';
import { matchedData } from "express-validator";
let TaskController = class TaskController {
    taskProvider;
    constructor(taskProvider) {
        this.taskProvider = taskProvider;
    }
    async createTask(req, res) {
        try {
            const taskData = matchedData(req);
            const task = await this.taskProvider.createTask(taskData);
            res.status(201).json(task);
        }
        catch (error) {
            res.status(500).json({ message: 'Internal Server Error', error });
        }
    }
    async getAllTasks(req, res) {
        try {
            const tasks = await this.taskProvider.getAllTasks();
            if (tasks.length === 0) {
                res.status(404).json({ message: 'No tasks found' });
            }
            res.status(200).json(tasks);
        }
        catch (error) {
            res.status(500).json({ message: 'Internal Server Error', error });
        }
    }
    async getTaskById(req, res) {
        try {
            const taskId = req.params.id?.toString() || '';
            if (!taskId) {
                res.status(400).json({ message: "this task is not vaild" });
            }
            const task = await this.taskProvider.getTaskById(taskId);
            if (!task) {
                res.status(404).json({ message: 'Task not found' });
            }
            res.status(200).json(task);
        }
        catch (error) {
            res.status(500).json({ message: 'Internal Server Error', error });
        }
    }
    async updateTask(req, res) {
        try {
            const taskData = matchedData(req);
            if (!taskData._id) {
                res.status(400).json({ message: "this task is not vaild" });
            }
            const task = await this.taskProvider.updateTask(taskData);
            if (!task) {
                res.status(404).json({ message: 'Task not found' });
            }
            res.status(200).json(task);
        }
        catch (error) {
            res.status(500).json({ message: 'Internal Server Error', error });
        }
    }
};
TaskController = __decorate([
    injectable(),
    __param(0, inject(TaskProvider)),
    __metadata("design:paramtypes", [TaskProvider])
], TaskController);
export { TaskController };
