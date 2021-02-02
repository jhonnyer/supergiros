"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipo_personaController_1 = __importDefault(require("../controllers/tipo_personaController"));
class TipoPersonaController {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // this.router.get('/',(req,res)=>
        // res.send('Juegos'));
        this.router.get('/', tipo_personaController_1.default.list);
        this.router.get('/:id', tipo_personaController_1.default.getOne);
        this.router.post('/', tipo_personaController_1.default.create);
        // this.router.delete('/:id', tiposPersonaController.delete);
        this.router.put('/:id', tipo_personaController_1.default.update);
        // this.router.patch('/:id', gamesController.update);
    }
}
const tipoPersonaController = new TipoPersonaController();
exports.default = tipoPersonaController.router;
