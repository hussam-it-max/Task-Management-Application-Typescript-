import { Router ,Request,Response} from "express";
import { TaskController } from "./task.controller.js";
import {createTaskValidator} from "./validation/createTask.Validator.js";
import {updateTaskValidator} from "./validation/updateTask.Validator.js";
import {getTaskByIdValidator} from "./validation/getTaskById.vaildator.js";
import {getAllTasksValidator} from "./validation/getAlltasks.validate.js";
import { validate } from "../../middleware/validate.middleware.js";
import { inject ,injectable} from "inversify";
@injectable()
export class TaskRoutes{
    public router: Router;
    constructor(@inject(TaskController) private taskController: TaskController){
        this.router = Router();
        this.initializeRoutes();
    }
    private initializeRoutes():void{
        this.router.post('/create-task',createTaskValidator,validate,this.taskController.createTask.bind(this.taskController));
        this.router.get('/get-tasks',getAllTasksValidator,validate,this.taskController.getAllTasks.bind(this.taskController));
        this.router.get('/get-tasks/:id',getTaskByIdValidator,validate,this.taskController.getTaskById.bind(this.taskController));
        this.router.put('/update-tasks',updateTaskValidator,validate,this.taskController.updateTask.bind(this.taskController));

       
           
 



      

        
    }
}