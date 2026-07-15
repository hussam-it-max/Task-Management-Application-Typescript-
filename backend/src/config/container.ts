import { Container } from "inversify";
import { TaskService } from "../modules/task/task.service.js";
import {TaskController} from "../modules/task/task.controller.js";
import {TaskRoutes} from "../modules/task/task.routes.js";
import { TaskProvider } from "../modules/task/task.provider.js";
export const container:Container=new Container();
container.bind<TaskService>(TaskService).toSelf().inSingletonScope();
container.bind<TaskController>(TaskController).toSelf().inTransientScope();
container.bind<TaskRoutes>(TaskRoutes).toSelf().inTransientScope();
container.bind<TaskProvider>(TaskProvider).toSelf().inSingletonScope();


