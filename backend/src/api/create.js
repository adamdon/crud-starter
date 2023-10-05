import {Item} from "../utilities/database.js";

export default async function (req, res) {
    const item = new Item({
        ref: req.body.ref,
        name: req.body.name
    });

    await item.save();

    res.send(item);
}