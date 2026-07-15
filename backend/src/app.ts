import "reflect-metadata";
import express ,{Express} from "express";
const app: Express = express();
app.use(express.json());
import {configRoutes} from "./config/configRoutes.js";
configRoutes(app);
export default app;