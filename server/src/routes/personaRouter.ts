import { Router } from 'express';
import personaController from '../controllers/personaController';


class PersonaController {
    public router:Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        // this.router.get('/',(req,res)=>
        // res.send('Juegos'));
        this.router.get('/',personaController.list);
        this.router.get('/:id',personaController.getOne);
        this.router.post('/', personaController.create);
        // this.router.put('/:id', personaController.delete);
        this.router.put('/:id', personaController.update);
        // this.router.patch('/:id', gamesController.update);
    }
}



const personasController=new PersonaController();
export default personasController.router;