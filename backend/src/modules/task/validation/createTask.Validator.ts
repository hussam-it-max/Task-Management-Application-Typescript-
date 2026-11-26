import {checkSchema} from "express-validator";
export const createTaskValidator=checkSchema({
    title:{
        in:["body"],
        isString:{errorMessage:"Title must be a string",bail:true},
        trim:true,
        notEmpty:{ errorMessage: "Title is required" },
        isLength:{
            options:{max:100},
            errorMessage:"title should be max 100 chars",
        },
    },
    description:{
        in:["body"],
        isString:{errorMessage:"Title must be a string",bail:true},
        trim:true,
        notEmpty:{errorMessage:"Description  must be a string",bail:true},      
    },
    status:{
        in:["body"],
        optional:true,
        isIn:{
            options:[["todo","inProgress","completed"]],
            errorMessage: "Status must be one of: todo, inProgress, completed",
        }
    },
    priority:{
        in:["body"],
        optional:true,
        isIn:{
            options:[["low","medium","high"]],
            errorMessage: "Priority must be one of: low, medium, high",
        }
    },
    dueDate:{
        in:["body"],
        notEmpty:true,
        errorMessage:"Due date must be a valid ISO8601 string",
        isISO8601:true,
    }
})

