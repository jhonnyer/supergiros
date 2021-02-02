"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estadoController_1 = __importDefault(require("../controllers/estadoController"));
class EstadoController {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // this.router.get('/',(req,res)=>
        // res.send('Juegos'));
        this.router.get('/', estadoController_1.default.list);
        this.router.get('/:id', estadoController_1.default.getOne);
        // this.router.patch('/:id', gamesController.update);
    }
}
const estadoController = new EstadoController();
exports.default = estadoController.router;
