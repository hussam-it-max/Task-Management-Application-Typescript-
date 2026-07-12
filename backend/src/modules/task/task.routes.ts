import { Router ,Request,Response} from "express";
import { TaskController } from "./task.controller.js";
import {createTaskValidator} from "./validation/createTask.Validator.js";
import {updateTaskValidator} from "./validation/updateTask.Validator.js";
import {getTaskByIdValidator} from "./validation/getTaskById.vaildator.js";
import {getAllTasksValidator} from "./validation/getAlltasks.validate.js";
import { validate } from "../../middleware/validate.middleware.js";
import { inject } from "inversify";
export class TaskRoutes{
    public router: Router;
    constructor(@inject(TaskController) private taskController: TaskController){
        this.router = Router();
        this.initializeRoutes();
    }
    private initializeRoutes():void{
        this.router.post('/create-task',validate,createTaskValidator,this.taskController.createTask.bind(this.taskController));
        this.router.get('/get-tasks',validate,getAllTasksValidator,this.taskController.getAllTasks.bind(this.taskController));
        this.router.get('/get-tasks/:id',validate,getTaskByIdValidator,this.taskController.getTaskById.bind(this.taskController));
        this.router.put('/update-tasks',validate,updateTaskValidator,this.taskController.updateTask.bind(this.taskController));

       
        
 



      

        
    }
}