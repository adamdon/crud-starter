import {Item} from "../utilities/database.js";

export default async function (req, res) {
    await Item.deleteOne({ ref: req.body.ref });

    res.send(new Item());
}