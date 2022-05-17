"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("../db/models");
class MainController {
    constructor() {
        this.index = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const parkings = yield db.parking.findAll({
                attributes: ['level', 'slot']
            });
            return res.send({
                status: 200,
                message: "Data retrieved successfully",
                data: parkings
            });
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { level } = req.params;
            const parking = yield db.parking.findOne({
                where: { level: level }
            });
            if (parking.slot == 0) {
                return res.send({
                    status: 202,
                    message: "The parking lot is full",
                });
            }
            else {
                const current_slot = parking.slot;
                const new_slott = parking.slot - 1;
                parking.update({
                    slot: new_slott
                });
                let data = [
                    { level: level, slot: current_slot },
                ];
                return res.send({
                    status: 201,
                    message: "Parking successfully Update",
                    data: data
                });
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { level } = req.params;
            const parking = yield db.parking.findOne({
                where: { level: level }
            });
            const new_slott = parking.slot + 1;
            parking.update({
                slot: new_slott
            });
            return res.send("Thank You, be careful on the way");
        });
    }
    show(req, res) {
        throw new Error("Method not implemented.");
    }
    create(req, res) {
        throw new Error("Method not implemented.");
    }
}
exports.default = new MainController;
