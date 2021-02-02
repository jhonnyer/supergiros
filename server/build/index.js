"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("Servidor")
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
// Rutas 
const indexRouter_1 = __importDefault(require("./routes/indexRouter"));
const articulosRouter_1 = __importDefault(require("./routes/articulosRouter"));
const PDVRouter_1 = __importDefault(require("./routes/PDVRouter"));
const articulo_facturaRouter_1 = __importDefault(require("./routes/articulo_facturaRouter"));
const categoriaRouter_1 = __importDefault(require("./routes/categoriaRouter"));
const estadoRouter_1 = __importDefault(require("./routes/estadoRouter"));
const personaRouter_1 = __importDefault(require("./routes/personaRouter"));
const facturaRouter_1 = __importDefault(require("./routes/facturaRouter"));
const tipo_personaRouter_1 = __importDefault(require("./routes/tipo_personaRouter"));
class Server {
    // Inicializador express 
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    // metodo que permite configurar propiedad app, no devuelve nada tipo vacio 
    config() {
        this.app.set('port', process.env.PORT || 3500);
        // permite ver las peticiones a la api y la BD 
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        // permite enviar datos desde un formulario a la app 
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRouter_1.default);
        this.app.use('/supergiros/articulos/', articulosRouter_1.default);
        this.app.use('/supergiros/pdv/', PDVRouter_1.default);
        this.app.use('/supergiros/art_fact/', articulo_facturaRouter_1.default);
        this.app.use('/supergiros/categoria/', categoriaRouter_1.default);
        this.app.use('/supergiros/estado/', estadoRouter_1.default);
        this.app.use('/supergiros/persona/', personaRouter_1.default);
        this.app.use('/supergiros/facturas/', facturaRouter_1.default);
        this.app.use('/supergiros/tipoper/', tipo_personaRouter_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor escuchando puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
