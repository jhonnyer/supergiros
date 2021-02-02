import{Request, Response} from 'express';
import pool from '../database';
// import { catchError } from 'rxjs/operators';
// CJS

class ArticulosController{
    public async list(req: Request, res: Response){
        await pool.query('SELECT * FROM articulo', function (err, articulo, fields)
        // res.json(CircularJSON.stringify(games));
        {
            if(err) throw err;
            res.json(articulo);
            console.log(articulo);
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
        await pool.query('SELECT * FROM articulo WHERE id_articulo=?',[id], function(err, articulos, fields)
        {
            if(err) throw err;
            // Si hay un juego en el array games 
            if (articulos.length>0){
                // devolver el indice cero del objeto buscado 
                return res.json(articulos[0]);
                console.log(articulos);
                // res.json({text:"Juego Encontrado"});
            }
            res.status(404).json({text:'El Articulo no existe'});            
        })};
        
    // res.json({text: 'Este es el juego '+req.params.id});
    public async create (req:Request, res:Response): Promise<void>{
        // console.log(req.body);
        await pool.query('INSERT INTO articulo set ?',[req.body]);
        res.json({message:'El articulo se añadio al inventario'});
    }
    public async delete (req:Request, res:Response): Promise<void>{
        // res.json({tex:'Eliminando un juego '+req.params.id});
        const{id}=req.params;
        await pool.query('DELETE FROM articulo where id_articulo=?',[id]);
        res.json({message:"El articulo fue dado de baja del inventario"});
    }
    public async update (req:Request, res:Response):Promise<void>{
        // res.json({tex:'actualizando un juego '+req.params.id});
        console.log('petición frontend')
        console.log(req.body);
        const{id}=req.params;
        await pool.query('UPDATE articulo set ? where id_articulo=?',[req.body, id]);
        res.json({message:"Los campos del articulo fueron actualizados en el inventario"});
    }
}

const articulosController = new ArticulosController();
export default articulosController;