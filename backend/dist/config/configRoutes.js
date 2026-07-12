import { container } from './container.js';
import { TaskRoutes } from "../modules/task/task.routes.js";
export function configRoutes(app) {
    const taskRouter = container.get(TaskRoutes);
    app.use('/task', taskRouter.router);
    return app;
}
