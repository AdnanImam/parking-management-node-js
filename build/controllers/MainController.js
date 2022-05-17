"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let data = [
    { level: "B1", slot: 10 },
    { level: "B2", slot: 12 },
    { level: "B3", slot: 14 },
    { level: "B4", slot: 15 },
];
class MainController {
    index(req, res) {
        return res.send(data);
    }
    create(req, res) {
        const { level } = req.params;
        let parking = data.find(item => item.level == level);
        const { slot } = parking.slot;
        parking.slot = parking.slot - 1;
        return res.send(parking);
    }
    show(req, res) {
        throw new Error("Method not implemented.");
    }
    update(req, res) {
        throw new Error("Method not implemented.");
    }
    delete(req, res) {
        const { level } = req.params;
        let parking = data.find(item => item.level == level);
        const { slot } = parking.slot;
        parking.slot = parking.slot + 1;
        return res.send("Thank You, be careful on the way");
    }
}
exports.default = new MainController;
