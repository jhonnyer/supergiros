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
class ArticuloFacturaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM articulo_factura', function (err, art_fact, fields) {
                if (err)
                    throw err;
                res.json(art_fact);
                console.log(art_fact);
            });
        });
    }
    ;
    // res.json({text: 'Este es el juego '+req.params.id});
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body);
            yield database_1.default.query('INSERT INTO articulo_factura set ?', [req.body]);
            res.json({ message: 'La factura se añadio al inventario' });
        });
    }
}
const articulofacturaController = new ArticuloFacturaController();
exports.default = articulofacturaController;
