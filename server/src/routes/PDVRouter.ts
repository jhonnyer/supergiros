import { Router } from 'express';
import pdvController from '../controllers/PDVController';


class PDVRoutes {
    public router:Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        // this.router.get('/',(req,res)=>
        // res.send('Juegos'));
        this.router.get('/',pdvController.list);
        this.router.get('/:id',pdvController.getOne);
        this.router.post('/', pdvController.create);
        this.router.delete('/:id', pdvController.delete);
        this.router.put('/:id', pdvController.update);
        // this.router.patch('/:id', gamesController.update);
    }
}



const pdvRoutes=new PDVRoutes();
export default pdvRoutes.router;