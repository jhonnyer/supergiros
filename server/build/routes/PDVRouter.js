"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PDVController_1 = __importDefault(require("../controllers/PDVController"));
class PDVRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // this.router.get('/',(req,res)=>
        // res.send('Juegos'));
        this.router.get('/', PDVController_1.default.list);
        this.router.get('/:id', PDVController_1.default.getOne);
        this.router.post('/', PDVController_1.default.create);
        this.router.delete('/:id', PDVController_1.default.delete);
        this.router.put('/:id', PDVController_1.default.update);
        // this.router.patch('/:id', gamesController.update);
    }
}
const pdvRoutes = new PDVRoutes();
exports.default = pdvRoutes.router;
