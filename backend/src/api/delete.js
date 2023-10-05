import {Item} from "../utilities/database.js";




export default async function (req, res) {

    const deletedItems = await Item.deleteMany({ref: req.body.ref });


    res.send(deletedItems);
}