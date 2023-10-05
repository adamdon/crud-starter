import mongoose from "mongoose";

export let Item;

export async function connect (MONGO_URI) {

    const mongooseModule = await mongoose.connect(MONGO_URI);

    const ItemSchema = new mongooseModule.Schema({
        ref: { type: String, required: true },
        name: { type: String, required: true }
    });

    Item = mongooseModule.model('Item', ItemSchema);

    await Item.deleteMany(); // delete all documents in the collection
}

