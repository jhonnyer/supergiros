// console.log("Servidor")
import express, {Application, application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

// Rutas 
import indexRoutes from './routes/indexRouter';
import articulosRoutes from './routes/articulosRouter';
import pdvRouter from './routes/PDVRouter';
import articulo_facturaController from './routes/articulo_facturaRouter';
import categoriaRouter from './routes/categoriaRouter';
import estadoRouter from './routes/estadoRouter';
import personaRouter from './routes/personaRouter';
import facturaRouter from './routes/facturaRouter';
import tipo_personaRouter from './routes/tipo_personaRouter';

class Server{
    public app: Application;
    // Inicializador express 
    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }
    // metodo que permite configurar propiedad app, no devuelve nada tipo vacio 
    config():void{
        this.app.set('port', process.env.PORT || 3500);
        // permite ver las peticiones a la api y la BD 
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        // permite enviar datos desde un formulario a la app 
        this.app.use(express.urlencoded({extended:false}));
    }
    routes():void{
        this.app.use('/', indexRoutes);
        this.app.use('/supergiros/articulos/',articulosRoutes);
        this.app.use('/supergiros/pdv/',pdvRouter);
        this.app.use('/supergiros/art_fact/',articulo_facturaController);
        this.app.use('/supergiros/categoria/',categoriaRouter);
        this.app.use('/supergiros/estado/',estadoRouter);
        this.app.use('/supergiros/persona/',personaRouter);
        this.app.use('/supergiros/facturas/',facturaRouter);
        this.app.use('/supergiros/tipoper/',tipo_personaRouter);
    }
    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('Servidor escuchando puerto', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();