import { injectable ,inject} from "inversify";
import { TaskService } from "./task.service.js";
import { ITask, PartialITaskWithId,filteringOptions ,PaginatedTasks} from "./task.interface.js";



@injectable()

export class TaskProvider{
    constructor(@inject(TaskService) private taskService: TaskService){}
    public async createTask(taskData: ITask): Promise<ITask> {
        const task = await this.taskService.createTask(taskData);
        return task;
    }
    public async getAllTasks(options:filteringOptions)
    :Promise<PaginatedTasks>{
        const paginatedTasks=await this.taskService.getAllTasks(options);
        return paginatedTasks;
    }
    public async getTaskById(taskId:string):Promise<ITask | null>{
        const task=await this.taskService.getTaskById(taskId);
        return task;
    }
    public async updateTask(taskDate:PartialITaskWithId):Promise<ITask | null>{
        const task=await this.taskService.updateTask(taskDate);
        return task;
    }
    


}