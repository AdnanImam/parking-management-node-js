import express, {Application, Request, Response} from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import ApiRoutes from "./routers/ApiRoutes";
import { config as dotenv } from "dotenv";
import swaggerUI from "swagger-ui-express";
// import * as swaggerDocument from './swagger.json';

class App {
    public app: Application;

    constructor(){
        this.app = express();
        this.plugins();
        this.routes();
        dotenv();
    }

    protected plugins(): void {
        this.app.use(bodyParser.json());
        this.app.use(morgan("dev"));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }

    protected routes(): void {
        this.app.use("/api/v1/parking",ApiRoutes);
    }
}

const port: number = 8000
const app = new App().app;
app.listen(port, () => {
    console.log("App listening on port "+port)
    console.log(process.env.DB_HOST);
});
