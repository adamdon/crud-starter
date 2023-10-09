import "dotenv/config";
import express from "express";
import cors from "cors";
import * as database from "./utilities/database.js";
import readAll from "./api/readAll.js";
import create from "./api/create.js";
import update from "./api/update.js";
import deleteOne from "./api/delete.js";


console.log("Backend Starting ...");
const MONGO_URI = process.env.MONGO_URI ?? 'mongodb://localhost:27017/';
const PORT = process.env.PORT ?? 8081;

await database.connect(MONGO_URI);

const expressApp = express();

expressApp.use(express.json());
expressApp.use(cors());

expressApp.get('/api/readAll', readAll);
expressApp.post('/api/create', create);
expressApp.post('/api/update', update);
expressApp.post('/api/delete', deleteOne);

expressApp.listen(PORT, () => console.log('Server started on port: ' + PORT + " - Database URI: " + MONGO_URI));