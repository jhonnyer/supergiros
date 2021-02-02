import { Router } from 'express';
import articulofacturaController from '../controllers/articulo_facturaController';


class Articulo_FacturaController {
    public router:Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        // this.router.get('/',(req,res)=>
        // res.send('Juegos'));
        this.router.get('/',articulofacturaController.list);
        this.router.post('/', articulofacturaController.create);
        // this.router.patch('/:id', gamesController.update);
    }
}



const articulo_facturaController=new Articulo_FacturaController();
export default articulo_facturaController.router;