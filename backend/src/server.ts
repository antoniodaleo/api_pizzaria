import express , {Request, Response, NextFunction} from 'express';
import 'express-async-errors';
import cors from 'cors'; 
import { router } from './routes';


const app = express(); 
app.use(express.json());
app.use(cors()); 

app.use(router); 

// Criamo um Middle, uma trattativa de error 
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error){
        //Se for uma instacia de tipo erro
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error', 
        message: 'Internal server error'
    })
})


app.listen(3333, ()=> console.log('SRV Online'))
