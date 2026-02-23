import type { RouterContext } from "@oak/oak";
import { Item } from "../utilities/database.ts";

export const update = async (ctx: RouterContext<"/api/update">): Promise<void> => {
  const body = await ctx.request.body.json();
  const filter = { ref: body.ref };
  const updateOp = { $set: { name: body.name } };
  const options = { multi: true };
  const updatedItems = await Item.updateMany(filter, updateOp, options);
  ctx.response.body = updatedItems;
};
