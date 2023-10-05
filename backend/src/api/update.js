import {Item} from "../utilities/database.js";

export default async function (req, res) {
    // Get the item from the database
    const item = await Item.findOne({ref: req.body.ref});

    // Update the item with the request body
    item.name = req.body.name;

    // Save the item to the database
    await item.save();

    res.send(item);
}