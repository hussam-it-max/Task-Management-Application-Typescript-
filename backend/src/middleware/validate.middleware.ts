import {Request,Response,NextFunction} from "express";
import {validationResult} from "express-validator";
import { StatusCodes } from "http-status-codes";
export const validate=(req:Request,res:Response,next:NextFunction)=>{
    const result=validationResult(req);
    if(result.isEmpty()){
        next();
        return;
    }
    console.log(result.array());
    res.status(StatusCodes.BAD_REQUEST).json({
        errors:result.array().map(err=>{
            if(err.type==="field"){
                return {
                    field:err.path,
                    message:err.msg
                }

            }
            return {
                message:err.msg
            }
        })
    })
}

 
    


