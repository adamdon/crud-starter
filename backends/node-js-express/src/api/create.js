import { Item } from "../utilities/database.js";

export const create = async (req, res) => {
    const item = new Item({
        ref: req.body.ref,
        name: req.body.name
    });

    await item.save();

    res.send(item);
};