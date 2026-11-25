import { HydratedDocument } from "mongoose";

export interface ITask{
    title:string;
    description:string;
    status:'todo'|'inprogress'|'completed';
    priority:'low'|'medium'|'high';
    dueDate:Date;
}
export interface PartialITaskWithId extends Partial<ITask>{
    _id:string;
}
export interface filteringOptions {
        limit:number;
        page:number;
        order:'desc'|'asc';
        status?:"todo"|"inprogress"|"completed";
        priority?:"low"|"medium"|"high";
    }
export interface PaginatedTasks{
        tasks:HydratedDocument<ITask>[];
        totalTasks:number;
        currentPage:number;
        totalPages:number;
        limit:number;
    };


