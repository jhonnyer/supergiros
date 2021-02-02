import { Router } from 'express';
import categoriaController from '../controllers/categoriaController';


class GamesRoutes {
    public router:Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        // this.router.get('/',(req,res)=>
        // res.send('Juegos'));
        this.router.get('/',categoriaController.list);
        this.router.get('/:id',categoriaController.getOne);
        this.router.post('/', categoriaController.create);
        this.router.delete('/:id', categoriaController.delete);
        this.router.put('/:id', categoriaController.update);
        // this.router.patch('/:id', gamesController.update);
    }
}



const gamesRoutes=new GamesRoutes();
export default gamesRoutes.router;