import{Request, Response} from 'express';
import pool from '../database';
// import { catchError } from 'rxjs/operators';
// CJS

class PersonaController{
    public async list(req: Request, res: Response){
        await pool.query('SELECT * FROM persona', function (err, persona, fields)
        // res.json(CircularJSON.stringify(games));
        {
            if(err) throw err;
            res.json(persona);
            console.log(persona);
        })};

        // tipo any porque a veces esta volviendo una promesa, y a veces un codigo de estado 
    public async getOne(req: Request, res: Response):Promise<any>{
        const {id}=req.params;
        // const games = await pool.query('SELECT * FROM game WHERE id=?',[id]);
        await pool.query('SELECT * FROM persona WHERE id_persona=?',[id], function(err, personas, fields)
        {
            if(err) throw err;
            // Si hay un juego en el array games 
            if (personas.length>0){
                // devolver el indice cero del objeto buscado 
                return res.json(personas[0]);
                console.log(personas);
                // res.json({text:"Juego Encontrado"});
            }
            res.status(404).json({text:'La persona  no existe'});            
        })};
        
    // res.json({text: 'Este es el juego '+req.params.id});
    public async create (req:Request, res:Response): Promise<void>{
        // console.log(req.body);
        await pool.query('INSERT INTO persona set ?',[req.body]);
        res.json({message:'La persona fue creada'});
    }
    // public async delete (req:Request, res:Response): Promise<void>{
    //    // res.json({tex:'actualizando un juego '+req.params.id});
    //    console.log('petición frontend')
    //    console.log(req.body);
    //    const{id}=req.params;
    //    await pool.query('UPDATE persona set ? where id_persona=?',[req.body, id]);
    //    res.json({message:"La persona se encuentra inactiva"});
    // }
    public async update (req:Request, res:Response):Promise<void>{
        // res.json({tex:'actualizando un juego '+req.params.id});
        console.log('petición frontend')
        console.log(req.body);
        const{id}=req.params;
        await pool.query('UPDATE persona set ? where id_persona=?',[req.body, id]);
        res.json({message:"Los datos de la persona fueron actualizados "});
    }
}

const personaController = new PersonaController();
export default personaController;