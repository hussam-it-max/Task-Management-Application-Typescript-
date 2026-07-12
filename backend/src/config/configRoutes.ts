import {container} from './container.js'
import {TaskRoutes} from "../modules/task/task.routes.js"
import {Application} from "express";
export function  configRoutes(app:Application):Application{
    const taskRouter:TaskRoutes=container.get<TaskRoutes>(TaskRoutes);
    app.use('/task',taskRouter.router);
    return app;
}


