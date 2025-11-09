import express from 'express';
import { ENV } from './config/env.js'

const app = express();

const PORT = ENV.PORT;

console.log(ENV.MONGO_URI);

app.get('/', (req, res) => {
    res.send("Hola, mundo!");
})

app.listen(ENV.PORT, () => console.log("El server esta siendo ejecutado en el puerto: " + ENV.PORT));