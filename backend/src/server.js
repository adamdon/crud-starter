import 'dotenv/config'
import express from 'express';
import * as database from "./utilities/database.js";
import readAll from "./api/readAll.js";;
import create from "./api/create.js";
import update from "./api/update.js";
import deleteOne from "./api/delete.js";



await database.connect()

const expressApp = express();

expressApp.use(express.json());

expressApp.get('/readAll', readAll);
expressApp.post('/create', create);
expressApp.post('/update', update);
expressApp.post('/delete', deleteOne);


const port = process.env.PORT ?? 8081;
expressApp.listen(port, () => {
    console.log('Server listening on port ' + port);
});