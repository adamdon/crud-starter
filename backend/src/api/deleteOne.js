import { Item } from "../utilities/database.js";

export const deleteOne = async (req, res) => {
    const deletedItems = await Item.deleteMany({ ref: req.body.ref });
    res.send(deletedItems);
};