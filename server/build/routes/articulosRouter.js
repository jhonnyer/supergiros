"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const articulosController_1 = __importDefault(require("../controllers/articulosController"));
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // this.router.get('/',(req,res)=>
        // res.send('Juegos'));
        this.router.get('/', articulosController_1.default.list);
        this.router.get('/:id', articulosController_1.default.getOne);
        this.router.post('/', articulosController_1.default.create);
        this.router.delete('/:id', articulosController_1.default.delete);
        this.router.put('/:id', articulosController_1.default.update);
        // this.router.patch('/:id', gamesController.update);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
