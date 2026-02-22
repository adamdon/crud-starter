import { Application, Router } from "@oak/oak";
import { oakCors } from "@tajpouria/cors";
import * as database from "./utilities/database.ts";
import { readAll } from "./api/readAll.ts";
import { create } from "./api/create.ts";
import { update } from "./api/update.ts";
import { deleteOne } from "./api/deleteOne.ts";

console.log("Backend Starting ...");
await database.connect();

const router = new Router();
router.get("/api/readAll", readAll);
router.post("/api/create", create);
router.post("/api/update", update);
router.post("/api/delete", deleteOne);

const app = new Application();
app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

const port = Number(Deno.env.get("PORT") ?? 8081);
console.log(`Server started on port ${port}`);
await app.listen({ port });
