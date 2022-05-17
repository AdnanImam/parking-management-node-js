"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MainController_1 = __importDefault(require("../controllers/MainController"));
class ApiRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get("/", MainController_1.default.index);
        this.router.post("/:level", MainController_1.default.update);
        this.router.delete("/:level", MainController_1.default.delete);
    }
}
exports.default = new ApiRoutes().router;
