import {Model,model,Schema} from 'mongoose';
import {ITask} from  "./task.interface.js"

const taskSchema: Schema<ITask>=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true   },
        status:{
            type:String,
            enum:['todo','inProgress','completed'],
            default:'todo'
        },
        priority:{
            type:String,
            enum:['low','medium','high'],
            default:'medium'
        },
        dueDate:{
            type:Date,
            required:[true,'Due date is required']
        }

},
{timestamps:true}
);  

const Task:Model<ITask>=model('Task',taskSchema);
export default Task;