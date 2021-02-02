import { Router } from 'express';
import articulosController from '../controllers/articulosController';


class GamesRoutes {
    public router:Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        // this.router.get('/',(req,res)=>
        // res.send('Juegos'));
        this.router.get('/',articulosController.list);
        this.router.get('/:id',articulosController.getOne);
        this.router.post('/', articulosController.create);
        this.router.delete('/:id', articulosController.delete);
        this.router.put('/:id', articulosController.update);
        // this.router.patch('/:id', gamesController.update);
    }
}



const gamesRoutes=new GamesRoutes();
export default gamesRoutes.router;