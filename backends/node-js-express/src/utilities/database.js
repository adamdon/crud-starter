import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

export let Item;

export const connect = async () => {
    const mongooseModule = await createMongooseModule();
    console.log(`MongoDB Connected: ${mongooseModule.connection.host}/${mongooseModule.connection.name}`);

    const ItemSchema = new mongooseModule.Schema({
        ref: { type: String, required: true },
        name: { type: String, required: true }
    });
    Item = mongooseModule.model('Item', ItemSchema);
    await Item.deleteMany(); // delete all documents in the collection at startup
};

const createMongooseModule = async () => {
    const options = { dbName: 'crud-starter' };

    if (process.env.MONGO_URI) {
        console.log(`Connecting to database - MONGO_URI: ${process.env.MONGO_URI}`);
        return await mongoose.connect(process.env.MONGO_URI, options);
    } else {
        console.log(`Connecting to fallback in memory database - MONGO_URI not set`);
        const mongoMemoryServer = await MongoMemoryServer.create();
        return await mongoose.connect(mongoMemoryServer.getUri(), options);
    }
};