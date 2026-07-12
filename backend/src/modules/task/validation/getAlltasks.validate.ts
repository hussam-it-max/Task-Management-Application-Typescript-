import {checkSchema} from "express-validator";
export const getAllTasksValidator=checkSchema({
    limit:{
        in:["query"],
        optional:true,
        isInt:true,
        toInt:true,
        errorMessage:"limit should be a number"

    },
    page:{
        in:["query"],
        optional:true,
        errorMessage:"page should be a number",
        isInt:{
            options:{min:1},
            errorMessage:"page should be a positive integer"
        },
        toInt:true,

    },
    order:{
        in:["query"],
        optional:true,
        isIn:{
            options:[["asc","desc"]],
            errorMessage:"order should be either asc or desc"
        }
    }
})