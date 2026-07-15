import {checkSchema} from "express-validator";
export const getTaskByIdValidator=checkSchema({
    id:{
        in:["params"],
        notEmpty:true,
        errorMessage:"Task ID is required",
        isMongoId:true,
    }

});
