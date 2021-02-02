"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personaController_1 = __importDefault(require("../controllers/personaController"));
class PersonaController {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // this.router.get('/',(req,res)=>
        // res.send('Juegos'));
        this.router.get('/', personaController_1.default.list);
        this.router.get('/:id', personaController_1.default.getOne);
        this.router.post('/', personaController_1.default.create);
        // this.router.put('/:id', personaController.delete);
        this.router.put('/:id', personaController_1.default.update);
        // this.router.patch('/:id', gamesController.update);
    }
}
const personasController = new PersonaController();
exports.default = personasController.router;
