import { Item } from "../utilities/database.js";

export const readAll = async (req, res) => {
    const items = await Item.find();
    res.send(items);
};