import { Request, Response } from "express";
import IController  from "./ControllerInterface";

let data:any[] = [
    {level: "B1", slot: 10 },
    {level: "B2", slot: 12 },
    {level: "B3", slot: 14 },
    {level: "B4", slot: 15 },
];

class MainController implements IController{
    index(req: Request, res: Response): Response {
        return res.send(data);
    }
    create(req: Request, res: Response): Response{
        const { level } = req.params;
        
        let parking = data.find(item => item.level == level);
        const { slot } = parking.slot;
        parking.slot = parking.slot - 1;
        
        return res.send(parking);
    }
    show(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
    update(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
    delete(req: Request, res: Response): Response {
        const { level } = req.params;
        
        let parking = data.find(item => item.level == level);
        const { slot } = parking.slot;
        parking.slot = parking.slot + 1;
        
        return res.send("Thank You, be careful on the way");
    }
}

export default new MainController;