import {Item} from "../utilities/database.js";




export default async function (req, res) {
    // Get all items from the database
    const items = await Item.find();

    res.send(items);
}