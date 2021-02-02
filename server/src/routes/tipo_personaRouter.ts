import { Router } from 'express';
import tiposPersonaController from '../controllers/tipo_personaController';


class TipoPersonaController {
    public router:Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        // this.router.get('/',(req,res)=>
        // res.send('Juegos'));
        this.router.get('/',tiposPersonaController.list);
        this.router.get('/:id',tiposPersonaController.getOne);
        this.router.post('/', tiposPersonaController.create);
        // this.router.delete('/:id', tiposPersonaController.delete);
        this.router.put('/:id', tiposPersonaController.update);
        // this.router.patch('/:id', gamesController.update);
    }
}



const tipoPersonaController=new TipoPersonaController();
export default tipoPersonaController.router;