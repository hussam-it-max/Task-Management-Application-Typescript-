import "reflect-metadata";
import express from "express";
const app = express();
app.use(express.json());
import { configRoutes } from "./config/configRoutes.js";
configRoutes(app);
export default app;
