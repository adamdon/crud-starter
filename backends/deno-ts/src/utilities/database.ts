import mongoose from "mongoose";
// deno-lint-ignore-file no-explicit-any
// mongodb-memory-server uses tslib.__exportStar for re-exports which Deno
// cannot statically analyse as named ESM exports — import as default instead.
import mongodbMemoryServer from "mongodb-memory-server";
const { MongoMemoryServer } = mongodbMemoryServer as any;

export let Item: mongoose.Model<{ ref: string; name: string }>;

const createMongooseConnection = async (): Promise<typeof mongoose> => {
  const options = { dbName: "crud-starter" };
  const mongoUri = Deno.env.get("MONGO_URI");
  if (mongoUri) {
    console.log(`Connecting to database - MONGO_URI: ${mongoUri}`);
    return await mongoose.connect(mongoUri, options);
  } else {
    console.log(`Connecting to fallback in memory database - MONGO_URI not set`);
    const mongoMemoryServer = await MongoMemoryServer.create();
    return await mongoose.connect(mongoMemoryServer.getUri(), options);
  }
};

export const connect = async (): Promise<void> => {
  const mongooseModule = await createMongooseConnection();
  console.log(
    `MongoDB Connected: ${mongooseModule.connection.host}/${mongooseModule.connection.name}`
  );
  const ItemSchema = new mongooseModule.Schema({
    ref: { type: String, required: true },
    name: { type: String, required: true },
  });
  Item = mongooseModule.model("Item", ItemSchema);
  await Item.deleteMany();
};
