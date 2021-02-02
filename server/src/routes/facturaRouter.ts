import { Router } from 'express';
import facturasController from '../controllers/facturaController';


class FacturaController {
    public router:Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        // this.router.get('/',(req,res)=>
        // res.send('Juegos'));
        this.router.get('/',facturasController.list);
        this.router.get('/:id',facturasController.getOne);
        this.router.post('/', facturasController.create);
        this.router.put('/:id', facturasController.update);
        // this.router.patch('/:id', gamesController.update);
    }
}



const facturaController=new FacturaController();
export default facturaController.router;