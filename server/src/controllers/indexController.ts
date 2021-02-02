import {Request, Response} from 'express';

class IndexController {
    index (req: Request, res: Response){
        // res.send('Hola prueba');
        res.json({tex:'API Is /Api/games'});
    }
}

export const indexController = new IndexController();