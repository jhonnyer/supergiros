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
class PDVController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM PDV', function (err, pdv, fields) {
                if (err)
                    throw err;
                res.json(pdv);
                console.log(pdv);
            });
        });
    }
    ;
    // const games=await {
    //     "Persona":
    // [  {"name": "jhonnyer",
    //         "ciudad":"Popayan"
    //     },
    //     {"Años":"20",
    //      "Departamento":"Cauca1"}
    // ]
    // };
    // res.json(games);
    // console.log(req.body);
    // tipo any porque a veces esta volviendo una promesa, y a veces un codigo de estado 
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            // const games = await pool.query('SELECT * FROM game WHERE id=?',[id]);
            yield database_1.default.query('SELECT * FROM PDV WHERE id_pdv=?', [id], function (err, pdvs, fields) {
                if (err)
                    throw err;
                // Si hay un juego en el array games 
                if (pdvs.length > 0) {
                    // devolver el indice cero del objeto buscado 
                    return res.json(pdvs[0]);
                    console.log(pdvs);
                    // res.json({text:"Juego Encontrado"});
                }
                res.status(404).json({ text: 'El punto de venta no existe' });
            });
        });
    }
    ;
    // res.json({text: 'Este es el juego '+req.params.id});
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body);
            yield database_1.default.query('INSERT INTO PDV set ?', [req.body]);
            res.json({ message: 'El punto de venta se añadio al inventario' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.json({tex:'Eliminando un juego '+req.params.id});
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM PDV where id_pdv=?', [id]);
            res.json({ message: "El punto de venta no tiene equipos asignados en el inventario" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.json({tex:'actualizando un juego '+req.params.id});
            console.log('petición frontend');
            console.log(req.body);
            const { id } = req.params;
            yield database_1.default.query('UPDATE PDV set ? where id_pdv=?', [req.body, id]);
            res.json({ message: "Los articulos asignados en el punto de venta han sido actualizados" });
        });
    }
}
const pdvController = new PDVController();
exports.default = pdvController;
