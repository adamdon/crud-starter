import express from "express";
import cors from "cors";
import * as database from "./utilities/database.js";
import { readAll } from "./api/readAll.js";
import { create } from "./api/create.js";
import { update } from "./api/update.js";
import { deleteOne } from "./api/deleteOne.js";


console.log("Backend Starting ...");
await database.connect();

const expressApp = express();
expressApp.use(express.json());
expressApp.use(cors());

expressApp.get('/api/readAll', readAll);
expressApp.post('/api/create', create);
expressApp.post('/api/update', update);
expressApp.post('/api/delete', deleteOne);

expressApp.listen(process.env.PORT ?? 8081, () => console.log('Server started: '));