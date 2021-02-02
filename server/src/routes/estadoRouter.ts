import { Router } from 'express';
import estadosController from '../controllers/estadoController';


class EstadoController {
    public router:Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        // this.router.get('/',(req,res)=>
        // res.send('Juegos'));
        this.router.get('/',estadosController.list);
        this.router.get('/:id',estadosController.getOne);
        // this.router.patch('/:id', gamesController.update);
    }
}

const estadoController=new EstadoController();
export default estadoController.router;