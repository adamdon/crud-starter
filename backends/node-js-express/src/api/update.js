import { Item } from "../utilities/database.js";

export const update = async (req, res) => {
    const filter = { ref: req.body.ref };
    const update = { $set: { name: req.body.name } };
    const options = { multi: true };
    const updatedItems = await Item.updateMany(filter, update, options);

    res.send(updatedItems);
};