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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
// import { catchError } from 'rxjs/operators';
// CJS
class FacturaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM factura', function (err, factura, fields) {
                if (err)
                    throw err;
                res.json(factura);
                console.log(factura);
            });
        });
    }
    ;
    // tipo any porque a veces esta volviendo una promesa, y a veces un codigo de estado 
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            // const games = await pool.query('SELECT * FROM game WHERE id=?',[id]);
            yield database_1.default.query('SELECT * FROM factura WHERE id_factura=?', [id], function (err, facturas, fields) {
                if (err)
                    throw err;
                // Si hay un juego en el array games 
                if (facturas.length > 0) {
                    // devolver el indice cero del objeto buscado 
                    return res.json(facturas[0]);
                    console.log(facturas);
                    // res.json({text:"Juego Encontrado"});
                }
                res.status(404).json({ text: 'La factura no existe' });
            });
        });
    }
    ;
    // res.json({text: 'Este es el juego '+req.params.id});
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body);
            yield database_1.default.query('INSERT INTO factura set ?', [req.body]);
            res.json({ message: 'La factura fue creada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.json({tex:'actualizando un juego '+req.params.id});
            console.log('petición frontend');
            console.log(req.body);
            const { id } = req.params;
            yield database_1.default.query('UPDATE factura set ? where id_factura=?', [req.body, id]);
            res.json({ message: "Los datos de la factura fueron actualizados " });
        });
    }
}
const facturasController = new FacturaController();
exports.default = facturasController;
