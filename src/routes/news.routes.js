import { Router } from "express";
import { newsController } from "../controller/news.controller.js";

const routes = Router();

routes.route("/:lan").get(newsController)

export default routes