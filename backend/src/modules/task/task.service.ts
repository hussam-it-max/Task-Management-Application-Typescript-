import Task from "./task.model.js";
import {ITask,PartialITaskWithId} from "./task.interface.js";
import {Model} from "mongoose";
import {injectable} from "inversify";
import {HydratedDocument} from "mongoose";



@injectable()
export class TaskService{
    private taskModel: Model<ITask>=Task;
    public async createTask(taskDate:ITask):Promise< HydratedDocument<ITask>>{
        const task=await new this.taskModel(taskDate).save();
        return task;
    }
    public async getAllTasks():Promise<HydratedDocument<ITask>[] >{
        const tasks=await this.taskModel.find();
        return tasks;
    }
    public async getTaskById(taskId:string):Promise<HydratedDocument<ITask> | null>{
        const task=await this.taskModel.findById(taskId);
        return task;
    }
    public async updateTask(taskDate:PartialITaskWithId):Promise<HydratedDocument<ITask> | null>{
        const task=await this.taskModel.findByIdAndUpdate(taskDate._id, taskDate, { new: true });
        return task;
    }



}