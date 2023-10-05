import {Item} from "../utilities/database.js";


export default async function (req, res) {
    // const item = await Item.findOne({ref: req.body.ref});

    const filter = { ref: req.body.ref };
    const update = {$set: {name: req.body.name}};
    const options = { multi: true };
    const updatedItems = await Item.updateMany(filter, update, options);


    // item.name = req.body.name;
    //
    // await item.save();

    res.send(updatedItems);
}