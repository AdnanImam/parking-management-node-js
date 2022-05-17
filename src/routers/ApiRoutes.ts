import { Router, Request, Response } from "express";
import IRouter from "./RouteInterface";
import MainController from "../controllers/MainController";

class ApiRoutes implements IRouter{
    public router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    public routes(): void {
        this.router.get("/", MainController.index);
        this.router.post("/:level", MainController.update);
        this.router.delete("/:level",MainController.delete);
    }
}

export default new ApiRoutes().router;