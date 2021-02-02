"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const facturaController_1 = __importDefault(require("../controllers/facturaController"));
class FacturaController {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // this.router.get('/',(req,res)=>
        // res.send('Juegos'));
        this.router.get('/', facturaController_1.default.list);
        this.router.get('/:id', facturaController_1.default.getOne);
        this.router.post('/', facturaController_1.default.create);
        this.router.put('/:id', facturaController_1.default.update);
        // this.router.patch('/:id', gamesController.update);
    }
}
const facturaController = new FacturaController();
exports.default = facturaController.router;
