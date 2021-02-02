import{Request, Response} from 'express';
import pool from '../database';
// import { catchError } from 'rxjs/operators';
// CJS

class CategoriaController{
    public async list(req: Request, res: Response){
        await pool.query('SELECT * FROM categoria', function (err, cat, fields)
        // res.json(CircularJSON.stringify(games));
        {
            if(err) throw err;
            res.json(cat);
            console.log(cat);
        })};
        // const games=await {
        //     "Persona":
        // [  {"name": "jhonnyer",
        //         "ciudad":"Popayan"
        //     },
        //     {"Años":"20",
        //      "Departamento":"Cauca1"}
        // ]
        // };
        // res.json(games);
        // console.log(req.body);

        // tipo any porque a veces esta volviendo una promesa, y a veces un codigo de estado 
    public async getOne(req: Request, res: Response):Promise<any>{
        const {id}=req.params;
        // const games = await pool.query('SELECT * FROM game WHERE id=?',[id]);
        await pool.query('SELECT * FROM categoria WHERE id_cat=?',[id], function(err, cats, fields)
        {
            if(err) throw err;
            // Si hay un juego en el array games 
            if (cats.length>0){
                // devolver el indice cero del objeto buscado 
                return res.json(cats[0]);
                console.log(cats);
                // res.json({text:"Juego Encontrado"});
            }
            res.status(404).json({text:'La categoria no existe'});            
        })};
        
    // res.json({text: 'Este es el juego '+req.params.id});
    public async create (req:Request, res:Response): Promise<void>{
        // console.log(req.body);
        await pool.query('INSERT INTO categoria set ?',[req.body]);
        res.json({message:'La categoria se añadio al inventario'});
    }
    public async delete (req:Request, res:Response): Promise<void>{
        // res.json({tex:'Eliminando un juego '+req.params.id});
        const{id}=req.params;
        await pool.query('DELETE FROM categoria where id_cat=?',[id]);
        res.json({message:"La categoria no tiene equipos asignados en el inventario"});
    }
    public async update (req:Request, res:Response):Promise<void>{
        // res.json({tex:'actualizando un juego '+req.params.id});
        console.log('petición frontend')
        console.log(req.body);
        const{id}=req.params;
        await pool.query('UPDATE categoria set ? where id_cat=?',[req.body, id]);
        res.json({message:"Los articulos asignados en  la categoria han sido actualizados"});
    }
}

const categoriaController = new CategoriaController();
export default categoriaController;