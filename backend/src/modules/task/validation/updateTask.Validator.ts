import {checkSchema} from "express-validator";
export const updateTaskValidator=checkSchema({
    _id:{
        in:["body"],
        notEmpty:true,
        errorMessage:"Task ID is required",
        isMongoId:true, 
    },
    title:{
        in:["body"],
        optional:true,
        isString:true,
        isLength:{
            options:{max:100},
            errorMessage:"title should be max 100 chars",
        },
       trim:true    

    },
    description:{
        in:["body"],
        optional:true,
        isString:true,
        trim:true,
    },
    status:{
        in:["body"],
        optional:true,  
        isIn:{  
            options:[["pending", "in-progress", "completed"]],
            errorMessage:"status should be either pending, in-progress or completed"
        }
    },
    priority:{
        in:["body"],
        optional:true,  
        isIn:{  
            options:[["low", "medium", "high"]],
            errorMessage:"priority should be either low, medium or high"        
        }
    },
    dueDate:{
        in:["body"],
        optional:true,  
        isISO8601:true,
        errorMessage:"Due date must be a valid ISO8601 string"
    },
    

})