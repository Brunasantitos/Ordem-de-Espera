import express from "express";
import especialidadeRouter from './routes/especialidade.router.js';


const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// ROUTES
app.use('/api/v1/especialidade', especialidadeRouter);


app.listen(3000, () => {
    console.log('API rodando no url http://localhost:3000');
});