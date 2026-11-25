import Task from "./task.model.js";
import {ITask,PartialITaskWithId,filteringOptions,PaginatedTasks} from "./task.interface.js";
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
    public async getAllTasks(options:filteringOptions):Promise<PaginatedTasks>{
        const {limit,page,order,status,priority}=options;
        const filter={
            ...(status&&{status}),
            ...(priority&&{priority}),
        };
        const skip=(options.page-1)*options.limit;


        const [tasks,totalTasks]=await Promise.all([
            this.taskModel.find(filter).skip(skip).limit(options.limit),
            this.taskModel.countDocuments(filter)
        ]);
        const totalPages=Math.ceil(totalTasks/options.limit);
        return {tasks,totalTasks,currentPage:page,totalPages,limit};
        
        
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