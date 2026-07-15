import {Request,Response} from 'express';
import { injectable,inject } from 'inversify';
import { TaskProvider } from './task.provider.js';
import {PartialITaskWithId} from "./task.interface.js";
import {matchedData} from "express-validator";
import {ITask} from "./task.interface.js";

@injectable()
export class TaskController{
    constructor(@inject(TaskProvider) private taskProvider: TaskProvider){} 
    
    public async  createTask(req:Request,res:Response){
        try{
            const taskData: ITask = matchedData(req);
            const task = await this.taskProvider.createTask(taskData);
            res.status(201).json(task);

        }
        catch(error){  
            res.status(500).json({message:'Internal Server Error',error});     
}

}
public async getAllTasks(req:Request,res:Response):Promise<void>{
    try{
        const tasks = await this.taskProvider.getAllTasks();
        if(tasks.length===0){
            res.status(404).json({message:'No tasks found'});
        }
        res.status(200).json(tasks);
    }
    catch(error){
        res.status(500).json({message:'Internal Server Error',error});
    }
}
public async getTaskById(req:Request,res:Response):Promise<void>{
    try{
        const taskId:string =req.params.id?.toString() || '';
        if(!taskId){
        res.status(400).json({message:"this task is not vaild"})
        }
        const task=await this.taskProvider.getTaskById(taskId);
        if(!task){
            res.status(404).json({message:'Task not found'});
        }
        res.status(200).json(task);
         
    }
    catch(error){
        res.status(500).json({message:'Internal Server Error',error});
    }
}
public async updateTask(req:Request,res:Response):Promise<void>{
    try{
        const taskData:PartialITaskWithId=matchedData(req);
        if(!taskData._id){
            res.status(400).json({message:"this task is not vaild"})
        }
        const task=await this.taskProvider.updateTask(taskData);
        if(!task){
            res.status(404).json({message:'Task not found'});
        }
        res.status(200).json(task);
    }  
    catch(error){   
            res.status(500).json({message:'Internal Server Error',error});
    }
}} 




