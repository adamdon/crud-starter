import mongoose from "mongoose";

export async function connect () {
    const MONGO_URI = process.env.MONGO_URI ?? 'mongodb://localhost:27017/';

    const mongooseModule = await mongoose.connect(MONGO_URI);

    const ItemSchema = new mongooseModule.Schema({
        ref: { type: String, required: true },
        name: { type: String, required: true }
    });

    Item = mongooseModule.model('Item', ItemSchema);

    await Item.deleteMany(); // delete all documents in the collection
}

export let Item