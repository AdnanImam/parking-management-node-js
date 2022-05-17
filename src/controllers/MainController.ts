import { Request, Response } from "express";
import IController  from "./ControllerInterface";
const db = require("../db/models");

class MainController implements IController{

    index = async  (req: Request, res: Response): Promise<Response> => {
       
        const parkings = await db.parking.findAll({
            attributes: ['level','slot']
        });
        
        return res.send({
            status : 200,
            message: "Data retrieved successfully",
            data   : parkings
        });
    }

    update = async (req: Request, res: Response): Promise<Response> => {
        const { level } = req.params;
   
        const parking = await db.parking.findOne({
            where: {level : level}
        });
        
        if (parking.slot == 0) {
            return res.send({
                status : 202,
                message: "The parking lot is full",
            });
        } else {
            const current_slot = parking.slot;
            const new_slott    = parking.slot - 1;
    
            parking.update({
                slot : new_slott
            });
    
            let data:any[] = [
                {level: level, slot: current_slot },
            ];
            
            return res.send({
                status : 201,
                message: "Parking successfully Update",
                data : data
            });
        }
       
    }

    show(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }

    create(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }

    delete = async (req: Request, res: Response): Promise<Response> => {
        const { level } = req.params;
        
        const parking = await db.parking.findOne({
            where: {level : level}
        });

        const new_slott = parking.slot + 1;

        parking.update({
            slot : new_slott
        });
        
        return res.send("Thank You, be careful on the way");
    }
}

export default new MainController;