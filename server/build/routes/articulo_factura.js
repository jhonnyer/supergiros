"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const articulo_factura_1 = __importDefault(require("../controllers/articulo_factura"));
class Articulo_FacturaController {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // this.router.get('/',(req,res)=>
        // res.send('Juegos'));
        this.router.get('/', articulo_factura_1.default.list);
        this.router.post('/', articulo_factura_1.default.create);
        // this.router.patch('/:id', gamesController.update);
    }
}
const articulo_facturaController = new Articulo_FacturaController();
exports.default = articulo_facturaController.router;
