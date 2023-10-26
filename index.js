import Express from "express";


const api = Express();



api.listen(3000, () => {
    console.log('API rodando no url http://localhost:3000');
});